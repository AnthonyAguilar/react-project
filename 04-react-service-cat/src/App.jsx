import './App.css'
import { Otro } from './Components/otro'
import { useCatFact } from './services/hooks/useCatFact'
import { useCatImage } from './services/hooks/useCatImage'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  return (
    <main>
      <h1> App de gatitos</h1>

      <button onClick={refreshFact}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='Imagen extrada' />}
      <Otro />
    </main>
  )
}
