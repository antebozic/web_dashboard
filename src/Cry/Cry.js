import React, { Component } from "react"
import Iframe from "react-iframe"
import "./Cry.css"

class Cry extends Component {
	render() {
		return (
			<div className="video">
				<Iframe
					url="https://cryptowat.ch/"
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
export default Cry
