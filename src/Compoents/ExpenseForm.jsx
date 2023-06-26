import React, { useContext, useRef, useState } from 'react';
import 'animate.css';
import currencyToSymbolMap from 'currency-symbol-map/map';
import Card from './UI/Card';
import Expfclass from './ExpenseForm.module.css';
import useInput from '../hooks/input-hooks';
import ExpenseContext from '../Context/Expense-Context';

//Validate to an accept input number only by regression.
const numReg = /^-[0-9\b]|[0-9\b]+$/;


const ExpenseForm = () => {
	const currencyRef = useRef();
	const expctx = useContext(ExpenseContext)

	const {
		inputValue: Textdata,
		inputcheck: TextinputValidator,
		setInputValueHooks: inputTextHandler,
		resetState: textClear,
	} = useInput((value) => value.trim() !== '');

	const {
		inputValue: Amountdata,
		inputcheck: AmountInputValidator,
		setInputValueHooks: inputAmountHandler,
		resetState: amountclear,
	} = useInput((amount) => amount.trim() !== '' && numReg.test(amount));

	let isValidForm = false;

	if (AmountInputValidator && TextinputValidator) {
		isValidForm = true;
	}

	const changeCurrency = () => {
		expctx.updateCurrency(currencyRef.current.value)
	}

	const expenseFormHandler = (event) => {
		event.preventDefault();
		expctx.addexpense({
			text: Textdata,
			amount: +Amountdata
		});
		textClear();
		amountclear();
	}

	return (
		<div className='animate__animated animate__fadeIn'>
			<Card>
				<form onSubmit={(event) => expenseFormHandler(event)}>
					<div className={Expfclass.input_actions}>
						<div className={Expfclass.input_text}>
							<label>Text :</label>
							<div>
								<select ref={currencyRef} id="currency" defaultValue={'$'} onChange={changeCurrency}>
									<option>Default ($)</option>
									{
										Object.keys(currencyToSymbolMap).map(key => (
											<option key={key} value={currencyToSymbolMap[ key ]}>{`${key} (${currencyToSymbolMap[ key ]})`}</option>
										))
									}
								</select>
							</div>
						</div>
						<input
							type='text'
							onChange={(event) => inputTextHandler(event.target.value)}
							placeholder='Enter Text'
							value={Textdata}
						/>
					</div>
					<div className={Expfclass.input_actions}>
						<div className={Expfclass.input_text}>
							<label>Amount : (Negative for Expense & Positive for Income)</label>
						</div>
						<input
							type='text'
							placeholder="0 or -1 or 2500"
							onChange={(event) => inputAmountHandler(event.target.value)}
							value={Amountdata}
						/>
					</div>
					<button disabled={!isValidForm} className={Expfclass.btn}>Add Transaction</button>
				</form>
			</Card>
		</div>
	);
};

export default ExpenseForm;
