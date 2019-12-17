import React from 'react';
import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Card = ({ website, title, github, description }) => {
	let optionalButton = <button href={website}>See it Live</button>;
	return (
		<div className="CardBody">
			<div className="info">
				<h2>{title}</h2>
				<p>{description}</p>
				<div className="button-container">
					{website ? optionalButton : null}
					<button href={github}>
						View on <FontAwesomeIcon icon={faGithub} size="1x" />
					</button>
				</div>
			</div>
		</div>
	);
};

Card.defaultProps = {
	title: 'Oops No Title Found',
	description: 'Information Goes Here',
	github: '/',
	website: '/',
	image: '/'
};
export default Card;
