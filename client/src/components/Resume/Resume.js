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
						title="Systems Engineer for the Optimized Maintenance Program"
						experience_date="Sept. 2019 &ndash; Current"
						company="The Boeing Company">
						<ul>
							<li>
								Performed analysis on aircraft maintence tasks in order to determine their
								effectiveness.
							</li>
							<li>
								Cleaned and sorted maintenance data so it could be fed into our statistical maintenance
								interval model.
							</li>
							<li>
								Based on results from the statistical model and using my engineering judgement to
								determine new intervals for the maintenace task.
							</li>
						</ul>
					</Experience>
					<Experience
						title="Reliability & Maintainability Engineer for AWACS/AEW&C"
						experience_date="July 2018 &ndash; Sept. 2019"
						company="The Boeing Company">
						<ul>
							<li>
								Analyzed new designs to ensure their maintainability and human factors were taken into
								consideration.
							</li>
							<li>
								Cleaned and organized fleet wide failure data in support of the FRACAS programs for
								several models of aircraft.
							</li>
							<li>
								Performed Root Cause analysis on top 5 failure items then presented findings to the
								customer.
							</li>
						</ul>
					</Experience>
					<Experience
						title="Advanced Manufacturing Engineering Intern"
						description="hello"
						experience_date="Jun. 2018 &ndash; Aug. 2017"
						company="Honeywell Aerospace">
						<ul>
							<li>
								Performed a time study of a testing procedure for an ACM where several areas of
								improvements were identified and a fix to those would lead to a 100% increase in amount
								of units tested in a day.
							</li>
							<li>
								Conducted a PFMEA of the VCRU manufacturing process to help identify and record issues
								during production and provided recommendations to fix them.
							</li>
							<li>
								Tracked and ensured that needed components were going to arrive by the "need by" dates
								in order to meet the flight test date goal.
							</li>
						</ul>
					</Experience>
				</div>
			</div>
		</div>
	);
};

export default Resume;
