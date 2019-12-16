import React from 'react';
import Card from '../card/card';
import './Projects.scss';

const Projects = () => {
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
