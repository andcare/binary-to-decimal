import { createContext, useState } from "react";
import PropTypes from 'prop-types'

const UserInputContext = createContext(null)

const UserInputContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <UserInputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </UserInputContext.Provider>
  )
}

UserInputContextProvider.propTypes = {
  children: PropTypes.any
}

export { UserInputContext, UserInputContextProvider }
