import { useState } from 'react'

export default function CreateEmployeeForm() {
	const [formValues, setFormValues] = useState({
		firstname: '',
		lastname: '',
		dateOfBirth: '',
		startDate: '',
		street: '',
		city: '',
		state: '',
		zip: 0,
		department: '',
	})

	const handleSubmit = (e) => {
		console.log('Click submit')
	}

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value })
	}

	return (
		<div className="container">
			<h1>Create Employee</h1>

			<form action="#" id="create-employee">
				<label>
					First Name
					<input
						onChange={handleChange}
						value={formValues.firstname}
						name="firstname"
						type="text"
					/>
				</label>

				<label>
					Last Name
					<input
						onChange={handleChange}
						value={formValues.lastname}
						name="lastname"
						type="text"
					/>
				</label>

				<label>
					Date of Birth
					<input
						onChange={handleChange}
						value={formValues.dateOfBirth}
						name="dateOfBirth"
						type="text"
					/>
				</label>

				<label>
					Start Date
					<input
						onChange={handleChange}
						value={formValues.startDate}
						name="startDate"
						type="text"
					/>
				</label>

				<fieldset>
					<legend>Address</legend>

					<label>
						Street
						<input
							onChange={handleChange}
							value={formValues.street}
							name="street"
							type="text"
						/>
					</label>

					<label>
						City
						<input
							onChange={handleChange}
							value={formValues.city}
							name="city"
							type="text"
						/>
					</label>

					<label>
						State
						<select
							value={formValues.state}
							onChange={handleChange}
							name="state"
						></select>
					</label>

					<label>
						Zip Code
						<input
							onChange={handleChange}
							value={formValues.zip}
							name="zip"
							type="number"
							min="0"
							max="99999"
						/>
					</label>
				</fieldset>

				<label>
					Department
					<select
						name="department"
						onChange={handleChange}
						value={formValues.department}
					>
						<option>Sales</option>
						<option>Marketing</option>
						<option>Engineering</option>
						<option>Human Resources</option>
						<option>Legal</option>
					</select>
				</label>
			</form>

			<button onClick={handleSubmit}>Save</button>
		</div>
	)
}
