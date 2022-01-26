import React from 'react'
import { useSelector } from 'react-redux'
import { selectEmployees } from '../../features/employees/employees'
import '@laurenthrt/hrnet-table/dist/index.css'
import { Container, Typography } from '@mui/material'

const EmployeeTable = React.lazy(() => import('@laurenthrt/hrnet-table'))

export default function EmployeeList() {
	const employees = useSelector(selectEmployees)

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
		<Container component="main" sx={{ mb: 4 }} className="formContainer">
			<Typography component="h1" variant="h4" mt={4} mb={4}>
				Current Employees
			</Typography>

			<EmployeeTable data={employees} columns={columns} />
		</Container>
	)
}
