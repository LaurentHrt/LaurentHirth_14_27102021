import { useSelector } from 'react-redux'
// import EmployeesTable from '../../components/EmployeesTable/EmployeesTable'
import { selectEmployees } from '../../features/employees/employees'
import EmployeesTable from 'hrnet-employees-table'

export default function EmployeeList() {
	const employees = useSelector(selectEmployees)

	return (
		<div className="container">
			<h1>Current Employees</h1>
			<EmployeesTable employees={employees} />
		</div>
	)
}
