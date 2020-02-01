import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import CMS from './components/CMS/CMS';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/CMS" component={CMS} />
				<Route component={Home} />
			</Switch>
		</div>
	);
}

export default App;
