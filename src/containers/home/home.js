import React, { Component } from 'react'
import { Link } from 'react-router'
import { BASE_URL } from '../../constants/environment'

export default class Home extends Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	render() {
		return (
			<div>
				<section className="o-page home">
					<h1>Home</h1>
					<Link to="/scene1">
						Go to Scene 1
					</Link>
				</section>
			</div>
		)
	}
}
