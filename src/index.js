import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import EmployeeList from './pages/EmployeeList/EmployeeList'
import Home from './pages/Home/Home'
import './index.css'
import Header from './components/Header/Header'
import NavMenu from './components/NavMenu/NavMenu'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header />
			<NavMenu />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/employee-list">
					<EmployeeList />
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
