/* import { useState, useEffect, useRef, useCallback } from 'react'

const BASE_URL = 'https://rickandmortyapi.com/api/character'

const useInfiniteScroll = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loaderRef = useRef(null)
  const controllerRef = useRef(null)

  const fetchData = useCallback(async () => {
    if (loading || !hasMore) return

    if (controllerRef.current) controllerRef.current.abort()
    controllerRef.current = new AbortController()

    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}?page=${page}`, {
        signal: controllerRef.current.signal
      })

      const json = await res.json()
      const newData = json.results || []

      setData((prev) => [...prev, ...newData])

      if (!json.info?.next) {
        setHasMore(false)
      } else {
        setPage((p) => p + 1)
      }
    } catch {
      setHasMore(false)
    }

    setLoading(false)
  }, [page, loading, hasMore])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !loading) {
        fetchData()
      }
    })

    if (loaderRef.current) observer.observe(loaderRef.current)

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current)
    }
  }, [fetchData, hasMore, loading])

  return { data, loaderRef, loading }
}

export default useInfiniteScroll
 */
