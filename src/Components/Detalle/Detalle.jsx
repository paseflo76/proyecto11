import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Detalle = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const json = await res.json()
      setItem(json)
    }

    fetchItem()
  }, [id])

  if (!item) return null

  return (
    <main id='data-container'>
      <section className='data-card'>
        <h1>{item.name}</h1>
        <img src={item.image} alt={item.name} />
      </section>

      <div className='Detalle'>
        <p>Status: {item.status}</p>
        <p>Species: {item.species}</p>
        <p>Gender: {item.gender}</p>
        <p>Origin: {item.origin?.name}</p>
        <p>Location: {item.location?.name}</p>
      </div>
    </main>
  )
}

export default Detalle
