import { useSelector } from 'react-redux'
// import EmployeesTable from '../../components/EmployeesTable/EmployeesTable'
import { selectEmployees } from '../../features/employees/employees'
import EmployeeTable from 'hrnet-employee-table'

export default function EmployeeList() {
	const employees = useSelector(selectEmployees)

	return (
		<div className="container">
			<h1>Current Employees</h1>
			<EmployeeTable employees={employees} />
		</div>
	)
}
