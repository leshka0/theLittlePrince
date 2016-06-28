import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/app'
import Home from '../containers/home/home';
import Scene1 from '../containers/scene1/scene1'
import Scene2 from '../containers/scene2/scene2'

export default function configureRoutes() {
	return (
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/scene1" component={Scene1} />
			<Route path="/scene2" component={Scene2} />
			<Route path="*" component={Home} />
		</Route>
	)
}
