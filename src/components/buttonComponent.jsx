import { UserInputContext } from '../context/UserInputContext.jsx'
import { DecimalResultContext } from '../context/DecimalResultContext.jsx'
import './index.css'
import { useContext } from 'react'

const ButtonComponent = () => {
  const { inputValue, setInputValue } = useContext(UserInputContext)
  const { setResultValue } = useContext(DecimalResultContext)

  const calculateValues = () => {
    const pointIndex = inputValue.indexOf('.')
    let substr = ''
    let result = 0
    let power = 0
    let base = 2

    /* 
     CONSIDERING THE DECIMAL POINT
     THIS IS MY APPROACH
    */

    if (pointIndex === -1) {
      for (let i = inputValue.length - 1; i >= 0; i--) {

        if (inputValue[i] !== '1' && inputValue[i] !== '0') {
          setInputValue('')
          setResultValue(0)
          return
        } else {
          result += inputValue[i] * (Math.pow(base, power))
          power++
          setInputValue('')
          setResultValue(result)
        }
      }
    } else {
      substr = inputValue.substring(0, pointIndex)
      power = substr.length - 1

      for (let i = 0; i < inputValue.length; i++) {
        if (inputValue[i] !== '1' && inputValue[i] !== '0' && inputValue[i] !== '.') {
          setInputValue('')
          setResultValue(0)
          return
        } else {
          if (inputValue[i] === '.') continue
          result += inputValue[i] * (Math.pow(base, power))
          power--
          setInputValue('')
          setResultValue(result)
        }
      }
    }

    // OR JUST USE Number.parseInt(string, radix(or the base))
  }

  return (
    <div className='btn-container'>
      <button className='btn-component' onClick={calculateValues}>CALCULATE</button>
    </div>
  )
}

export default ButtonComponent
