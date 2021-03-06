import React from 'react';
import * as MaterialDesign from 'react-icons/md';
import * as Typicons from 'react-icons/ti';
import PropTypes from 'prop-types';

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%');
}

const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
}

export const SkiDayCount = ({total, powder, backcountry, goal}) => (
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
            <Typicons.TiCalendar />
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{powder}</span>
            <Typicons.TiWeatherSnow />
            <span>days</span>
        </div>
        <div className="backcountry-days">
            <span>{backcountry}</span>
            <MaterialDesign.MdTerrain />
            <span>days</span>
        </div>
        <div>
            <span>
                {calcGoalProgress(
                    total, 
                    goal
                )}
            </span>
        </div>
    </div>
)

SkiDayCount.defaultProps = {
    total: 0,
    powder: 0, 
    backcountry: 0, 
    goal: 0
};

SkiDayCount.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number,
    goal: PropTypes.number
}