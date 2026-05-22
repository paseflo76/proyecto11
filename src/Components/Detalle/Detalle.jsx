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
        <div className='cortina'>
          <h1>{item.name}</h1>
        </div>

        <div className='data-image'>
          <img src={item.image} alt={item.name} />
        </div>
      </section>

      <p className='Detalle'>
        {item.status} - {item.species}
      </p>
    </main>
  )
}

export default Detalle
