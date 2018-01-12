import React, { Component } from "react"
import Iframe from "react-iframe"
import "./W24.css"

class W24 extends Component {
	render() {
		return (
			<div className="video">
				<Iframe
					url="https://www.welt.de/"
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
export default W24
