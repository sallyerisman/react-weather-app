import React from "react"

function WeatherConditions(props) {
	return (
		<p>The current conditions are: {props.conditions.weather[0].description}</p>
	)
}

export default WeatherConditions
