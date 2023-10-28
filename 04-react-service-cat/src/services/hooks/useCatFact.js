import { useEffect, useState } from 'react'
import { getRandomFact } from '../facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact()
      // .then(setFact) es lo mismo
      .then(newFact => setFact(newFact))
  }
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
