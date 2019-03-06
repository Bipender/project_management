import React from 'react';
import { connect } from 'react-redux';

class TeamForm extends React.Component {
    constructor() {
        super();
        this.closeWindow = this.closeWindow.bind(this);
        this.saveTeamMember = this.saveTeamMember.bind(this);
    }
    closeWindow(e) {
        e.preventDefault();
        this.props.dispatch({ type: 'CLOSE_TEAM_FORM' });
    }

    saveTeamMember(e) {
        e.preventDefault();
        const teamMemberData = {
            employeeId: this.refs.employeeId.value,
            name: this.refs.name.value,
            position: this.refs.position.value,
            role: this.refs.role.value
        }
        this.props.dispatch({
            type: 'SAVE_TEAM_MEMBER',
            payLoad: teamMemberData
        });
    }


    render() {
        if (this.props.isTeamFormOpen) {
            return (
                <div className="popUpWindow">
                    <div className="popUpContentWindow">
                        <div className="header row">
                            <div className="col-md-11">
                                <h5>Please Enter Team Member Details</h5>
                            </div>
                            <div className="col-md-1 mr-0">
                                <button type="button" className="close" aria-label="Close" onClick={this.closeWindow}>
                                    <span aria-hidden="true"><i className="fa fa-times" aria-hidden="true" style={{ color: 'white' }}></i></span>
                                </button>
                            </div>
                        </div>
                        <form className="projectForm">
                            <div className="row">
                                <div className="col-md-2">
                                    <label htmlFor="employeeId"><b>Employee Id</b></label>
                                    <input type="text" className="form-control" ref="employeeId" id="employeeId" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="name"><b>Name</b></label>
                                    <input type="text" className="form-control" ref="name" id="name" />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="position"><b>Position</b></label>
                                    <select id="position" ref="position">
                                        <option value="Programmer Analyst Trainee">Programmer Analyst Trainee</option>
                                        <option value="Programmer Analyst">Programmer Analyst</option>
                                        <option value="Associate">Associate</option>
                                        <option value="Sr. Associate">Sr. Associate</option>
                                        <option value="Architect">Architect</option>
                                        <option value="Sr. Architect">Sr. Architect</option>
                                        <option value="Lead Architect">Lead Architect</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Sr. Manager">Sr. Manager</option>
                                        <option value="Associate Director">Associate Director</option>
                                        <option value="Director">Director</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="role"><b>Role</b></label><br />
                                    <select id="role" ref="role">
                                        <option value="Developer">Developer</option>
                                        <option value="Lead">Lead</option>
                                        <option value="Delivery Manager">Delivery Manager</option>
                                        <option value="Delivery Head">Delivery Head</option>
                                        <option value="Scrum Master">Scrum Master</option>
                                        <option value="Tester">Tester</option>
                                    </select>
                                </div>

                                <div className="col-md-3 mt-4 p-3">
                                    <input type="button" value="Submit" className="btn btn-success mr-2" onClick={this.saveTeamMember} />

                                    <input type="submit" value="Cancel" className="btn btn-danger mr-2" onClick={this.closeWindow} />

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
        else {
            return (null);
        }
    }
}

const mapPropsToState = (state) => {
    return {
        isTeamFormOpen: state.isTeamFormOpen
    }
}

export default connect(mapPropsToState)(TeamForm);
