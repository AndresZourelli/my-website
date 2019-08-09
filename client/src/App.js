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
				<h3>My name is Andres.</h3>
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
