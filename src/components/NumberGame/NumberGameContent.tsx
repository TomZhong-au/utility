import { Box, Button, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { generateRandomArray } from "./logic";
import Tile from "./Tile";
import { useEffect, useMemo, useReducer } from 'react';
import numberGameReducer, { initialState, ActionType } from '../../reducer/numberGameReducer';
import Timer from '../Timer/Timer';
import useReset from '../../hooks/useReset';

const err = new Audio('/sound/error.mp3')

const GameContent = ({ boardSize }: { boardSize: number }) => {

  const [state, dispatch] = useReducer(numberGameReducer, initialState)
  const { progress, error, gameWin, resetGame } = state
  const {reset,setReset}=useReset()

  const arr = useMemo(() => generateRandomArray(boardSize * boardSize), [resetGame, boardSize])

  // reset state when board size changes
  useEffect(() => {
    dispatch({ type: ActionType.RESET })
    setReset(true)
  }, [boardSize])

  // play error sound when error occurs
  useEffect(() => {
    if (error) err.play()
  }, [state])

  const handleTileClick = (id: number) => {
    dispatch({ type: ActionType.CLICK, payload: { id, boardSize } })
  }

  const restartGame = () => {
    dispatch({ type: ActionType.RESET })
    setReset(true)
  }

  return (
    <Box my={8}>
      <VStack gap={4}>
        <Grid templateColumns={`repeat(${boardSize}, 1fr)`} gap={2}>
          {arr.map((number) => (
            <GridItem key={number}>
              <Tile id={number} progress={progress} onClick={handleTileClick} />
            </GridItem>
          ))}
        </Grid>
        <Box height={8}>
          {error && <Text>Try Again</Text>}
          {gameWin && <Text>You Win</Text>}
        </Box>
        <Button onClick={restartGame} colorScheme='red'>Restart</Button>
        <Timer action={gameWin?"stop":"start"} reset={reset}/>
      </VStack>
    </Box>
  )
};

export default GameContent;
