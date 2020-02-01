import React, { Component } from 'react';
import './Row.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons';
export default class AddRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: '',
			github_link: '',
			website_link: ''
		};
	}

	saveEditState = (e, id) => {
		axios.post(`/api/projects`, {
			id: id,
			name: this.state.name,
			website: this.state.website_link,
			github: this.state.github_link,
			description: this.state.description
		});
		this.props.add(this.state);
	};
	onCancelEdit = () => {
		this.props.change();
		this.setState({
			name: '',
			description: '',
			github_link: '',
			website_link: ''
		});
	};
	handleChange = ({ target }) => {
		this.setState({ [target.name]: target.value });
	};
	render() {
		return (
			<tr>
				<td>
					<input
						name="name"
						placeholder="Project Name"
						value={this.state.name}
						onChange={this.handleChange}
						type="text"
					/>{' '}
				</td>

				<td>
					<input
						placeholder="Description"
						name="description"
						value={this.state.description}
						onChange={this.handleChange}
						type="text"
					/>
				</td>

				<td>
					<input
						placeholder="Website Link"
						name="website_link"
						value={this.state.website_link}
						onChange={this.handleChange}
						type="text"
					/>
				</td>

				<td>
					<input
						placeholder="Github Link"
						name="github_link"
						value={this.state.github_link}
						onChange={this.handleChange}
						type="text"
					/>
				</td>
				<td>
					<span className="icons">
						<FontAwesomeIcon icon={faSave} onClick={this.saveEditState} />
					</span>
					<span className="icons">
						<FontAwesomeIcon className="cancel" icon={faTimes} onClick={this.onCancelEdit} />
					</span>
				</td>
			</tr>
		);
	}
}

AddRow.defaultProps = {
	name: 'default',
	description: 'default',
	website_link: 'default',
	github_link: 'default'
};
