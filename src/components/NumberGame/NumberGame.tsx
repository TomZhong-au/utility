import { Box, Button } from "@chakra-ui/react";
import { Board } from "./Style";

const NumberGame = () => {
  const number = 10;
  const arr = Array(number * number).fill('')

  return (
    <Box >
      <Board row={number}>
        {arr.map((elm, index) =>       <Button>{index}</Button>)}
      </Board>
    </Box>
  );
};

export default NumberGame;
