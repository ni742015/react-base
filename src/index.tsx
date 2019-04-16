import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Demo from './pages/demo';
import App from './pages/home';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';
import Store from './utils/store';

const store = Store({})
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/demo">Demo</Link>
					</li>
				</ul>
			</nav>
			<Route exact path="/" component={App} />
			<Route path="/demo" component={Demo} />
		</Router>
	</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
