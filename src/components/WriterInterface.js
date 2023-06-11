import { useState, useEffect, useContext } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import ImageGeneration from './ImageGeneration'
import { EVM_ABI } from '../contract-data/EVMcontract'
import { Web3Storage } from 'web3.storage'
import Web3 from 'web3'
import { MyAppContext } from 'src/pages/_app'
const { ethers } = require('ethers')

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'
import './WriterInterface.module.css'
import { config } from 'dotenv'
config()

export default function WriterInterface() {
  const { account, contract } = useContext(MyAppContext)
  const [data, setData] = useState('')
  console.log('_methods', contract?._methods)
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [startTime, setStartTime] = useState(null)
  const [typingSpeed, setTypingSpeed] = useState(0)
  const [reaction, setReaction] = useState('')
  const [aiResponse, setAIResponse] = useState('')

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],
      ['link', 'image'], // this is the image button
    ],
  }

  useEffect(() => {
    if (value.length === 0) {
      setStartTime(null)
      setReaction('')
    } else if (startTime === null) {
      setStartTime(Date.now())
    } else {
      const endTime = Date.now()
      const timeElapsed = (endTime - startTime) / 1000
      const speed = value.length / timeElapsed // characters per second

      setTypingSpeed(speed)

      if (speed > 10) {
        setReaction('😄 Great progress! Keep going!')
      } else if (speed > 5) {
        setReaction('😊 Looking good! Stay focused!')
      } else {
        setReaction('🤔 Thinking in progress...')
      }
    }
  }, [value, startTime])

  const saveToIPFS = async (type) => {
    //  display form
    // save img to ipfs and get the url
    // place it on the correct position on the document
    //
  }

  const getAIResponse = async (type) => {
    const response = await fetch('/api/generateText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: value,
        type: type,
      }),
    })

    const data = await response.json()

    setAIResponse(data.result)
  }

  const saveToWeb3 = async () => {
    try {
      const API_TOKEN =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGMwOThmYkQyQzM3ZEY0YjI1N2UzYWNDMjdCMzgyNDg3ZWE3NWM1NjUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODY1MDAyMTMzMzIsIm5hbWUiOiJhcnRmdXNzaW9uIn0.6J-GhgCOA6dXvDvDCgft16rpYBBwF7ISykLI81E4kls'

      const client = new Web3Storage({
        token: API_TOKEN,
      })

      const storyData = JSON.stringify({
        title,
        description,
        value,
      })
      const blob = new Blob([storyData], { type: 'text/plain' })
      const storyDataFile = new File([blob], 'storyData.json')

      const cid = await client.put([storyDataFile], {
        onRootCidReady: (localCid) => {
          console.log(`> 🔑 locally calculated Content ID: ${localCid} `)
          console.log('> 📡 sending files to web3.storage ')
        },
        onStoredChunk: (bytes) =>
          console.log(
            `> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`,
          ),
      })
      return `https://dweb.link/ipfs/${cid}`
      // setCID(`https://dweb.link/ipfs/${cid}`)
    } catch (error) {
      console.log(error)
    }
  }

  const saveToContract = async (e) => {
    try {
      const getCID = await saveToWeb3()
      if (getCID) {
        createWorkInContract(getCID)
        // PUSH TO GALLERY  all-stories
      }
    } catch (error) {
      console.log(error)
    }

    // const web3 = new Web3(window.ethereum)
    // const contractAddress = '0xC971cBFb42bEb12aC8baDC1AC1d9E52fa79B5B68'
    // const contract = new web3.eth.Contract(EVM_ABI, contractAddress)
    // setContract(contract)
    // const getCID = await saveToWeb3()
    // if (getCID) {
    //   createWorkInContract(getCID)
    // }

    //  get input save it to ips get cid
    //  save cid in sc
    // Notify executing, Success or fail
    //  after saving it redirect to fundraising
    //More to add
  }

  const createWorkInContract = async (getCID) => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      const account = accounts[0]

      await contract?._methods
        ?.createWork(title, description, getCID)
        .send({ from: account })
    } catch (error) {
      console.error('An error occurred: ', error)
    }
  }

  const getData1 = async () => {
    let data = await fetch(
      'https://bafybeifhqlej43qouv5t2vunnqlrj5lrz3u2ahu2rfhqd6gp277rf6bf2y.ipfs.dweb.link/storyData.json',
    )
    // let data = await fetch(
    //   'https://bafybeicde2pvudssi5fheuwdajpyavtefkhybgskc2pynu67qlkl7bvzq4.ipfs.dweb.link/storyData.json',
    // )
    data = await data.json()
    console.log('🚀 ~ file: WriterInterface.js:165 ~ getData ~ data:', data)
    setData(data)
  }

  const getData = async () => {
    console.log('getData:')
    try {
      const count = await contract?._methods?.workcount().call()
      const len = Number(count)
      console.log(
        '🚀 ~ file: WriterInterface.js:189 ~ getData ~ count:',
        typeof count,
        len,
      )

      const data = []
      for (let i = 0; i < len; i++) {
        const cur = await contract?._methods?.works(i).call()

        // currentState: 'In Progress'
        // description: 'https://dweb.link/ipfs/bafybeigtky6vfh7scppbf2ws5hcbfvs7afstbjcjz5eltcarwxk5ug4r4y'
        // id: 0n
        // numberOfWords: '1'
        // title: 'My cats are beautiful'
        // totalFund: 0n
        // writerAddress: '0xA41A75Afbf2E7dE5DE8FF764AFa75b4CF54FCA85'
        // __length__: 7
        console.log('______whatcur:', cur)
        const obj = {}

        obj.description = cur.description
        obj.currentState = cur.currentState
        obj.id = Number(cur.id)
        obj.content = cur.numberOfWords
        obj.title = cur.title
        obj.totalFund = Number(cur.totalFund)
        obj.author = cur.writerAddress
        console.log('obj:', obj)
      }

      // await contract._methods
      // .createWork(title, getCID, '1')
      // .send({ from: account })

      // console.log('🚀 ~ file: _app.js:55 ~ getAllBets ~ req:', req)
      // // need to create obj
      // const temp = []

      // for (let i = 0; i < req.length; i++) {
      //   const cur = req[i]
      //   const currentBetAllInfo = await contract.bets(cur.id)
      //   const obj = {}
      //   obj.amount = ethers.utils.formatEther(cur.amount.toString())
      //   obj.bets = cur.bets
      //   obj.creator = cur.creator
      //   obj.id = cur.id.toString()
      //   obj.isActive = cur.isActive
      //   obj.team1 = cur.team1
      //   obj.team2 = cur.team2
      //   obj.totalBets = currentBetAllInfo.totalBets.toString()
      //   obj.winnerTeam = cur.winnerTeam
      //   obj.winningAmount = cur.winningAmount.toString()
      //   temp.push(obj)
      //   const pool = cur.winningAmount.toString()
      //   let amount = ethers.utils.formatEther(cur.amount.toString())
      // }

      // setAllBets(temp)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="py-5">
      <h2 className="text-2xl font-bold mb-5 ">Compose your masterpiece</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <QuillNoSSRWrapper
        modules={modules}
        value={value}
        onChange={setValue}
        className="text-black"
      />

      <p>Typing speed: {typingSpeed} cps</p>
      <p>Reaction: {reaction}</p>
      <div className="space-x-2 mt-2">
        <button
          onClick={() => getAIResponse('inspiration')}
          className="btn btn-primary"
        >
          Get AI Inspiration
        </button>

        <button
          onClick={() => getAIResponse('suggestion')}
          className="btn btn-primary"
        >
          Get AI Suggestion
        </button>

        <button onClick={saveToIPFS} className="btn btn-primary">
          Get AI Image
        </button>
        <ImageGeneration />
      </div>
      <div className="flex flex-col items-start">
        <h1 className="w-full p-4 mb-4 text-center text-gray-800 bg-white rounded-lg shadow-md typewriter">
          <p>{aiResponse}</p>
        </h1>
      </div>

      <div className="flex flex-col items-start">
        <div className="space-x-2 mt-2">
          <button
            onClick={saveToContract}
            className="bg-blue-500 text-white px-4 py-2 rounded w-40"
          >
            Save & Submit
          </button>
          <button
            onClick={getData}
            className="bg-blue-500 text-white px-4 py-2 rounded w-40"
          >
            getData
          </button>
        </div>
      </div>

      {data ? (
        <div className="text-black">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: data?.value }}
          ></div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
