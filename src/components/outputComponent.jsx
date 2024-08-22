import { DecimalResultContext } from '../context/DecimalResultContext.jsx'
import { useContext } from 'react'
import './index.css'

const OutputComponent = () => {
  const { resultValue } = useContext(DecimalResultContext)

  return (
    <div className='output-container'>
      <p className='result-component'>
        Result: <span className='value'>{resultValue}</span>
      </p>
    </div>
  )
}

export default OutputComponent
