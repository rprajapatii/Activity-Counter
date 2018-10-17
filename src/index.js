import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, hashHistory} from 'react-router-dom'
import { App } from './components/app';
import { Whoops404 } from './components/whoops404'
import './stylesheets/main.scss';

ReactDom.render((
	<Router history={hashHistory}>
      <div>
        <Route exact path="/" component={App} />
		<Route path="/list-days/:filter?" component={App} />
		<Route path="/add-day" component={App} />
        <Route path="*" component={Whoops404} />
      </div>
	</Router>),
	document.getElementById('react-container')
);
