import React, { useState } from 'react'
import { useFormik } from 'formik'
import { states } from '../../assets/data/states'
import { departments } from '../../assets/data/departments'
import { add } from '../../features/employees/employees'
import { useDispatch } from 'react-redux'
import Modal from '@laurenthrt/hrnet-modal'
import {
	Button,
	Container,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	styled,
	TextField,
	Typography,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { red } from '@mui/material/colors'

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
		onSubmit: (values, { resetForm }) => {
			dispatch(add(values))
			setModalIsOpen(true)
			resetForm()
		},
	})

	const ColorButton = styled(Button)(({ theme }) => ({
		color: theme.palette.getContrastText(red[900]),
		backgroundColor: red[900],
		'&:hover': {
			backgroundColor: red[700],
		},
	}))

	return (
		<Container
			component="main"
			maxWidth="sm"
			sx={{ mb: 4 }}
			className="formContainer"
		>
			<Typography component="h1" variant="h4" mt={4} mb={4}>
				Create Employee
			</Typography>
			<form onSubmit={formik.handleSubmit}>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							name="firstname"
							id="firstname"
							onChange={formik.handleChange}
							value={formik.values.firstname}
							label="First Name"
							variant="standard"
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							name="lastname"
							id="lastname"
							onChange={formik.handleChange}
							value={formik.values.lastname}
							label="Last Name"
							variant="standard"
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							name="dateOfBirth"
							id="dateOfBirth"
							onChange={formik.handleChange}
							value={formik.values.dateOfBirth}
							type="date"
							label="Date of Birth"
							variant="standard"
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							name="startDate"
							id="startDate"
							onChange={formik.handleChange}
							value={formik.values.startDate}
							type="date"
							label="Start Date"
							variant="standard"
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							fullWidth
							name="street"
							id="street"
							onChange={formik.handleChange}
							value={formik.values.street}
							label="Street"
							variant="standard"
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							name="city"
							id="city"
							onChange={formik.handleChange}
							value={formik.values.city}
							label="City"
							variant="standard"
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							name="zip"
							id="zip"
							onChange={formik.handleChange}
							value={formik.values.zip}
							label="Zip Code"
							variant="standard"
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<FormControl fullWidth>
							<InputLabel id="state">State</InputLabel>
							<Select
								name="state"
								labelId="state"
								label="State"
								value={formik.values.state}
								onChange={formik.handleChange}
							>
								{states.map((state) => (
									<MenuItem key={state} value={state}>
										{state}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={12} sm={6}>
						<FormControl fullWidth>
							<InputLabel id="department">Department</InputLabel>
							<Select
								name="department"
								labelId="department"
								label="Department"
								value={formik.values.department}
								onChange={formik.handleChange}
							>
								{departments.map((department) => (
									<MenuItem
										key={department}
										value={department}
									>
										{department}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>

					<div className="saveButtonContainer">
						<ColorButton
							variant="contained"
							endIcon={<SendIcon />}
							onClick={formik.handleSubmit}
						>
							Save
						</ColorButton>
					</div>
				</Grid>
			</form>
			{modalIsOpen && (
				<Modal
					setOpen={setModalIsOpen}
					message="Employee created"
					buttonText="Close"
				/>
			)}
		</Container>
	)
}
