import React, { Component } from "react"
import Iframe from "react-iframe"
import "./Bbc.css"

class Bbc extends Component {
	render() {
		return (
			<div className="video">
				<Iframe
					url="http://www.bbc.com/news"
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
export default Bbc
