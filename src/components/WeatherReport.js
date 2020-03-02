import React from 'react';
import WeatherConditions from "./WeatherConditions"

const WeatherReport = props => {
	return (
		<div id="WeatherReport">
			<div className="card bg-dark text-white">
				<div className="card-body text-center">
					<h5 className="card-title">The temperature in {props.data.name} is {props.data.main.temp} &deg; C right now, with a humidity of {props.data.main.humidity} %.</h5>
					<WeatherConditions conditions={props.data}/>
				</div>
			</div>
		</div>
	)
}

export default WeatherReport;
