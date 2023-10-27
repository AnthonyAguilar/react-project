import { useState } from "react"

const API_KEY = 'e73d6c9'

export async function searchMovies({ search }) {
  
  if (search === '') return null

  try {

    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    let movies = json.Search

    return movies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))

  } catch (error) {
    throw new Error('Error al buscar', error)
  }



}