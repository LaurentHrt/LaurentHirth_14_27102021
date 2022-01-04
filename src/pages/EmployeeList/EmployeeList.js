import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../../features/employees/employees'
import { selectEmployees } from '../../features/employees/employees'
import EmployeeTable from 'hrnet-employee-table'
import { Button } from '@mui/material'

export default function EmployeeList() {
	const employees = useSelector(selectEmployees)
	const dispatch = useDispatch()

	const resetEmployees = () => {
		dispatch(reset())
	}

	return (
		<div className="container">
			<h1>Current Employees</h1>
			<EmployeeTable employees={employees} />
			<Button onClick={resetEmployees} variant="contained">
				*DEV* Reset
			</Button>
		</div>
	)
}
