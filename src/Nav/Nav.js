import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

class Nav extends Component {
	render() {
		return (
			<nav>
				<Link className="nav-link" to="/nyt">
					<strong>WSJ</strong>
				</Link>
				<Link className="nav-link" to="/wp">
					<strong>WP</strong>
				</Link>
				<Link className="nav-link" to="/bbc">
					<strong>BBC</strong>
				</Link>
				<Link className="nav-link" to="/reuters">
					<strong>REUTERS</strong>
				</Link>
				<Link className="nav-link" to="/welt">
					<strong>W24</strong>
				</Link>
				<Link className="nav-link" to="/cry">
					<strong>CRYPTO</strong>
				</Link>
			</nav>
		)
	}
}

export default Nav
