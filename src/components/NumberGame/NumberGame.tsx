import { Box, Button, Center, Container, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { generateRandomArray } from "./logic";
import Tile from "./Tile";
import { useEffect, useMemo, useReducer } from 'react';
import numberGameReducer, { initialState, ActionType } from '../../reducer/numberGameReducer';



const GameContent = ({ boardSize }: { boardSize: number }) => {

  const [state, dispatch] = useReducer(numberGameReducer, initialState)
  const { progress, wrongIndex, gameWin, resetGame } = state

  const arr = useMemo(() => generateRandomArray(boardSize * boardSize), [resetGame,boardSize])

  useEffect(()=>{
    dispatch({ type: ActionType.RESET })
  },[boardSize])

  const handleTileClick = (id: number) => {
    console.log(progress)
    dispatch({ type: ActionType.CLICK, payload: { id, boardSize } })
  }

  const restartGame = () => {
    dispatch({ type: ActionType.RESET })
  }

  return (
    <Box my={8}>
      <VStack gap={4}>
      <Grid templateColumns={`repeat(${boardSize}, 1fr)`} gap={2}>
        {arr.map((number) => (
          <GridItem key={number}>
            <Tile id={number} progress={progress} wrongIndex={wrongIndex} onClick={handleTileClick} />
          </GridItem>
        ))}
      </Grid>
      {gameWin && <Text>You Win</Text>}
      <Button onClick={restartGame} colorScheme='red'>Restart</Button>
      </VStack>
    </Box>
  )
};

export default GameContent;
