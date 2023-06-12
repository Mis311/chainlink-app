import { useState, useEffect, useContext } from 'react'
import dynamic from 'next/dynamic'
import ImageGeneration from './ImageGeneration'
import { Web3Storage } from 'web3.storage'
import { MyAppContext } from 'src/pages/_app'
import { useRouter } from 'next/router'
// ADDING FLOW
import * as fcl from '@onflow/fcl'
import '../flow/config.js'

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'
import './WriterInterface.module.css'
import { config } from 'dotenv'
config()

export default function WriterInterface() {
  const { account, contract } = useContext(MyAppContext)
  console.log(
    '🚀 ~ file: WriterInterface.js:19 ~ WriterInterface ~ contract:',
    contract,
  )
  const router = useRouter()
  const [data, setData] = useState('')
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [startTime, setStartTime] = useState(null)
  const [typingSpeed, setTypingSpeed] = useState(0)
  const [reaction, setReaction] = useState('')
  const [aiResponse, setAIResponse] = useState('')
  const [textValue, setTextValue] = useState('')
  const [imageValue, setImageValue] = useState('')

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

  // useEffect(() => {
  //   const r = fcl.currentUser().subscribe(setUser)
  //   console.log('____r :', r)
  // }, [])

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
    //  onclick display form in the future
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
    } catch (error) {
      console.log(error)
    }
  }

  const saveToContract = async (e) => {
    try {
      const getCID = await saveToWeb3()
      if (getCID) {
        await createWorkInContract(getCID)
        router.push(`all-stories`)
      }
    } catch (error) {
      console.log(error)
    }
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

  const handleQuillChange = (newValue) => {
    setValue(newValue)
    setTextValue(newValue)
    setImageValue(newValue)
  }

  return (
    <div className="py-5">
      <button onClick={getTheme}>get Theme From Chainlink</button>
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
        onChange={handleQuillChange}
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

        <button onClick={saveToIPFS} className="btn btn-secondary">
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
