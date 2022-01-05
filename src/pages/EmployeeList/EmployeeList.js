import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../../features/employees/employees'
import { selectEmployees } from '../../features/employees/employees'
import EmployeeTable from 'hrnet-employee-table'
import './style.css'

export default function EmployeeList() {
	const employees = useSelector(selectEmployees)
	const dispatch = useDispatch()

	const resetEmployees = () => {
		dispatch(reset())
	}

	const columns = [
		{
			Header: 'First Name',
			accessor: 'firstname',
		},
		{
			Header: 'Last Name',
			accessor: 'lastname',
		},
		{
			Header: 'Date Of Birth',
			accessor: 'dateOfBirth',
		},
		{
			Header: 'Start Date',
			accessor: 'startDate',
		},
		{
			Header: 'Street',
			accessor: 'street',
		},
		{
			Header: 'City',
			accessor: 'city',
		},
		{
			Header: 'State',
			accessor: 'state',
		},
		{
			Header: 'Zip Code',
			accessor: 'zip',
		},
		{
			Header: 'Department',
			accessor: 'department',
		},
	]

	return (
		<div className="container">
			<h1>Current Employees</h1>
			<EmployeeTable data={employees} columns={columns} />
			<button onClick={resetEmployees}>*DEV* Reset</button>
		</div>
	)
}
