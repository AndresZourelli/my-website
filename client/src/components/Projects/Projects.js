import React, { useState, useEffect } from 'react';
import Card from '../card/card';
import './Projects.scss';
import axios from 'axios';

const Projects = () => {
	const [ data, setData ] = useState({ data: [] });

	useEffect(() => {
		const fetchData = async () => {
			const list = await axios.get('http://192.168.99.100:5000/api/projects');
			setData({ data: list.data });
		};
		fetchData();
	}, []);
	console.log(data)

	//let component = list && list.map((project) => <Card />);
	return (
		<div className="projects-container">
			<h1>Projects</h1>
			<div className="cardHolder">
				{data.data.map((item) => <Card key={item.id} title={item.name} description={item.description} github={item.github_link ? item.github_link : null} website={item.website_link ? item.website_link : null } />)}
			</div>
		</div>
	);
};

export default Projects;
