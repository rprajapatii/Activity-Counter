import React from 'react';
import { SkiDayRow } from './skiDayRow';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom'

export const SkiDayList = ({days,filter}) => {
    const filteredDays = (!filter || 
        !filter.match(/powder|backcountry/))?
        days:
        days.filter(day => day[filter])

    return(
        <div className='ski-day-list'>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Resort</th>
                        <th>Powder</th>
                        <th>BackCountry</th>
                    </tr>
                    
                    <tr>
                        <td colSpan={4}>
                            <Link to='/list-days' activeClassName='selected'>All Days</Link>
                            <Link to='/list-days/powder' activeClassName='selected'>Powder Days</Link>
                            <Link to='/list-days/backcountry' activeClassName='selected'>Backcountry Days</Link>
                        </td>
                    </tr>
                    
                </thead>
                <tbody>
                    {filteredDays.map((day, i) =>
                        <SkiDayRow key={i}
                            {...day}/>	
                    )}
                </tbody>
            </table>
        </div>
    )
}

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

