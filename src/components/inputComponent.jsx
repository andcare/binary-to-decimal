import { useContext } from 'react'
import { UserInputContext } from '../context/UserInputContext.jsx'

const InputComponent = () => {
	const { inputValue, setInputValue } = useContext(UserInputContext)
	const nonDigit = /\D+/gi
	const nonBit = /[2-9]/gi

	const digitStringTest = nonDigit.test(inputValue)
	const bitStringTest = nonBit.test(inputValue)

	const handleInput = e => {
		setInputValue(e.target.value)
	}

	return (
		<div>
			<input
				type='text'
				className={`input-component ${digitStringTest || bitStringTest ? 'error' : ''}`}
				value={inputValue}
				onChange={handleInput}
				maxLength={8}
			/>
		</div>
	)
}

export default InputComponent
