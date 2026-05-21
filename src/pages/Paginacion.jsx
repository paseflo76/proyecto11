import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Components/Loading/Loading'

const Paginacion = () => {
  const { status, species } = useParams()

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(0)
  const [loading, setLoading] = useState(false)

  let url = `https://rickandmortyapi.com/api/character?page=${page}`

  if (status) url += `&status=${status}`
  if (species) url += `&species=${species}`

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const res = await fetch(url)
      const json = await res.json()

      setData(json.results || [])
      setPages(json.info?.pages || 0)

      setLoading(false)
    }

    fetchData()
  }, [url])

  const renderPages = () => {
    const buttons = []

    for (let i = 1; i <= pages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={i === page ? 'active' : ''}
        >
          {i}
        </button>
      )
    }

    return buttons
  }

  return (
    <main id='data-container'>
      {loading && <Loading />}

      {data.map((item) => (
        <div key={item.id} className='data-card'>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} />
        </div>
      ))}

      <div className='pagination'>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>Prev</button>

        {renderPages()}

        <button onClick={() => setPage((p) => Math.min(p + 1, pages))}>
          Next
        </button>
      </div>
    </main>
  )
}

export default Paginacion
