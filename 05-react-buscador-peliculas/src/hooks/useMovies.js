import { useRef, useState, useMemo, useCallback  } from 'react'
import { searchMovies } from '../services/movies'


export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoadin] = useState(false)
  const previousSearch = useRef(movies)
  // const [moviesSearch, setMovieSearch] = useState(null)
  const [error, setError] = useState()
  console.log('useMovies')

  const getMovies = useCallback (async ({ search }) => {
    if (search === previousSearch.current) return null
    try {
      setLoadin(true)
      setError(null)
      previousSearch.current = search
      searchMovies({ search })
        .then(newMovies => {
          console.log('retorno')
          setMovies(newMovies)
        })
    } catch (error) {
      setError(error.message)
    } finally {
      setLoadin(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])


  return { movies: sortedMovies, getMovies, loading }

}