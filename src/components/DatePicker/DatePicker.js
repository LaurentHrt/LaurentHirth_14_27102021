import { TextField } from '@mui/material'

export default function DatePicker({ label, name, onChange, value }) {
	return (
		<TextField
			fullWidth
			required
			label={label}
			onChange={onChange}
			value={value}
			name={name}
			type="date"
		/>
	)
}
