import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact, getImageCarRandom } from './services/facts'

export function App() {
  const [fact, setFact] = useState()
  const [imgCatRandom, setImgCatRandom] = useState()

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  useEffect(() => {
    console.log('get texto')
    getRandomFact().then(factData => setFact(factData))
  }, [])

  useEffect(() => {
    console.log('get Imagen')
    if (!fact) return
    let firstWord = fact.split(' ', 1)[0]

    getImageCarRandom(firstWord).then(url => setImgCatRandom(url))

  }, [fact])

  return (
    <main>
      <h1>Recuperando API Gatos</h1>

      <button onClick={handleClick} >Get new Fact</button>

      {fact && <p> {fact} </p>}
      {imgCatRandom && <img src={imgCatRandom} alt="Imagen Random" />}
    </main >
  )
}