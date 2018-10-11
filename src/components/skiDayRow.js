import React from 'react'
import * as MaterialDesign from 'react-icons/md'
import * as Typicons from 'react-icons/ti'

export const SkiDayRow = ({resort, date, powder, backcountry}) => (
    <tr>
        <td>{date.getMonth()+1}/{date.getDate()}/
			{date.getFullYear()}</td>
        <td>{resort}</td>
        <td>{(powder) ? <MaterialDesign.MdTerrain /> : null}</td>
        <td>{(backcountry) ? <Typicons.TiWeatherSnow />: null}</td>
    </tr>
);
