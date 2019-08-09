import React from 'react';
// import PropTypes from 'prop-types';
import './card.scss';

const Card = ({ website, title, github }) => {
	return (
		<div className="CardBody" href={website}>
			<h2>{title}</h2>
			<a href={github}>a</a>
		</div>
	);
};

Card.defaultProps = {
	title: 'Oops No Title Found',
	github: '/',
	website: '/'
};
export default Card;
