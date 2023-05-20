import { Box, Button, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
// import { storeTime } from "./logic";
import Tile from "./Tile";
import { useEffect, useMemo, useReducer, useState } from 'react';
import numberGameReducer, { initialState, ActionType } from '../../reducer/numberGameReducer';
import Timer from '../Timer/Timer';
import { generateRandomArray } from './logic/generateRandomArray';
import useResetSignal from '../../hooks/useResetSignal';
import { useBestRecord } from './logic/useBestRecord';
import { millisecToString } from '../../util/timeConversion';

const err = new Audio('/sound/error.mp3')

const GameContent = ({ boardSize }: { boardSize: number }) => {

  const [state, dispatch] = useReducer(numberGameReducer, initialState)
  const { progress, error, gameWin, resetGame, newBestRecord } = state
  const { reset, setReset } = useResetSignal()
  const { record, setBestRecord } = useBestRecord(boardSize)
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
  })

  // when the game wins, deside new records
  useEffect(() => {
    if (!gameWin) return
    if (time >= (record ? record : Infinity)) return
    setBestRecord(time)
    dispatch({ type: ActionType.NEW_RECORD })
  }, [gameWin, time])


  const handleTileClick = (id: number) => {
    dispatch({ type: ActionType.CLICK, payload: { id, boardSize } })
  }

  const restartGame = () => {
    dispatch({ type: ActionType.RESET })
    setReset(true)
  }



  return (
    <Box my={8} width={'100%'} bg={'green'}>
      <VStack gap={4} bg={'pink'}>
        <Grid templateColumns={`repeat(${boardSize}, 1fr)`} gap={1} bg='orange' >
          {arr.map((number) => (
            <GridItem key={number}>
              <Tile id={number} progress={progress} onClick={handleTileClick} />
            </GridItem>
          ))}
        </Grid>

        <Button onClick={restartGame} colorScheme='red'>Restart</Button>
        <Timer action={gameWin ? "stop" : "start"} reset={reset} getTime={setTime} />
        <Box height={8}>
          {gameWin && <Text>
            {newBestRecord
              ? `🎊🎊🎊 Congratulations. New Best Record: `
              : `You Win. Your best record is:  `}
            {millisecToString(record || time)}
          </Text>

          }
        </Box>
      </VStack>
    </Box>
  )
};

export default GameContent;
