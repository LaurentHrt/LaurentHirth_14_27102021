import { createSlice } from '@reduxjs/toolkit'

const initialState = []
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
	},
})

export default reducer
export const { add } = actions
