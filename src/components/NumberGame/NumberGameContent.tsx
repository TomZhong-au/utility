import { Box, Button, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
// import { storeTime } from "./logic";
import Tile from "./Tile";
import { useEffect, useMemo, useReducer, useState } from 'react';
import numberGameReducer, { initialState, ActionType } from '../../reducer/numberGameReducer';
import Timer from '../Timer/Timer';
import useReset from '../../hooks/useReset';
import { generateRandomArray } from './logic/generateRandomArray';

const err = new Audio('/sound/error.mp3')

const GameContent = ({ boardSize }: { boardSize: number }) => {

  const [state, dispatch] = useReducer(numberGameReducer, initialState)
  const { progress, error, gameWin, resetGame } = state
  const { reset, setReset } = useReset()
  const [time, setTime] = useState(0)

  const arr = useMemo(() => generateRandomArray(boardSize * boardSize), [resetGame, boardSize])

  // reset state when board size changes
  useEffect(() => {
    dispatch({ type: ActionType.RESET })
    setReset(true)
  }, [boardSize])

  // play error sound at error
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

  useEffect(() => {
    if (!gameWin) return
    // save current time to local storage
    // storeTime(time, boardSize)
  }, [gameWin])

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

        <Button onClick={restartGame} colorScheme='red'>Restart</Button>
        <Timer action={gameWin ? "stop" : "start"} reset={reset} getTime={setTime} />
        <Box height={8}>
          {gameWin && <Text>You Win. Your best records: </Text>

          }
        </Box>
      </VStack>
    </Box>
  )
};

export default GameContent;
