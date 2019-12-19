import React from 'react';
import Card from '../card/card';
import './Projects.scss';
import axios from 'axios';

const Projects = () => {
	let list = axios.get('https://localhost:5000/api/projects').then((res) => {
		const projects = res.data;
		return projects;
	});
	let component = (list || []).map((project) => <Card />);
	return (
		<div className="projects-container">
			<h1>Projects</h1>
			<div className="cardHolder">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Projects;
