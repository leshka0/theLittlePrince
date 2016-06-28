import React, { Component } from 'react'
import { Link } from 'react-router'
import { BASE_URL } from '../../constants/environment'

export default class Scene2 extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<section className="o-page scene2">
					<h1>Scene 2</h1>
					<Link to="/scene3">
						Go to Scene 3
					</Link>
				</section>
			</div>
		)
	}
}
