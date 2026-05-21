import { useState, useEffect, useRef, useCallback } from 'react'

const useInfiniteScroll = (urlBase) => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loaderRef = useRef(null)
  const totalRef = useRef(null)
  const controllerRef = useRef(null)
  const urlRef = useRef(urlBase)

  const fetchData = useCallback(async () => {
    if (loading || !hasMore) return

    if (controllerRef.current) controllerRef.current.abort()
    controllerRef.current = new AbortController()

    setLoading(true)

    try {
      const res = await fetch(`${urlBase}?page=${page}`, {
        signal: controllerRef.current.signal
      })

      const json = await res.json()
      const newData = json.data || []

      if (totalRef.current === null) {
        totalRef.current = json.info?.total || 0
      }

      setData((prev) => {
        const combined = [...prev, ...newData]
        if (combined.length >= totalRef.current) setHasMore(false)
        return combined
      })

      if (newData.length > 0) setPage((p) => p + 1)
      else setHasMore(false)

    } catch (err) {
      if (err.name !== 'AbortError') setHasMore(false)
    }

    setLoading(false)
  }, [urlBase, page, hasMore, loading])

  useEffect(() => {
    if (urlBase !== urlRef.current) {
      urlRef.current = urlBase
      if (controllerRef.current) controllerRef.current.abort()

      setPage(1)
      setData([])
      setHasMore(true)
      totalRef.current = null
    }
  }, [urlBase])

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