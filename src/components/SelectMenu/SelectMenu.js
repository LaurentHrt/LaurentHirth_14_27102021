export default function SelectMenu({ name, onChange, value, items }) {
	return (
		<select value={value} onChange={onChange} name={name} id={name}>
			{items.map((item, index) => (
				<option key={index} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}
