import React from 'react';
import { connect } from 'react-redux';
import TeamForm from './team-form';

class TeamDetail extends React.Component {
    constructor() {
        super();
        this.addTeamMember = this.addTeamMember.bind(this);
        this.deleteTeamMember = this.deleteTeamMember.bind(this);
    }

    addTeamMember(e) {
        e.preventDefault();       
        this.props.dispatch({ type: 'OPEN_TEAM_FORM' });
    }

    deleteTeamMember(data){
        this.props.dispatch({
            type: 'DELETE_TEAM_MEMBER',
            payLoad: data
        });
    }


    render() {
        return (
            <div>
                <TeamForm />
                <h4>Team Details</h4>
                <input type="button" value="+ Add Project" className="addButton" onClick={this.addTeamMember} />
                <table>
                    <thead>
                        <tr>
                            <th>Actions</th>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.teamData.map(data => {
                            return (
                                <tr key={data.employeeId}>
                                    <td>
                                        <button aria-hidden="true" onClick={() => this.deleteTeamMember(data)} className="trashButton">
                                            <span aria-hidden="true"><i className="fa fa-trash" aria-hidden="true"></i></span>
                                        </button>
                                    </td>
                                    <td>{data.employeeId}</td>
                                    <td>{data.name}</td>
                                    <td>{data.position}</td>
                                    <td>{data.role}</td>
                                </tr>
                            );
                        })}
                    </tbody>

                </table>
            </div>
        );
    }
}

const mapPropsToState = (state) => {
    console.log(state.currentLoadedTeam);
    return {
        teamData: state.currentLoadedTeam.teamMemberData
    }
}
export default connect(mapPropsToState)(TeamDetail);