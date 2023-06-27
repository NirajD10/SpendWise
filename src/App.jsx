import React from 'react';
import Expense from './Compoents/Expense';
import ExpenseList from './Compoents/ExpenseList';
import 'animate.css';
import appclasses from './App.module.css';

const App = () => {
	return (
		<div className={appclasses.main_div}>
			<div className={`${appclasses.header_div} animate__animated animate__fadeInDown`}>
				<h1>SpendWise</h1>
				<p>An Expense Tracker</p>
			</div>
			<Expense />
			<ExpenseList />
		</div>
	);
};

export default App;
