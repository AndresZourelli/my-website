import React, { Component } from 'react';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
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
						In addition to my{' '}
						<span className="school">
							<a href="https://www.rpi.edu/">BS in Aeronautical and Mechanical engineering</a>
						</span>{' '}
						from Rensselaer Polytechnic Institute, I am also working on earning a{' '}
						<span className="school">
							<a href="https://oregonstate.edu/">BS in Computer Science</a>
						</span>{' '}
						from Oregon State University.
					</h3>
					<div className="icons">
						<a href="/" className="id">
							<FontAwesomeIcon icon={faLinkedin} size="2x" />
						</a>
						<a href="/" className="id">
							<FontAwesomeIcon icon={faGithub} size="2x" />
						</a>
					</div>
				</main>
				<h1>Added</h1>
				<Projects />
				<div className="footer">Andres Zourelli, 2019</div>
			</div>
		);
	}
}

export default Home;
