import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Detalle.css'

const Detalle = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [item, setItem] = useState(null)
  const [firstEpisode, setFirstEpisode] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true

    const fetchCharacter = async () => {
      setLoading(true)

      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const json = await res.json()

      if (!alive) return

      setItem(json)

      const firstEpUrl = json.episode?.[0]

      if (firstEpUrl) {
        const epRes = await fetch(firstEpUrl)
        const epJson = await epRes.json()

        if (alive) {
          setFirstEpisode(epJson)
        }
      }

      setLoading(false)
    }

    fetchCharacter()

    return () => {
      alive = false
    }
  }, [id])

  if (loading) {
    return (
      <main className='detalle-container'>
        <p>Loading...</p>
      </main>
    )
  }

  if (!item) return null

  return (
    <main className='detalle-container'>
      <div className='detalle-media'>
        <div className='detalle-card'>
          <img src={item.image} alt={item.name} />
        </div>

        <button className='back-btn' onClick={() => navigate(-1)}>
          ← Volver
        </button>
      </div>

      <aside className='detalle-info'>
        <h1>{item.name}</h1>

        <p className='line'>
          {item.status} - {item.species}
        </p>

        <p className='label'>Last known location:</p>
        <p className='value'>{item.location?.name}</p>

        <p className='label'>Origin:</p>
        <p className='value'>{item.origin?.name}</p>

        <p className='label'>First seen in:</p>
        <p className='value'>
          {firstEpisode ? firstEpisode.name : 'Loading...'}
        </p>
      </aside>
    </main>
  )
}

export default Detalle
