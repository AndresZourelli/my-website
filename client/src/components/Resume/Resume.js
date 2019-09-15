import React from 'react';
import './Resume.scss';
import Experience from '../Utilities/Experience/Experience';
import Education from '../Utilities/Education/Education';

const Resume = () => {
	return (
		<div className="resume-container">
			<div className="left-resume">
				<h2>About Me</h2>
			</div>
			<div className="right-resume">
				<div className="education-main-container">
					<div className="education-title">
						<h1>Education</h1>
					</div>
					<Education
						edu_dates="Aug. 2014 &ndash; May 2018"
						name="Rensselaer Polytechnic Institute"
						degree_type="B.S. Aeronautical and Mechanical Engineering"
					/>
					<Education
						edu_dates="Sept. 2019 &ndash; Current"
						name="Oregon State University"
						degree_type="B.S. Computer Science"
					/>
				</div>
				<div className="resume-section-divide-container" />

				<div className="experience-main-container">
					<div className="experience-title">
						<h1>Experience</h1>
					</div>
					<Experience
						title="Reliability & Maintainability Engineer"
						description="hello"
						experience_date="July 2018 &ndash; Current"
						company="The Boeing Company"
					/>
					<Experience
						title="Advanced Manufacturing Engineering Intern"
						description="hello"
						experience_date="Jun 2018 &ndash; Aug. 2017"
						company="Honeywell Aerospace"
					/>
				</div>
			</div>
		</div>
	);
};

export default Resume;
