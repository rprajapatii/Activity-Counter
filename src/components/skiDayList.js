import React from 'react';
import { SkiDayRow } from './skiDayRow';
import propTypes from 'prop-types';

export const SkiDayList = ({days}) => (
    <div className='ski-day-list'>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Resort</th>
                    <th>Powder</th>
                    <th>BackCountry</th>
                </tr>
            </thead>
            <tbody>
                {days.map((day, i) =>
                    <SkiDayRow key={i}
                        {...day}/>	
                )}
            </tbody>
        </table>
    </div>
)

SkiDayList.propTypes = {
	days: function(props) {
        console.log('inisde err check',props.days);
		if(!Array.isArray(props.days)) {
			return new Error(
				"SkiDayList should be an array"	
				)
		} else if(!props.days.length) {
			return new Error(
				"SkiDayList must have at least one record"
				)
		} else {
			return null
		}
	}
}

