import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';
import axios from "axios"

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
	}

	handleReport = (city) => {
		const API_KEY = 'a9f6719e37f20890ebff5d91724dec1f';
		const BASE_URL = 'http://api.openweathermap.org/data/2.5';

		axios.get(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`)
		.then(response => {
			this.setState({
				report: response.data,
			})
		})
		.catch(error => {
			console.log(error);
		})
	}

	componentDidMount() {
		this.handleReport();
	}

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity onSearch={this.handleReport} />

					{
						this.state.report
						? (
							<WeatherReport data={this.state.report}/>
						)
						: ''
					}
				</div>
			</div>
		)
	}
}

export default App;
