import React from 'react';
import './Experience.scss';

const Experience = ({ title, experience_date, company, description, children }) => {
	return (
		<div className="experience">
			<div className="experience-job">
				<div className="experience-left">
					<h4>{experience_date}</h4>
				</div>
				<div className="experience-right">
					<h2>{company}</h2>
					<h4>{title}</h4>
					<p>{description}</p>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Experience;
