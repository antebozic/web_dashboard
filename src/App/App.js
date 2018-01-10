import React, { Component } from "react"
import logo from "../logo.svg"
import "./App.css"
import Clock from "../Clock/Clock.js"
import Weather from "../Weather/Weather.js"

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
			<div className='wrap'>

				<Clock />
				<Weather />

			</div>
		)
	}
}

export default App
