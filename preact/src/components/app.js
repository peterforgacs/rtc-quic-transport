import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Container from './container';
import Header from './header';
import Footer from './footer';

// https://codesandbox.io/s/6w66jzw3mn
// https://github.com/developit/preact-mdl/blob/master/src/index.js

// Code-splitting is automated for routes
import Home from '../routes/home';
import Lab from '../routes/lab';
import Jobs from '../routes/jobs';
import Profile from '../routes/profile';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Container>
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Lab path="/lab" />
					<Jobs path="/jobs" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
				<Footer />
			</Container>
		);
	}
}
