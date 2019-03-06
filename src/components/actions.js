import { createStore } from 'redux';

const Actions = {
    ADD_PROJECT: 'ADD_PROJECT',
    OPEN_PROJECT_FORM: 'OPEN_PROJECT_FORM',
    CLOSE_PROJECT_FORM: 'CLOSE_PROJECT_FORM',
    LOAD_TEAM_DATA: 'LOAD_TEAM_DATA',
    SAVE_TEAM_MEMBER: 'SAVE_TEAM_MEMBER',
    OPEN_TEAM_FORM: 'OPEN_TEAM_FORM',
    CLOSE_TEAM_FORM: 'CLOSE_TEAM_FORM',
    DELETE_TEAM_MEMBER: 'DELETE_TEAM_MEMBER'
}

const projectData = [{
    projectId: 1111,
    projectName: 'Project_Management',
    projectStartDate: new Date('02-28-2019'),
    projectEndDate: 'In Progress',
    projectDescription: 'This Project keeps detail of project and team member. :-)',
    teamMemberData: [{ employeeId: 1111, name: 'Bipender Singh', position: 'Associate', role: 'UI Developer', }]
}]

const initialState = {
    projectData: projectData,
    isProjectFormOpen: false,
    isTeamFormOpen: false
}

const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case Actions.OPEN_PROJECT_FORM:
            state.isProjectFormOpen = true;
            return { ...state };
        case Actions.CLOSE_PROJECT_FORM:
            state.isProjectFormOpen = false;
            return { ...state };
        case Actions.ADD_PROJECT:
            state.isProjectFormOpen = false;
            state.projectData = [...projectData, action.payLoad];
            return { ...state };
        case Actions.LOAD_TEAM_DATA:
            state.currentLoadedTeam = { ...action.payLoad };
            return { ...state };
        case Actions.SAVE_TEAM_MEMBER:
            const index = state.projectData.findIndex(project => project.projectId === state.currentLoadedTeam.projectId);
            state.projectData[index].teamMemberData = [...state.projectData[index].teamMemberData, action.payLoad];
            state.isTeamFormOpen = false;
            state.currentLoadedTeam = { ...state.projectData[index] };
            return { ...state };
        case Actions.OPEN_TEAM_FORM:
            state.isTeamFormOpen = true;
            return { ...state };
        case Actions.CLOSE_TEAM_FORM:
            state.isTeamFormOpen = false;
        case Actions.DELETE_TEAM_MEMBER:
            const projectIndex = state.projectData.findIndex(project => project.projectId === state.currentLoadedTeam.projectId);
            const teamMemberIndex = state.currentLoadedTeam.teamMemberData.findIndex(teamMember => teamMember.employeeId === action.payLoad.employeeId);
            state.currentLoadedTeam.teamMemberData.splice(teamMemberIndex, 1);
            state.projectData[projectIndex].teamMemberData = [...state.currentLoadedTeam.teamMemberData];
            state.currentLoadedTeam = { ...state.projectData[projectIndex] };
            return { ...state };
        default:
            return { ...state };
    }
}

const store = createStore(reducer);

export default store;
