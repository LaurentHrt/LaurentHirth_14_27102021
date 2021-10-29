import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../features/employees/employees'

export const store = configureStore({
	reducer: {
		employees: employeesReducer,
	},
})

store.subscribe(() => {
	localStorage.setItem(
		'employees',
		JSON.stringify(store.getState().employees)
	)
})
