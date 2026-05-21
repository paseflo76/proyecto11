import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Detalle.css'

const Detalle = () => {
  const { tipo, id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch(
        `/api/v1/${tipo}/${id}`
      )
      const json = await res.json()
      setItem(json)
    }
    fetchItem()
  }, [tipo, id])

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
      <p className='Detalle'>{item.description}</p>
    </main>
  )
}

export default Detalle
