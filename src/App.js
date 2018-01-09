import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Clock from "./Clock/Clock.js"

class App extends Component {
	render() {
		return (
			<div>
				<Clock />
			</div>
		)
	}
}

export default App
