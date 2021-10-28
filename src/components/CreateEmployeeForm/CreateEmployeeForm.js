import { useFormik } from 'formik'

export default function CreateEmployeeForm() {
	const formik = useFormik({
		initialValues: {
			firstname: '',
			lastname: '',
			dateOfBirth: '',
			startDate: '',
			street: '',
			city: '',
			state: '',
			zip: 0,
			department: '',
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2))
		},
	})
	return (
		<div className="container">
			<h1>Create Employee</h1>
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="firstname"> First Name</label>
				<input
					id="firstname"
					onChange={formik.handleChange}
					value={formik.values.firstname}
					name="firstname"
					type="text"
				/>

				<label htmlFor="lastname">Last Name</label>
				<input
					id="Lastname"
					onChange={formik.handleChange}
					value={formik.values.lastname}
					name="lastname"
					type="text"
				/>

				<label htmlFor="dateOfBirth">Date of Birth</label>
				<input
					id="dateOfBirth"
					onChange={formik.handleChange}
					value={formik.values.dateOfBirth}
					name="dateOfBirth"
					type="text"
				/>

				<label htmlFor="startDate">Start Date</label>
				<input
					id="startDate"
					onChange={formik.handleChange}
					value={formik.values.startDate}
					name="startDate"
					type="text"
				/>

				<fieldset>
					<legend>Address</legend>

					<label htmlFor="street">Street</label>
					<input
						id="street"
						onChange={formik.handleChange}
						value={formik.values.street}
						name="street"
						type="text"
					/>

					<label htmlFor="city">City</label>
					<input
						id="city"
						onChange={formik.handleChange}
						value={formik.values.city}
						name="city"
						type="text"
					/>

					<label htmlFor="state">State</label>
					<select
						id="state"
						value={formik.values.state}
						onChange={formik.handleChange}
						name="state"
					></select>

					<label htmlFor="zip">Zip Code</label>
					<input
						id="zip"
						onChange={formik.handleChange}
						value={formik.values.zip}
						name="zip"
						type="number"
						min="0"
						max="99999"
					/>
				</fieldset>

				<label htmlFor="department">Department</label>
				<select
					id="department"
					name="department"
					onChange={formik.handleChange}
					value={formik.values.department}
				>
					<option>Sales</option>
					<option>Marketing</option>
					<option>Engineering</option>
					<option>Human Resources</option>
					<option>Legal</option>
				</select>

				<button type="submit">Save</button>
			</form>
		</div>
	)
}
