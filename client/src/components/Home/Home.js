import React, { Component } from 'react';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fatwitter } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Card from '../card/card';
import AboutMe from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';
import Navigation from '../Navigation/Navigation';
export class Home extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<Navigation />
				</header>
				<main>
					<h1 className="main-name">Andres Zourelli</h1>
					<h2 className="main-description">
						Aeronautical and Mechanical Engineer, Web Developer, & Programmer
					</h2>
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
