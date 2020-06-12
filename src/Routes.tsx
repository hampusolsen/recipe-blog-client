import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' components={Home} />
				<Route exact path='/register' components={Register} />
				<Route exact path='/login' components={Login} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;
