import React from 'react';
import PropTypes from 'prop-types';
import * as MaterialDesign from 'react-icons/md';
import * as Typicons from 'react-icons/ti';

export class SkiDayCount extends React.Component{
    
    percentToDecimal(decimal){
        return ((decimal * 100) + '%');
    }
    
    calcGoalProgress(total, goal){
        return this.percentToDecimal(total/goal);
    }

    render() {
        return(
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{this.props.total}</span>
                    <Typicons.TiCalendar />
                    <span>days</span>
                </div>
                <div className="powder-days">
                    <span>{this.props.powder}</span>
                    <Typicons.TiWeatherSnow />
                    <span>days</span>
                </div>
                <div className="backcountry-days">
                    <span>{this.props.backcountry}</span>
                    <MaterialDesign.MdTerrain />
                    <span>days</span>
                </div>
                <div>
                    <span>
                        {this.calcGoalProgress(
                            this.props.total, 
                            this.props.goal
                        )}
                    </span>
                </div>
            </div>
        )
    }
}

SkiDayCount.defaultProps = {
    total: 50,
    powder: 50, 
    backcountry: 15, 
    goal: 100
};