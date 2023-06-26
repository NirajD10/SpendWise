import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ExpenseContextProvider } from './Context/Expense-Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ExpenseContextProvider>
		<App />
	</ExpenseContextProvider>
);
