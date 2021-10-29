import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useTable } from 'react-table'
import { selectEmployees } from '../../features/employees/employees'

export default function EmployeeList() {
	const employees = useSelector(selectEmployees)
	const data = useMemo(() => employees, [employees])
	const columns = useMemo(
		() => [
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
		],
		[]
	)

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data })

	return (
		<div className="container">
			<h1>Current Employees</h1>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>
									{column.render('Header')}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row)
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>
											{cell.render('Cell')}
										</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
