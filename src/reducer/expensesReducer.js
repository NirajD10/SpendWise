import { v4 as uuidv4 } from 'uuid';

const expenseReducer = (state, action) => {
	switch (action.type) {
		case 'add_history':
			const amount = action.payload.amount;
			if (amount < 0) {
				let { text, amount } = action.payload;
				const addexpensehistroy = {
					id: uuidv4(),
					text,
					amount,
					expense_type: 'EXPENSE',
				};
				return [...state, addexpensehistroy];
			}
			const addexpensehistroy = {
				id: uuidv4(),
				text: action.payload.text,
				amount,
				expense_type: 'INCOME',
			};
			return [...state, addexpensehistroy];

		case 'remove_history':
			return state.filter(exp => exp.id !== action.payload);

		default:
			return state;
	}
};

export default expenseReducer;
