import React, { Component } from "react"
import logo from "../logo.svg"
import "./App.css"
import Clock from "../Clock/Clock.js"
import Weather from "../Weather/Weather.js"
// import Iframe from "react-iframe"
import { Redirect, Route, Switch } from "react-router-dom"
import Nyt from "../Nyt/Nyt.js"
import Wp from "../Wp/Wp.js"
import Bbc from "../Bbc/Bbc.js"
import Reuters from "../Reuters/Reuters.js"
import Welt from "../Welt/Welt.js"
import Cry from "../Cry/Cry.js"
import Nav from "../Nav/Nav.js"

class App extends Component {
	render() {
		// console.log(Iframe.url)

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

				<Nav />

				<Switch>
					<Route exact path="/nyt" render={() => <Nyt />} />

					<Route exact path="/wp" render={() => <Wp />} />

					<Route exact path="/bbc" render={() => <Bbc />} />

					<Route exact path="/reuters" render={() => <Reuters />} />

					<Route exact path="/welt" render={() => <Welt />} />

					<Route exact path="/cry" render={() => <Cry />} />

					<Route path="/*" render={() => <Redirect to="/nyt" />} />
				</Switch>
			</div>
		)
	}
}

export default App
