import React from 'react';
import ReactDom from 'react-dom';
import { SkiDayCount } from './components/skiDaysCount';
import './stylesheets/main.scss';

ReactDom.render(
	<SkiDayCount total={50}
				powder={20}
				backcountry={10}
				goal={100}/>,
	document.getElementById('react-container')
);
