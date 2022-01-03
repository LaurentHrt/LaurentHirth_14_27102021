import { useFormik } from 'formik'
import { states } from '../../assets/data/states'
import { departments } from '../../assets/data/departments'
import { useDispatch } from 'react-redux'
import { add } from '../../features/employees/employees'
import Button from '@mui/material/Button'
import { FormControl, InputLabel, TextField, Grid } from '@mui/material'
import Modal from 'hrnet-modal'
// import Modal from '../Modal/Modal'
import { useState } from 'react'
import DatePicker from '../DatePicker/DatePicker'
import SelectMenu from '../SelectMenu/SelectMenu'

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

			<Grid container rowSpacing={3} columnSpacing={3}>
				<Grid item xs={12} sm={4}>
					<TextField
						fullWidth
						required
						label="First Name"
						onChange={formik.handleChange}
						value={formik.values.firstname}
						name="firstname"
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						fullWidth
						required
						label="Last Name"
						onChange={formik.handleChange}
						value={formik.values.lastname}
						name="lastname"
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<DatePicker
						label="Date of Birth"
						name="dateOfBirth"
						onChange={formik.handleChange}
						value={formik.values.dateOfBirth}
					/>
				</Grid>

				<Grid item xs={12} sm={3}>
					<TextField
						fullWidth
						required
						label="Street"
						onChange={formik.handleChange}
						value={formik.values.street}
						name="street"
						type="text"
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<TextField
						fullWidth
						required
						label="City"
						onChange={formik.handleChange}
						value={formik.values.city}
						name="city"
						type="text"
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<TextField
						fullWidth
						required
						label="Zip Code"
						onChange={formik.handleChange}
						value={formik.values.zip}
						name="zip"
						type="number"
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<FormControl fullWidth required>
						<InputLabel id="state">State</InputLabel>
						<SelectMenu
							label="State"
							name="state"
							value={formik.values.state}
							onChange={formik.handleChange}
							items={states}
						/>
					</FormControl>
				</Grid>

				<Grid item xs={12} sm={6}>
					<DatePicker
						label="Start Date"
						name="startDate"
						onChange={formik.handleChange}
						value={formik.values.startDate}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth required>
						<InputLabel id="department">Department</InputLabel>
						<SelectMenu
							label="Department"
							name="department"
							value={formik.values.department}
							onChange={formik.handleChange}
							items={departments}
						/>
					</FormControl>
				</Grid>
			</Grid>

			<Button onClick={formik.handleSubmit} variant="contained">
				Save
			</Button>

			{modalIsOpen && (
				<Modal
					setOpen={setModalIsOpen}
					message="Employé créé avec succès !"
				/>
			)}
		</div>
	)
}
