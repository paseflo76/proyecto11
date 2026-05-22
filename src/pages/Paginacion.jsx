import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
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
          className={`page-btn ${i === page ? 'active' : ''}`}
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
        <Link key={item.id} to={`/character/${item.id}`} className='data-card'>
          <div className='cortina'>
            <h2>{item.name}</h2>
          </div>

          <div className='data-image'>
            <img src={item.image} alt={item.name} />
          </div>
        </Link>
      ))}

      <div className='pagination'>
        <button
          className='nav-btn'
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          ‹
        </button>

        <div className='pages-container'>{renderPages()}</div>

        <button
          className='nav-btn'
          onClick={() => setPage((p) => Math.min(p + 1, pages))}
        >
          ›
        </button>
      </div>
    </main>
  )
}

export default Paginacion
