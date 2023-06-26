import { createContext, useReducer, useState } from 'react';
import expenseReducer from '../reducer/expensesReducer';

const ExpenseContext = createContext({
	expensedata: [],
	addexpense: (data) => { },
	removexpense: (id) => { },
	updateCurrency: (cur) => { },
	currency: ""
});

export const ExpenseContextProvider = props => {
	const [ finalcurrency, setFinalcurrency ] = useState("$");
	const [ state, dispatch ] = useReducer(expenseReducer, []);


	const addexpensehistroy = inputData => {
		dispatch({ type: 'add_history', payload: inputData });
	};

	const removeexpensehistory = id => {
		dispatch({ type: 'remove_history', payload: id })
	}

	const setCurrencyInput = (cur) => {
		setFinalcurrency(cur);
	}

	return (
		<ExpenseContext.Provider value={{
			expensedata: state,
			addexpense: addexpensehistroy,
			removexpense: removeexpensehistory,
			updateCurrency: setCurrencyInput,
			currency: finalcurrency
		}}>
			{props.children}
		</ExpenseContext.Provider>
	);
};

export default ExpenseContext;