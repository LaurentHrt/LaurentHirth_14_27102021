import { useFormik } from 'formik'
import { states } from '../../assets/data/states'
import { departments } from '../../assets/data/departments'
import { useDispatch } from 'react-redux'
import { add } from '../../features/employees/employees'
import Button from '@mui/material/Button'
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Grid,
} from '@mui/material'

export default function CreateEmployeeForm() {
	const dispatch = useDispatch()

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
		},
	})
	return (
		<div className="formContainer">
			<h1>Create Employee</h1>

			<Grid container rowSpacing={3} columnSpacing={3}>
				<Grid item xs={12} sm={4}>
					<TextField
						fullWidth
						label="First Name"
						onChange={formik.handleChange}
						value={formik.values.firstname}
						name="firstname"
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						fullWidth
						label="Last Name"
						onChange={formik.handleChange}
						value={formik.values.lastname}
						name="lastname"
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						fullWidth
						label="Date Of Birth"
						onChange={formik.handleChange}
						value={formik.values.dateOfBirth}
						name="dateOfBirth"
						type="date"
					/>
				</Grid>

				<Grid item xs={12} sm={3}>
					<TextField
						fullWidth
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
						label="Zip Code"
						onChange={formik.handleChange}
						value={formik.values.zip}
						name="zip"
						type="number"
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<FormControl fullWidth>
						<InputLabel id="state">State</InputLabel>
						<Select
							label="State"
							labelId="state"
							value={formik.values.state}
							onChange={formik.handleChange}
							name="state"
						>
							{states.map((state, index) => (
								<MenuItem key={index} value={state}>
									{state}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						label="Start Date"
						onChange={formik.handleChange}
						value={formik.values.startDate}
						name="startDate"
						type="date"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<InputLabel id="department">Department</InputLabel>
						<Select
							labelId="department"
							label="Department"
							required
							name="department"
							onChange={formik.handleChange}
							value={formik.values.department}
						>
							{departments.map((department, index) => (
								<MenuItem key={index} value={department}>
									{department}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
			</Grid>

			<Button onClick={formik.handleSubmit} variant="contained">
				Save
			</Button>
		</div>
	)
}
