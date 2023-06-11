import { useState, useEffect, useContext } from 'react'
import { MyAppContext } from './_app'

const mockData = [
  {
    id: 1,
    title: 'Violet Skies',
    description:
      'A poignant story of a young girl navigating the complexities of growing up in a world that often seems overwhelming.',
    value: 1200,
  },
  {
    id: 2,
    title: "The Clockmaker's Apprentice",
    description:
      "A riveting historical novel that captures the intricate art of clockmaking, and one apprentice's journey towards mastery.",
    value: 1500,
  },
  {
    id: 3,
    title: 'Cerulean',
    description:
      'A collection of poems reflecting on love, loss, and the healing power of nature.',
    value: 1000,
  },
  {
    id: 4,
    title: 'Labyrinth of Echoes',
    description:
      'An ambitious young detective delves into a maze of deceit in pursuit of a ruthless killer.',
    value: 1700,
  },
  {
    id: 5,
    title: 'Whispers of the Past',
    description:
      'A time-traveling historian seeks to unravel the mystery behind an ancient artifact, only to be confronted by her own past.',
    value: 2000,
  },
  {
    id: 6,
    title: "Harmony's Melody",
    description:
      'The tale of a talented violinist who brings together a divided community through the power of music.',
    value: 1300,
  },
  {
    id: 7,
    title: 'The Dream Weavers',
    description:
      'A fantasy novel about a group of skilled dream weavers who traverse dreamscapes to protect the world from nightmares.',
    value: 1400,
  },
  {
    id: 8,
    title: 'Prelude to Destiny',
    description:
      'A young woman discovers her extraordinary destiny that could either save or doom her world.',
    value: 1600,
  },
  {
    id: 9,
    title: 'The Shadow Merchant',
    description:
      'An adventurous tale of a roguish shadow merchant who trades in secrets and intrigue.',
    value: 1800,
  },
  {
    id: 10,
    title: 'Specters of the Wind',
    description:
      'A haunting ghost story set against the backdrop of a desolate seaside town.',
    value: 1900,
  },
  /* more data */
]

const AllStories = () => {
  const { account, contract } = useContext(MyAppContext)
  const [creativeWorks, setCreativeWorks] = useState([])
  const [stories, setStories] = useState([])
  console.log('__stories:', stories)
  const getAllStories = async () => {
    try {
      const count = await contract?._methods?.workcount().call()
      const len = Number(count)
      const data = []
      for (let i = 0; i < len; i++) {
        const cur = await contract?._methods?.works(i).call()
        const obj = {}
        obj.description = cur.description
        obj.currentState = cur.currentState
        obj.id = Number(cur.id)
        obj.content = cur.numberOfWords
        obj.title = cur.title
        obj.totalFund = Number(cur.totalFund)
        obj.author = cur.writerAddress
        obj.value = '1500'
        data.push(obj)
      }
      setStories(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setCreativeWorks(mockData)
    if (contract) getAllStories()
  }, [contract])
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl mb-5 text-center">Creative Works</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {stories.map((work) => (
          <div key={work.id} className="border p-4 rounded shadow">
            <div
              style={{
                backgroundColor: getRandomColor(),
                height: '200px',
                marginBottom: '15px',
              }}
            ></div>
            <h2 className="text-2xl mb-2">{work.title}</h2>
            <p className="mb-4">{work.description}</p>

            <div className="h-2 mb-4 bg-gray-200">
              <div
                style={{
                  width: `${(work.amountRaised / work.value) * 100}%`,
                  backgroundColor: 'lightBlue',
                  height: '100%',
                }}
              ></div>
            </div>
            <h2>Raiased 100%</h2>
            <p className="font-bold">{work.value} words</p>
          </div>
        ))}

        {creativeWorks.map((work) => (
          <div key={work.id} className="border p-4 rounded shadow">
            <div
              style={{
                backgroundColor: getRandomColor(),
                height: '200px',
                marginBottom: '15px',
              }}
            ></div>
            <h2 className="text-2xl mb-2">{work.title}</h2>
            <p className="mb-4">{work.description}</p>

            <div className="h-2 mb-4 bg-gray-200">
              <div
                style={{
                  width: `${(work.amountRaised / work.value) * 100}%`,
                  backgroundColor: 'lightBlue',
                  height: '100%',
                }}
              ></div>
            </div>
            <h2>Raiased 100%</h2>
            <p className="font-bold">{work.value} words</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default AllStories
