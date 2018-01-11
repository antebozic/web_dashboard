import React, { Component } from "react"
import logo from "../logo.svg"
import "./App.css"
import Clock from "../Clock/Clock.js"
import Weather from "../Weather/Weather.js"
import Iframe from "react-iframe"
// import Calendar from "react-calendar"

class App extends Component {
	render() {
		// getLocation()
		//
		//
		// var lat = 0
		// var long = 0
		//
		//
		// function getLocation() {
		// 				navigator.geolocation.getCurrentPosition(showPosition)
		// }
		//
		// function showPosition(position) {
		// 		console.log(position.coords.latitude )
		// 		console.log(position.coords.longitude)
		// 		lat = position.coords.latitude
		// 		long = position.coords.longitude
		// }

		return (
			<div>
				<div className="wrap">
					<div className="weather">
						<Weather />
					</div>

					<div className="clock">
						<Clock />
					</div>

					<div className="video">
						<Iframe
							url="https://mobile.reuters.com/"
							width="400"
							height="400"
							id="myId"
							className="myClassname"
							display="initial"
							position="relative"
							allowFullScreen
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default App
