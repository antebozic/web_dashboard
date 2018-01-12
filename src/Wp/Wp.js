import React, { Component } from "react"
import Iframe from "react-iframe"
import "./Wp.css"

class Wp extends Component {
	render() {
		return (
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
		)
	}
}
export default Wp
