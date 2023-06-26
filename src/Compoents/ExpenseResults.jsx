import React, { useContext, useEffect, useState } from 'react';
import 'animate.css';
import Card from './UI/Card';
import ExpResclass from './ExpenseResults.module.css';
import ExpenseContext from '../Context/Expense-Context';

const ExpenseResults = () => {
	const [ results, setResults ] = useState({})
	const expctx = useContext(ExpenseContext);


	const resultsdata = () => {
		let incomedata = expctx.expensedata.filter((exp) => exp.expense_type === 'INCOME').map((data) => data.amount)
		let expensedata = expctx.expensedata.filter((exp) => exp.expense_type === 'EXPENSE').map((data) => data.amount)

		let income = incomedata.reduce((accumlator, currentValue) => accumlator + currentValue, 0)
		let expense = expensedata.reduce((accumlator, currentValue) => accumlator + currentValue, 0)


		let total = income - (-expense);

		setResults({ income, expense, total });
	}

	useEffect(() => {
		resultsdata();
	}, [ expctx.expensedata ])

	return (
		<div className='animate__animated animate__fadeIn'>
			<Card resultclass={true}>
				<div className={ExpResclass.results_wrapper}>
					<div className={ExpResclass.income_div}>
						<h3>INCOME:</h3>
						<h3>{expctx.currency}{results.income}</h3>
					</div>

					<div className={ExpResclass.income_div}>
						<h3>EXPENSE:</h3>
						<h3 className={ExpResclass.expense}>
							{expctx.currency}{results.expense}
						</h3>
					</div>

					<div className={ExpResclass.result_div}>
						<h3>Total Amount:</h3>
						<h3>{expctx.currency}{results.total}</h3>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default ExpenseResults;
