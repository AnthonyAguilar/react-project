import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { checkEndGame } from './logic/board'

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  // null = No hay Ganador | false = Empate | true = Ganador
  const [winner, setWinner] = useState(null) 

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    // No actualiza si ya esta modificado
    if (board[index] || winner) return
    // Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiar el turno
    turn == TURNS.X ? setTurn(TURNS.O) : setTurn(TURNS.X)
    // Revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
   
    if (newWinner) {
      confetti()
      setWinner(newWinner) 
    }else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (

    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }

      </section>
      <section className="turn">
        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      
      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  )
}

export default App
