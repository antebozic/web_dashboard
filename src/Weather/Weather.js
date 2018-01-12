import React, { Component } from "react"
import axios from "axios"
import "./Weather.css"
import { Icon } from "react-fa"

class Weather extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cityName: "",
			temp: "",
			description: "",
			lat: 38.9,
			long: -77.03
		}
	}

	componentWillMount() {
		const getLocation = () => {
			navigator.geolocation.getCurrentPosition(insertPosition)
		}

		const insertPosition = position => {
			console.log(position.coords.latitude)
			console.log(position.coords.longitude)
			console.log(".........................")
			console.log(this)
			this.setState({
				lat: position.coords.latitude,
				long: position.coords.longitude
			})
		}
		getLocation()
	}

	componentDidMount() {
		console.log(this.state.lat)
		console.log(this.state.long)

		axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?lat=${
					this.state.lat
				}&lon=${this.state.long}&APPID=eb41c79c7a871307b38ce5c3c2e44b0d`
			)
			.then(response => {
				console.log(response)
				console.log(response.data.name)
				console.log(response.data.main.temp)
				console.log(response.data.weather[0].main)

				// let loc = response.data.list[1].weather[0].description
				this.setState({
					cityName: response.data.name,
					temp: response.data.main.temp,
					description: response.data.weather[0].main
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<div className="weather">
				{this.state.cityName}
				<br />
				<i class="fa fa-thermometer-three-quarters" aria-hidden="true" />
				{Math.round((this.state.temp - 273.15) * 1.8 + 32) + " F"}
				<br />
				{this.state.description}
			</div>
		)
	}
}

export default Weather
