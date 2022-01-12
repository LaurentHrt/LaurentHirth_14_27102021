export default function DatePicker({ name, onChange, value }) {
	return (
		<input
			onChange={onChange}
			value={value}
			name={name}
			type="date"
			id={name}
		/>
	)
}
