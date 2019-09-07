import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fatwitter } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Card from './components/card/card';

function App() {
	return (
		<div className="App">
			<header>
				<nav>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">About Me</a>
						</li>
						<li>
							<a href="/">Portfolio</a>
						</li>
						<li>
							<a href="/">Contact Me</a>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<h1 className="main-name">Andres Zourelli</h1>
				<h2 className="main-description">Aeronautical and Mechanical Engineer, Web Developer, & Programer</h2>
				<div className="icons">
					<a href="/" className="id">
						<FontAwesomeIcon icon={faLinkedin} size="2x" />
					</a>
					<a href="/" className="id">
						<FontAwesomeIcon icon={faGithub} size="2x" />
					</a>
				</div>
			</main>
			<div className="nameCard">
				<h1>Hi, My name is Andres Zourelli and Welcome to my website!</h1>
				<br />
				<h4>
					I am an Aerospace Engineer with a passion for coding. I love creating new software that I find
					entertaining or helps those around me. I currently specialize in Full-stack development but also
					dabble in other software development fields, such as Python and C/C++. I want to persue my passion
					for software development as a career so I am in the process of completing my degree in Computer
					Science at Oregon State University.
				</h4>
			</div>
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
}

export default App;
