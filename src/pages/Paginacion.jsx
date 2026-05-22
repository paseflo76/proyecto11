import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../Components/Loading/Loading'
import './Paginacion.css'

const Paginacion = () => {
  const { status, species } = useParams()

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(0)
  const [loading, setLoading] = useState(false)

  const url = `https://rickandmortyapi.com/api/character?page=${page}${
    status ? `&status=${status}` : ''
  }${species ? `&species=${species}` : ''}`

  useEffect(() => {
    let alive = true

    const fetchData = async () => {
      setLoading(true)

      const res = await fetch(url)
      const json = await res.json()

      if (!alive) return

      setData(json.results || [])
      setPages(json.info?.pages || 0)

      setLoading(false)
    }

    fetchData()

    return () => {
      alive = false
    }
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
      {loading && (
        <div className='loading-wrapper'>
          <Loading />
        </div>
      )}

      {!loading &&
        data.map((item) => (
          <Link
            key={item.id}
            to={`/character/${item.id}`}
            className='data-card'
          >
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
