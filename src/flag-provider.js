import React from 'react'
import { Provider } from './flag-context'

const FlagProvider = ({ children, flags }) => {
  return (
    <Provider value={flags}>
      {children}
    </Provider>
  )
}

export default FlagProvider
