import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Row from '../Utilities/Row';
import './CMS.scss';
import AddRow from '../Utilities/addRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
export default class CMS extends Component {
	constructor(props) {
		super(props);
		this.state = { projects: [], isAdding: true };
	}

	componentDidMount = () => {
		axios.get('/api/projects').then((data) => {
			this.setState({ projects: data.data });
		});
	};

	onDelete = (id) => {
		axios.get('/api/projects').then((data) => {
			this.setState({ projects: data.data });
		});
		var list = this.state.projects.filter((task) => task.id !== id);
		this.setState({ projects: list });
	};
	addproj = (proj) => {
		this.setState({ isAdding: !this.state.isAdding });
		var list = this.state.projects;
		var size = this.state.projects.length;
		console.log(proj, this.state.projects);
		proj['id'] = this.state.projects.length > 0 ? this.state.projects[size - 1].id + 1 : 1;
		list.push(proj);
	};

	changeEditState = (e) => {
		this.setState({ isAdding: !this.state.isAdding });
		axios.get('/api/projects').then((data) => {
			this.setState({ projects: data.data });
		});
	};

	changeCancelEditState = (e) => {
		this.setState({ isAdding: !this.state.isAdding });
	};

	render() {
		let projectList = this.state.projects.map((data) => <Row key={data.id} data={data} delete={this.onDelete} />);
		return (
			<div className="CMS">
				<div className="projects_container">
					<NavLink className="navlink" to="/home">
						Home
					</NavLink>
					<table className="project_table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Description</th>
								<th>Website Link</th>
								<th>Github Link</th>
								<th />
							</tr>
						</thead>
						<tbody>
							{projectList}

							{this.state.isAdding ? (
								<tr>
									<td>
										<span className="icons">
											<FontAwesomeIcon
												className="plus"
												icon={faPlus}
												onClick={this.changeEditState}
											/>
										</span>
									</td>
								</tr>
							) : (
								<Fragment>
									<AddRow add={this.addproj} change={this.changeEditState} />
								</Fragment>
							)}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
