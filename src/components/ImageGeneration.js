// HUGGING: process.env.HUGGING,
import React, { useState } from 'react'
import axios from 'axios'
const API_TOKEN = process.env.HUGGING

const saveImage = async (blob) => {
  const updataData = new FormData()
  updataData.append('file', blob)
  const res = await axios.post(
    'https://api.pinata.cloud/pinning/pinFileToIPFS',
    updataData,
    {
      maxContentLength: 'Infinity',
      headers: {
        'Content-Type': 'multipart/form-data',
        pinata_api_key: 'b84d04e754ea791e92f9',
        pinata_secret_api_key:
          '4363204936518de01f8465c738ab74720a2713a5b1c7e5095f247ea98a7cea60',
      },
    },
  )

  console.log('yay', 'https://gateway.pinata.cloud/ipfs/' + res.data.IpfsHash)
}

const ImageGeneration = () => {
  const [loading, setLoading] = useState(false)
  const [output, setOutput] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    const input = event.target.elements.input.value
    const response = await fetch(
      'https://api-inference.huggingface.co/models/prompthero/openjourney',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ inputs: input }),
      },
    )

    if (!response.ok) {
      throw new Error('Failed to generate image')
    }

    const blob = await response.blob()
    setOutput(URL.createObjectURL(blob))
    setLoading(false)

    if (blob) {
      await saveImage(blob)
    }
  }

  return (
    <div className="container al-c mt-3">
      <form className="gen-form" onSubmit={handleSubmit}>
        <input
          className="border-2 border-blue-300 p-1 rounded-md"
          type="text"
          name="input"
          placeholder="type your prompt here..."
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <div>
        {loading && <div className="loading">Loading...</div>}
        {!loading && output && (
          <div className="result-image">
            <img src={output} alt="art" />
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageGeneration
