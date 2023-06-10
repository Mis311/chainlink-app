import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import ImageGeneration from './ImageGeneration'
const QuillNoSSRWrapper = dynamic(() => import('react-quill'), { ssr: false })

export default function WriterInterface() {
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [startTime, setStartTime] = useState(null)
  const [typingSpeed, setTypingSpeed] = useState(0)
  const [reaction, setReaction] = useState('')

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

  const createWorkInContract = () => {
    const web3 = new Web3(window.ethereum)
    const contractAddress = '0xYourContractAddress' // Replace withcontract address
    const abi = [] // Replace contract ABI
    const contract = new web3.eth.Contract(abi, contractAddress)

    const createWorkInContract = async () => {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        const account = accounts[0]

        await contract.methods
          .createWork(title, description, value)
          .send({ from: account })
      } catch (error) {
        console.error('An error occurred: ', error)
      }
    }
    //More to add
  }

  return (
    <div className="py-5">
      <h2 className="text-2xl font-bold mb-5">Compose your masterpiece</h2>

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

      <QuillNoSSRWrapper value={value} onChange={setValue} />

      <p>Typing speed: {typingSpeed} cps</p>
      <p>Reaction: {reaction}</p>

      <div className="space-x-2 mt-2">
        <Link href="/fundraising">
          <button
            onClick={() => createWorkInContract()}
            className="btn btn-primary"
          >
            Submit
          </button>
        </Link>

        <ImageGeneration />
      </div>
    </div>
  )
}
