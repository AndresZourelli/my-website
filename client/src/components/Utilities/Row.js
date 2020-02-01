import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faEdit, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Row.scss';
import axios from 'axios';

export default class Row extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			data: this.props.data,
			name: this.props.data.name || '',
			description: this.props.data.description || '',
			github_link: this.props.data.github_link || '',
			website_link: this.props.data.website_link || ''
		};
	}

	changeEditState = (e) => {
		this.setState({ edit: !this.state.edit });
	};

	changeDelete = (e, id) => {
		axios
			.post('/api/projects/delete', {
				id: id
			})
			.then((err, result) => this.props.delete(id));
	};

	saveEditState = (e, id) => {
		this.setState({ edit: false });

		axios
			.post(`/api/projects/update`, {
				id: id,
				name: this.state.name,
				website: this.state.website_link,
				github: this.state.github_link,
				description: this.state.description
			})
			.then((err, data) => console.log('err', err, 'data', data));
	};

	handleChange = ({ target }) => {
		this.setState({ [target.name]: target.value });
	};
	render() {
		return (
			<tr>
				{this.state.edit ? (
					<td>
						<input name="name" value={this.state.name} onChange={this.handleChange} type="text" />{' '}
					</td>
				) : (
					<td>{this.state.name}</td>
				)}
				{this.state.edit ? (
					<td>
						<input
							name="description"
							value={this.state.description}
							onChange={this.handleChange}
							type="text"
						/>
					</td>
				) : (
					<td>{this.state.description}</td>
				)}
				{this.state.edit ? (
					<td>
						<input
							name="website_link"
							value={this.state.website_link}
							onChange={this.handleChange}
							type="text"
						/>
					</td>
				) : (
					<td>{this.state.website_link}</td>
				)}
				{this.state.edit ? (
					<Fragment>
						<td>
							<input
								name="github_link"
								value={this.state.github_link}
								onChange={this.handleChange}
								type="text"
							/>
						</td>
						<td>
							<span className="row_icons">
								<FontAwesomeIcon
									icon={faSave}
									onClick={(e) => this.saveEditState(e, this.props.data.id)}
								/>
							</span>
							<span className="row_icons">
								<FontAwesomeIcon icon={faTimes} onClick={(e) => this.changeEditState(e)} />
							</span>
						</td>
					</Fragment>
				) : (
					<Fragment>
						<td>{this.state.github_link}</td>
						<td>
							<span className="row_icons">
								<FontAwesomeIcon icon={faEdit} onClick={(e) => this.changeEditState(e)} />
							</span>
							<span className="row_icons">
								<FontAwesomeIcon
									icon={faTrash}
									onClick={(e) => this.changeDelete(e, this.props.data.id)}
								/>
							</span>
						</td>
					</Fragment>
				)}
			</tr>
		);
	}
}

Row.defaultProps = {
	name: 'default',
	description: 'default',
	website_link: 'default',
	github_link: 'default'
};
