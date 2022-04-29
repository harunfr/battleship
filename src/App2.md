import React, { useState } from 'react'
import styled from 'styled-components'

import Game from './GameElements/Game'
import GameBoard from './components/styles/Board'
import GameBoardElement from './components/GameBoardElement'



const game = new Game()

const App = () => {
  const [coordinates, setCoordinates] = useState(
    game.player1.gameBoard.coordinates
  )

  return (
    <MainWrapper>
      {/* <Header> */}
        {/* <Logo /> */}
        {/* <Notification /> */}
        {/* <ThemeButton /> */}
        {/* <LeaveButton /> */}
      {/* </Header> */}
      {/* <Main> */}
        <div className="game-boards">
          <GameBoard>

          </GameBoard>
          <GameBoard>
            {coordinates.map((coordinate) => {
              const index = Number(`${coordinate.row}${coordinate.column}`)
              return (
                <GameBoardElement
                  hasShip={coordinate.hasShip}
                  placable={coordinate.placable}
                  index={index}
                  key={index}
                />
              )
            })}
          </GameBoard>
        </div>
        {/* <PlayButton /> */}
        {/* <RandomiseButton /> */}
      {/* </Main> */}
      {/* <Footer /> */}
    </MainWrapper>
  )
}

// {/* <button>Randomise</button> */}

const MainWrapper = styled.div``

export default App

///////////////////////////////////////////
(property) Props.coordinates: Coordinate[]
Type 'import("/home/harun/Desktop/reactAgain/battleship/src/GameElements/GameBoard").Coordinate[]' is not assignable to type 'import("/home/harun/Desktop/reactAgain/battleship/src/components/GameBoard/index").Coordinate[]'.
  Property 'index' is missing in type 'import("/home/harun/Desktop/reactAgain/battleship/src/GameElements/GameBoard").Coordinate' but required in type 'import("/home/harun/Desktop/reactAgain/battleship/src/components/GameBoard/index").Coordinate'.ts(2322)
index.tsx(16, 3): 'index' is declared here.
index.tsx(20, 3): The expected type comes from property 'coordinates' which is declared here on type 'IntrinsicAttributes & Props'