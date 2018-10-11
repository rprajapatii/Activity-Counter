import React from 'react';
import { SkiDayRow } from './skiDayRow';

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
