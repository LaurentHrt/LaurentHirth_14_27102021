import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import EmployeeList from './pages/EmployeeList/EmployeeList'
import Home from './pages/Home/Home'
import './utils/style.css'
import Header from './components/Header/Header'
import NavMenu from './components/NavMenu/NavMenu'
import { Provider } from 'react-redux'
import { store } from './utils/store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
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
				</Suspense>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
