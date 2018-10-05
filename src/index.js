import React from 'react';
import ReactDom from 'react-dom';
import { hello} from './lib';
import './stylesheets/style.scss';

ReactDom.render(
	<div>
		<h1>Hello, world!</h1>
		{hello}
	</div>,
	
	document.getElementById('react-container')
);