import React from 'react'
const CreateEmployeeForm = React.lazy(() =>
	import('../../components/CreateEmployeeForm/CreateEmployeeForm')
)

export default function Home() {
	return <CreateEmployeeForm />
}
