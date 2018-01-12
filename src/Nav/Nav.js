import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

class Nav extends Component {
	render() {
		return (
			<nav>
				<Link className="nav-link" to="/nyt">
					NYT
				</Link>
				<Link className="nav-link" to="/wp">
					WP
				</Link>
				<Link className="nav-link" to="/bbc">
					BBC
				</Link>
				<Link className="nav-link" to="/reuters">
					REUTERS
				</Link>
				<Link className="nav-link" to="/w24">
					<strong>W24</strong>
				</Link>
				<Link className="nav-link" to="/crypto">
					CRYPTO
				</Link>
			</nav>
		)
	}
}

export default Nav
