import React, { useContext } from 'react';
import 'animate.css';
import ExpLisCSS from './ExpenseList.module.css';
import ExpenseListCard from './UI/ExpenseListCard';
import ExpenseContext from '../Context/Expense-Context';

const ExpenseList = () => {
	const expCtxdata = useContext(ExpenseContext);

	let content;
	if (expCtxdata.expensedata.length === 0) {
		content = (
			<div className={ExpLisCSS.norecord_wrapper}>
				<h3>No History.</h3>
			</div>
		);
	} else {
		content = expCtxdata.expensedata.map(exp => {
			const cssexpensetype = exp.expense_type;
			const updatedcsstype = cssexpensetype.toLowerCase();
			return (
				<li key={exp.id}>
					<div
						className={`${ExpLisCSS.list_wrapper__point} ${updatedcsstype === 'expense' ? ExpLisCSS.expense : ExpLisCSS.income} animate__animated animate__fadeIn `}
					>
						<p>{exp.text}</p>
						<p>{expCtxdata.currency}{exp.amount}</p>
						<button onClick={() => expCtxdata.removexpense(exp.id)} className={ExpLisCSS.btn}><svg width={38} height={38} fill="none" stroke="#ff0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
							<path d="m9 9 6 6" />
							<path d="m15 9-6 6" />
						</svg></button>
					</div>
				</li>
			)
		})
	}

	return (
		<div className={`${ExpLisCSS[ 'expenselist_wrapper' ]} animate__animated animate__fadeInUp animate__delay-0.6s`}>
			<ExpenseListCard>
				<h2>History</h2>
				<ul className={ExpLisCSS[ 'list_wrapper' ]}>
					{content}
				</ul>
			</ExpenseListCard>
		</div>
	);
};

export default ExpenseList;
