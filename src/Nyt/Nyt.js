import React, { Component } from "react"
import Iframe from "react-iframe"
import "./Nyt.css"

class Nyt extends Component {
	render() {
		return (
			<div className="video">
				<Iframe
					url="https://mobile.nytimes.com/"
					width="460"
					height="390"
					id="myId"
					className="myClassname"
					display="initial"
					position="relative"
					allowFullScreen
				/>
			</div>
		)
	}
}
export default Nyt
