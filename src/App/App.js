import React, { Component } from "react"
import logo from "../logo.svg"
import "./App.css"
import Clock from "../Clock/Clock.js"
import Weather from "../Weather/Weather.js"
import Iframe from "react-iframe"

class App extends Component {
	render() {
		console.log(Iframe.url)

		return (
			<div className="wrap">
				<div class="head">
					<div className="weather">
						<Weather />
					</div>

					<div className="clock">
						<Clock />
					</div>
				</div>

				<div className="video">
					<Iframe
						url="https://www.washingtonpost.com/regional/"
						width="460"
						height="390"
						id="myId"
						className="myClassname"
						display="initial"
						position="relative"
						allowFullScreen
					/>
				</div>
			</div>
		)
	}
}

export default App
