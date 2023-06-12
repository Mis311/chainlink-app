import { useContext } from 'react'
import Link from 'next/link'
import WalletButton from './WalletButton'
import { useState, useEffect } from 'react'
import Web3 from 'web3'
import { ethers } from 'ethers'
import { EVM_ABI } from 'src/contract-data/EVMcontract'
import { MyAppContext } from 'src/pages/_app'
import * as fcl from '@onflow/fcl'
import '../flow/config.js'

export default function Header() {
  const {
    account,
    setAccount,
    setContract,
    userFlow,
    setUserFlow,
    walletFlow,
    setWalletFlow,
  } = useContext(MyAppContext)
  console.log('___only walletFlow:', walletFlow)
  console.log('___userFlow:', userFlow)

  useEffect(() => {
    fcl.currentUser().subscribe(setUserFlow)
  }, [])

  const connectToFlow = async () => {
    const user = await fcl.authenticate()
    setUserFlow(user)
  }

  const saveStoryToFlow = async () => {
    const url =
      'https://bafybeigtky6vfh7scppbf2ws5hcbfvs7afstbjcjz5eltcarwxk5ug4r4y.ipfs.dweb.link/storyData.json'
    const transactionId = await fcl.mutate({
      cadence: `
        import Works from 0xDeployer

        transaction(newURL: String) {
          prepare(signer: AuthAccount) {
          }
          execute {
            Works.addURL(newURL: newURL)
          }
        }
        `,
      args: (arg, t) => [arg(url, t.String)],
      proposer: fcl.authz,
      payer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 999,
    })
    console.log('Transaction Id', transactionId)
  }

  const getStoriesFromFlow = async () => {
    const result = await fcl.query({
      cadence: `
        import Works from 0xDeployer

        pub fun main(): [String] {
          return Works.works
        }
      `,
      args: (arg, t) => [],
    })
    console.log(result)
    alert(result)
  }

  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum)
      try {
        window.ethereum.enable().then(function () {
          web3.eth.getAccounts().then(function (accounts) {
            setAccount(accounts[0])
            const contractAddress = '0xCa4817CAe963E7a84B1E0e6A3c73479Cf71afE6e'
            const contract = new web3.eth.Contract(EVM_ABI, contractAddress)
            setContract(contract)
          })
        })
      } catch (e) {
        // User has denied account access
      }
    }
  }, [])

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable()
        const web3 = new Web3(window.ethereum)
        const accounts = await web3.eth.getAccounts()
        setAccount(accounts[0])
        const contractAddress = '0xC971cBFb42bEb12aC8baDC1AC1d9E52fa79B5B68'
        const contract = new web3.eth.Contract(EVM_ABI, contractAddress)
        setContract(contract)
      } catch (e) {
        alert('Failed to connect. Please check your MetaMask setup.')
      }
    } else {
      alert('Please install MetaMask!')
    }
  }

  const disconnect = () => {
    setAccount(null)
  }

  ;<WalletButton account={account} onClick={connectWallet} />
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!open)
  }
  return (
    <nav className="bg-white p-4 sticky top-0 z-50 h-24">
      <header className="flex items-center justify-between">
        <Link href="/">
          <div className="font-bold text-2xl cursor-pointer">ArtiFusion</div>
        </Link>
        <div className="flex space-x-4 cursor-pointer">
          <Link href="/about-us">
            <p className="text-blue-500">About Us</p>
          </Link>

          <a
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={toggleOpen}
            className="text-blue-500 cursor-pointer"
          >
            Demo
          </a>
          {open && (
            <div className="origin-top-right absolute right-60 top-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <Link href="/dashboard">
                  <p
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Writer Assist Tool
                  </p>
                </Link>
                <Link href="/all-stories">
                  <p
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    fundraising
                  </p>
                </Link>
                <Link href="/gallery">
                  <p
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    View ArtiWork
                  </p>
                </Link>
              </div>
            </div>
          )}
          <a className="text-blue-500" href="https://discord.gg/ugKSAW3b">
            Discord
          </a>
          {/* <button onClick={saveStoryToFlow} className="text-black">
            saveStoryToFlow
          </button>

          <button onClick={getStoriesFromFlow} className="text-black">
            getStoriesFromFlow
          </button> */}
          <p className="text-black">{userFlow ? userFlow.addr : ''}</p>

          {!userFlow.loggedIn ? (
            <button
              className="border rounded-xl border-[#38E8C6] px-5 text-lg text-[#38E8C6] py-1 bg-black"
              onClick={connectToFlow}
            >
              Flow Log In
            </button>
          ) : (
            <button
              className="border rounded-xl border-[#38E8C6]
            px-5 text-sm text-[#38E8C6] py-1 bg-black"
              onClick={fcl.unauthenticate}
            >
              Logout
            </button>
          )}

          <WalletButton account={account} onClick={connectWallet} />
        </div>
      </header>
    </nav>
  )
}
