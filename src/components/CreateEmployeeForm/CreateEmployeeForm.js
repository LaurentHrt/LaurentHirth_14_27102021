import React, { useState } from 'react'
import { useFormik } from 'formik'
import { states } from '../../assets/data/states'
import { departments } from '../../assets/data/departments'
import { useDispatch } from 'react-redux'
import './style.css'

const add = React.lazy(() => import('../../features/employees/employees'))
const Modal = React.lazy(() => import('hrnet-employee-modal'))
const DatePicker = React.lazy(() => import('../DatePicker/DatePicker'))
const SelectMenu = React.lazy(() => import('../SelectMenu/SelectMenu'))

export default function CreateEmployeeForm() {
	const dispatch = useDispatch()
	const [modalIsOpen, setModalIsOpen] = useState(false)

	const formik = useFormik({
		initialValues: {
			firstname: '',
			lastname: '',
			dateOfBirth: '2000-01-01',
			startDate: '2021-01-01',
			street: '',
			city: '',
			state: states[0],
			zip: 0,
			department: departments[0],
		},
		onSubmit: (values) => {
			dispatch(add(values))
			setModalIsOpen(true)
		},
	})

	return (
		<div className="formContainer">
			<h1>Create Employee</h1>

			<form>
				<label>First Name</label>
				<input
					name="firstname"
					onChange={formik.handleChange}
					value={formik.values.firstname}
				/>

				<label>Last Name</label>
				<input
					name="lastname"
					onChange={formik.handleChange}
					value={formik.values.lastname}
				/>

				<label>Date of Birth</label>
				<DatePicker
					name="dateOfBirth"
					onChange={formik.handleChange}
					value={formik.values.dateOfBirth}
				/>

				<label>Start Date</label>
				<DatePicker
					name="startDate"
					onChange={formik.handleChange}
					value={formik.values.startDate}
				/>

				<fieldset>
					<legend>Address</legend>

					<label>Street</label>
					<input
						name="street"
						onChange={formik.handleChange}
						value={formik.values.street}
					/>

					<label>City</label>
					<input
						name="city"
						onChange={formik.handleChange}
						value={formik.values.city}
					/>

					<label>State</label>
					<SelectMenu
						name="state"
						value={formik.values.state}
						onChange={formik.handleChange}
						items={states}
					/>

					<label>Zip Code</label>
					<input
						type="number"
						name="zip"
						onChange={formik.handleChange}
						value={formik.values.zip}
					/>
				</fieldset>

				<label>Department</label>
				<SelectMenu
					name="department"
					value={formik.values.department}
					onChange={formik.handleChange}
					items={departments}
				/>
			</form>

			<button type="button" onClick={formik.handleSubmit}>
				Save
			</button>

			{modalIsOpen && (
				<Modal
					setOpen={setModalIsOpen}
					message="Employé créé avec succès !"
					buttonText="Ok"
				/>
			)}
		</div>
	)
}
