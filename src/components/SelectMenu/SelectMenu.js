import { MenuItem, Select } from '@mui/material'

export default function SelectMenu({ label, name, onChange, value, items }) {
	return (
		<Select
			label={label}
			labelId={name}
			value={value}
			onChange={onChange}
			name={name}
		>
			{items.map((item, index) => (
				<MenuItem key={index} value={item}>
					{item}
				</MenuItem>
			))}
		</Select>
	)
}
