import { useState } from 'react';

const useInput = (valueValidator) => {
	const [ inputValue, setInputValue ] = useState('');

	const inputcheck = valueValidator(inputValue);

	const setInputValueHooks = (value) => {
		setInputValue(value);
	};

	const resetState = () => {
		setInputValue("");
	}

	return {
		inputValue,
		inputcheck,
		setInputValueHooks,
		resetState
	};
};

export default useInput;
