import React from 'react';
import Card from '../card/card';
import './Work.scss';

const Work = () => {
	return (
		<div className="projects-container">
			<h1>Jobs Held</h1>
			<div className="cardHolder">
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Work;
