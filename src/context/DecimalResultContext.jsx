import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const DecimalResultContext = createContext(null)

const DecimalResultContextProvider = ({ children }) => {
  const [resultValue, setResultValue] = useState(256)

  return (
    <DecimalResultContext.Provider value={{ resultValue, setResultValue }}>
      {children}
    </DecimalResultContext.Provider>
  )
}

DecimalResultContextProvider.propTypes = {
  children: PropTypes.any
}

export { DecimalResultContext, DecimalResultContextProvider }
