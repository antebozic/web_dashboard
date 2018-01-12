import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { HashRouter as Router } from "react-router-dom"
import "./index.css"
import App from "./App/App.js"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
)
registerServiceWorker()
