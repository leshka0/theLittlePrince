import React, { Component } from 'react'
import { Link } from 'react-router'
import { BASE_URL } from '../../constants/environment'

export default class Scene1 extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<section className="o-page scene1">
					<h1>Scene 1</h1>
					<Link to="/scene2">
						Go to Scene 2
					</Link>
				</section>
			</div>
		)
	}
}
