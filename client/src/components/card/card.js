import React from 'react';
// import PropTypes from 'prop-types';
import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Card = ({ website, title, github }) => {
	return (
		<div className="CardBody" href={website}>
			<div className="card-modal">
				<h2>{title}</h2>
				<a href={github}>
					<FontAwesomeIcon icon={faGithub} size="2x" />
				</a>
			</div>
		</div>
	);
};

Card.defaultProps = {
	title: 'Oops No Title Found',
	github: '/',
	website: '/',
	image: '/'
};
export default Card;
