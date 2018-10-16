import React from 'react';
import ReactDom from 'react-dom';
import { SkiDayList } from './components/skiDayList';
// import { SkiDayCount } from './components/skiDayCount-createClass';
import './stylesheets/main.scss';

// ReactDom.render(
// 	<SkiDayCount />,
// 	document.getElementById('react-container')
// );

ReactDom.render(
	<SkiDayList days={
		[
			{
				resort: "Squaw Valley",
				date: new Date("1/2/2016"),
				powder: true,
				backcountry: false
			},
			{
				resort: "Kirkwood",
				date: new Date("3/28/2016"),
				powder: false,
				backcountry: false
			},
			{
				resort: "Mt. Tallac",
				date: new Date("4/2/2016"),
				powder: false,
				backcountry: true
			}
		]
	}/>,
	document.getElementById('react-container')
);

/* <SkiDayList days={
	[
		{
			resort: "Squaw Valley",
			date: new Date("1/2/2016"),
			powder: true,
			backcountry: false
		},
		{
			resort: "Kirkwood",
			date: new Date("3/28/2016"),
			powder: false,
			backcountry: false
		},
		{
			resort: "Mt. Tallac",
			date: new Date("4/2/2016"),
			powder: false,
			backcountry: true
		}
	]
}/> */
