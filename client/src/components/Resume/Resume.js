import React from 'react';
import './Resume.scss';
import Experience from '../Utilities/Experience/Experience';

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
					<div className="education">
						<div className="education-school">
							<div className="education-school-left">
								<h4>Aug. 2014 &ndash; May 2018</h4>
							</div>
							<div className="education-school-right">
								<h2>Rensselaer Polytechnic Institute</h2>
								<h4>B.S. Aeronautical and Mechanical Engineering</h4>
							</div>
						</div>
					</div>
					<div className="education">
						<div className="education-school">
							<div className="education-school-left">
								<h4>Sept. 2019 &ndash; Current</h4>
							</div>
							<div className="education-school-right">
								<h2>Oregon State University</h2>
								<h4>B.S. Computer Science</h4>
							</div>
						</div>
					</div>
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
