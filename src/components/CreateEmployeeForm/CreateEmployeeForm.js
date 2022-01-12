import React, { useState } from 'react'
import { useFormik } from 'formik'
import { states } from '../../assets/data/states'
import { departments } from '../../assets/data/departments'
import add from '../../features/employees/employees'
import { useDispatch } from 'react-redux'
import Modal from 'hrnet-employee-modal'
import './style.css'
import DatePicker from '../DatePicker/DatePicker'
import SelectMenu from '../SelectMenu/SelectMenu'

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
				<label htmlFor="firstname">First Name</label>
				<input
					name="firstname"
					id="firstname"
					onChange={formik.handleChange}
					value={formik.values.firstname}
				/>

				<label htmlFor="lastname">Last Name</label>
				<input
					name="lastname"
					id="lastname"
					onChange={formik.handleChange}
					value={formik.values.lastname}
				/>

				<label htmlFor="dateOfBirth">Date of Birth</label>
				<DatePicker
					name="dateOfBirth"
					id="dateOfBirth"
					onChange={formik.handleChange}
					value={formik.values.dateOfBirth}
				/>

				<label htmlFor="startdate">Start Date</label>
				<DatePicker
					name="startDate"
					id="startDate"
					onChange={formik.handleChange}
					value={formik.values.startDate}
				/>

				<fieldset>
					<legend>Address</legend>

					<label htmlFor="street">Street</label>
					<input
						name="street"
						id="street"
						onChange={formik.handleChange}
						value={formik.values.street}
					/>

					<label htmlFor="city">City</label>
					<input
						name="city"
						id="city"
						onChange={formik.handleChange}
						value={formik.values.city}
					/>

					<label htmlFor="state">State</label>
					<SelectMenu
						name="state"
						id="state"
						value={formik.values.state}
						onChange={formik.handleChange}
						items={states}
					/>

					<label htmlFor="zip">Zip Code</label>
					<input
						type="number"
						name="zip"
						id="zip"
						onChange={formik.handleChange}
						value={formik.values.zip}
					/>
				</fieldset>

				<label htmlFor="department">Department</label>
				<SelectMenu
					name="department"
					id="department"
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
