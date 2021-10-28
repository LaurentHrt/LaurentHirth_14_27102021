import { Link } from 'react-router-dom'

export default function NavMenu() {
	return (
		<nav>
			<Link to="/">Create Employee</Link>
			<Link to="/employee-list">Current Employees</Link>
		</nav>
	)
}
