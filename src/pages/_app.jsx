import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import './globals.css'
import RootLayout from './layout'
export const MyAppContext = React.createContext({
  account: undefined,
  setAccount: undefined,
  userFlow: undefined,
  walletFlow: undefined,
  setWalletFlow: undefined,
  setUserFlow: undefined,
  contract: undefined,
  setContract: undefined,
})

function MyApp({ Component, pageProps }) {
  const [account, setAccount] = useState('')
  const [contract, setContract] = useState('')
  const [userFlow, setUserFlow] = useState({ loggedIn: false })
  const [walletFlow, setWalletFlow] = useState({ loggedIn: false })
  return (
    <MyAppContext.Provider
      value={{
        account,
        setAccount,
        contract,
        setContract,
        userFlow,
        setUserFlow,
        walletFlow,
        setWalletFlow,
      }}
    >
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </MyAppContext.Provider>
  )
}

export default MyApp
