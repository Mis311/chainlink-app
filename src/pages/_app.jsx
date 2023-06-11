import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import './globals.css'
import RootLayout from './layout'
export const MyAppContext = React.createContext({
  account: undefined,
  setAccount: undefined,
  contract: undefined,
  setContract: undefined,
})

function MyApp({ Component, pageProps }) {
  const [account, setAccount] = useState('')
  const [contract, setContract] = useState('')
  return (
    <MyAppContext.Provider
      value={{ account, setAccount, contract, setContract }}
    >
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </MyAppContext.Provider>
  )
}

export default MyApp
