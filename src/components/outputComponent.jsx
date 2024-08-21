import PropTypes from 'prop-types'
import { UserInputContext } from '../context/UserInputContext.jsx'
import { DecimalResultContext } from '../context/DecimalResultContext.jsx'
import { useContext, useEffect } from 'react'

const OutputComponent = () => {
	const { inputValue } = useContext(UserInputContext)
	const { resultValue, setResultValue } = useContext(DecimalResultContext)

	useEffect(() => {
		for (const char of inputValue) {
			const result = 0
			setResultValue(char)
		}
	}, [inputValue, resultValue, setResultValue])

	return (
		<div className='output-container'>
			<p className='result-component'>
				Result: <span className='value'>{resultValue}</span>
			</p>
		</div>
	)
}

export default OutputComponent
