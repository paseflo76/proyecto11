import { useParams, Link } from 'react-router-dom'
import useInfiniteScroll from '../utils/useInfiniteScroll'
import './Paginacion.css'
import Loading from '../Components/Loading/Loading.jsx'

const Paginacion = () => {
  const { tipo } = useParams()

  const { data, loaderRef, loading } = useInfiniteScroll(
    `https://starwars-databank-server.vercel.app/api/v1/${tipo}`
  )

  if (!data || data.length === 0) return null

  return (
    <main id='data-container'>
      {data.map((item, index) => (
        <Link
          key={item._id ?? index}
          to={`/${tipo}/${item._id ?? ''}`}
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
      {loading && <Loading />}
      <div ref={loaderRef} style={{ height: '20px', width: '100%' }} />
    </main>
  )
}

export default Paginacion
