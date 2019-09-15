import React from 'react';
import './Education.scss';
const Education = ({ edu_dates, name, degree_type }) => {
	return (
		<div className="education">
			<div className="education-school">
				<div className="education-school-left">
					<h4>{edu_dates}</h4>
				</div>
				<div className="education-school-right">
					<h2>{name}</h2>
					<h4>{degree_type}</h4>
				</div>
			</div>
		</div>
	);
};

export default Education;
