import React, { Component } from 'react';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import AboutMe from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';

export class Home extends Component {
	render() {
		return (
			<div className="App">
				<main>
					<h1 className="main-name">Hello! My name is Andres.</h1>
					<h3 className="main-description">
						I am a Systems Engineer for the Optimized Maintenance program at Boeing where I help airline
						customers analyze their maintenance programs effectiveness and recommend changes to them.
					</h3>
					<h3 className="main-description">
						I am also working on earning a degree in Computer Science from Oregon State University.
					</h3>
					<h3 className="main-description">Click below to see my recent projects and contact information.</h3>
					<div className="icons">
						<a href="/" className="id">
							<FontAwesomeIcon icon={faLinkedin} size="2x" />
						</a>
						<a href="/" className="id">
							<FontAwesomeIcon icon={faGithub} size="2x" />
						</a>
					</div>
				</main>
				<AboutMe />
				<Resume />
				<Projects />
			</div>
		);
	}
}

export default Home;
