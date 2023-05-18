import { Box, Button, Center, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { generateRandomArray } from "./logic";
import Tile from "./Tile";
import { useMemo, useReducer } from 'react';
import numberGameReducer, { initialState, ActionType } from '../../reducer/numberGameReducer';



const NumberGame = ({boardSize}:{boardSize:number}) => {

  const [state, dispatch] = useReducer(numberGameReducer, initialState)
  const { progress, wrongIndex, gameWin, resetGame } = state

  const arr = useMemo(() => generateRandomArray(boardSize * boardSize), [resetGame])


  const handleTileClick = (id: number) => {
    console.log(progress)
    dispatch({ type: ActionType.CLICK, payload: {id,boardSize} })
  }

  const restartGame = () => {
    dispatch({ type: ActionType.RESET })
  }

  return (
    <Container centerContent bg='blue.300' maxW={'3xl'} py={6}>
      <Text fontSize={'3xl'}>Number Game</Text>
      <Text fontSize={'xl'}>Click numbers in ascending order, try to finish the game as fast as possible</Text>

      <Box my={8}>
        <Grid templateColumns={`repeat(${boardSize}, 1fr)`} gap={2}>
          {arr.map((number) => (
            <GridItem key={number}>
              <Tile id={number} progress={progress} wrongIndex={wrongIndex} onClick={handleTileClick} />
            </GridItem>
          ))}
        </Grid>
      </Box>
      {gameWin && <Text>You Win</Text>}
      <Button onClick={restartGame} colorScheme='red'>Restart</Button>
    </Container>
  )
};

export default NumberGame;
