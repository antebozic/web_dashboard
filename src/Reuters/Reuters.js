import React, { Component } from "react"
import Iframe from "react-iframe"
import "./Reuters.css"

class Reuters extends Component {
	render() {
		return (
			<div className="video">
				<Iframe
					url="http://mobile.reuters.com/"
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
export default Reuters
