import React from 'react';
import { Link } from 'react-router-dom';
import ProjectForm from './project-form';
import { connect } from 'react-redux';
class ProjectDetail extends React.Component {
    constructor(){
        super();
        this.addProject = this.addProject.bind(this);
    }
    addProject(){
        this.props.dispatch({
            type: 'OPEN_PROJECT_FORM'
        })
    }
    loadTeam(data){
        this.props.dispatch({
            type: 'LOAD_TEAM_DATA',
            payLoad: data
        });
    }
    render() {
        return (
            <div>
                <ProjectForm />
                <h4>Project Details</h4>
                <input type="button" value="+ Add Project" className="addButton" onClick={this.addProject} />
                <table>
                    <thead>
                        <tr>
                            <th>Actions</th>
                            <th>Project ID</th>
                            <th>Project Name</th>
                            <th>Project Start Date</th>
                            <th>Project End Date</th>
                            <th>Project Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.projectData.map(data => {
                            return (
                                <tr key={data.projectId}>
                                    <td>
                                        <Link to="/teamDetail" onClick={()=>this.loadTeam(data)}>
                                            <span aria-hidden="true"><i className="fa fa-eye" aria-hidden="true"></i></span>
                                        </Link>
                                    </td>
                                    <td>{data.projectId}</td>
                                    <td>{data.projectName}</td>
                                    <td>{data.projectStartDate instanceof Date ?data.projectStartDate.toLocaleDateString(): data.projectStartDate}</td>
                                    <td>{data.projectEndDate instanceof Date ? data.projectEndDate.toLocaleDateString() : data.projectEndDate}</td>
                                    <td>{data.projectDescription}</td>
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
    return {
        projectData: state.projectData
    }
}

export default connect(mapPropsToState)(ProjectDetail);