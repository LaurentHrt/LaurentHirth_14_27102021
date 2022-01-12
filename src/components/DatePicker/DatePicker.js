export default function DatePicker({ name, onChange, value }) {
	return (
		<input
			id={name}
			onChange={onChange}
			value={value}
			name={name}
			type="date"
		/>
	)
}
