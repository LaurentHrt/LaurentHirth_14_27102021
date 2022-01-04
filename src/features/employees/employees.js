import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{
		firstname: 'Tony',
		lastname: 'Stark',
		dateOfBirth: '1980-05-24',
		startDate: '2014-06-11',
		street: 'Iron Street',
		city: 'Los Angeles',
		state: 'California',
		zip: 25412,
		department: 'Engineering',
	},
	{
		firstname: 'Arnold',
		lastname: 'Schwarzenegger',
		dateOfBirth: '1953-11-23',
		startDate: '2015-08-01',
		street: 'Muscle Street',
		city: 'Los Angeles',
		state: 'California',
		zip: 25412,
		department: 'Sales',
	},
]
const sessionState = JSON.parse(localStorage.getItem('employees'))

export const selectEmployees = (state) => state.employees

const { actions, reducer } = createSlice({
	name: 'employees',
	initialState: sessionState || initialState,
	reducers: {
		add: (draft, action) => {
			draft.push(action.payload)
			return
		},
		reset: (draft, action) => {
			return initialState
		},
	},
})

export default reducer
export const { add, reset } = actions
