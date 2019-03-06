import React from 'react';
import { connect } from 'react-redux';

class ProjectForm extends React.Component {
    constructor() {
        super();
        this.closeWindow = this.closeWindow.bind(this);
        this.addProject = this.addProject.bind(this);
    }
    closeWindow() {
        this.props.dispatch({
            type: 'CLOSE_PROJECT_FORM'
        });
    }

    addProject(e) {
        e.preventDefault();
        const projectData = {
            projectId: this.refs.projectId.value,
            projectName: this.refs.projectName.value,
            projectStartDate: this.refs.projectStartDate.value,
            projectEndDate: this.refs.projectEndDate.value,
            projectDescription: this.refs.projectDescription.value,
            teamMemberData: []
        }

        this.props.dispatch({
            type: 'ADD_PROJECT',
            payLoad: projectData
        });
    }


    render() {
        if (this.props.isProjectFormOpen) {
            return (
                <div className="popUpWindow">
                    <div className="popUpContentWindow">
                        <div className="header row">
                            <div className="col-md-11">
                                <h5>Please Enter Project Details</h5>
                            </div>
                            <div className="col-md-1 mr-0">
                                <button type="button" className="close" aria-label="Close" onClick={this.closeWindow}>
                                    <span aria-hidden="true"><i className="fa fa-times" aria-hidden="true" style={{ color: 'white' }}></i></span>
                                </button>
                            </div>
                        </div>
                        <form className="projectForm">
                            <div className="row">
                                <div className="col-md-3">
                                    <label htmlFor="projectId"><b>Project Id</b></label>
                                    <input type="text" className="form-control" ref="projectId" id="projectId" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="projectName"><b>Project Name</b></label>
                                    <input type="text" className="form-control" ref="projectName" id="projectName" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="empprojectStartDateAddress"><b>Project StartDate</b></label>
                                    <input type="date" className="form-control" ref="projectStartDate" id="projectStartDate" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="projectEndDate"><b>Project EndDate</b></label><br />
                                    <input type="date" className="form-control" ref="projectEndDate" id="projectEndDate" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="projectDescription"><b>Project Description</b></label><br />
                                    <textarea type="text" className="form-control" ref="projectDescription" id="projectDescription" ></textarea>
                                </div>
                                <div className="col-md-3 mt-4 p-3">
                                    <input type="button" value="Submit" className="btn btn-success mr-2" onClick={this.addProject} />

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
        isProjectFormOpen: state.isProjectFormOpen
    }
}

export default connect(mapPropsToState)(ProjectForm);
