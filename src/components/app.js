import React from 'react';
import { SkiDayList } from './skiDayList';
import { SkiDayCount } from './skiDayCount';
import { AddDayForm } from './addDayForm';
import { Menu } from './menu'

export class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            allSkiDays: [
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
        };
    }

    countDays(filtervalue) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filtervalue) ? day[filtervalue] : day).length
    }

    render() {
        return (
            <div className="app">
                <Menu/>
                {(this.props.location.pathname === '/') ?
                        <SkiDayCount total={this.countDays()}
                        powder={this.countDays(
                                "powder"
                            )}
                    backcountry={this.countDays(
                            "backcountry"
                        )}/> :
                    (this.props.location.pathname === '/add-day') ?
                        <AddDayForm /> :

                    <SkiDayList days={this.state.allSkiDays}
                                filter={this.props.match.params.filter}/>			
                }
            </div>
        );
    }
}
