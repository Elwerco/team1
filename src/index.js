import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Zero from './routes/Zero';
import Menu from './components/Menu';

import App from './containers/App';

import 'semantic-ui-css/semantic.min.css';
import './app.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import createStore from './store';
const store = createStore();

const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Route exact path='/' component={App} />
				<Route path='/:id1' component={Zero} />
				<Route path='/1' component={Zero} />

			</div>
		</Router>
	</Provider>,
	document.getElementById('root'));
