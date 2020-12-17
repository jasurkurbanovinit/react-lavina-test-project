import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Welcome, Quiz } from './../screens';
import Header from './../components/Header';
function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/quiz'>
					<Quiz />
				</Route>
				<Route path='/' exact={true}>
					<Welcome />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

// handle username
// show questions
// check for correct answer
// score
