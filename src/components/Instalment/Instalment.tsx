import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  Input,
  NumberInput,
  NumberInputField,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import genRepayment from '../../util/genRepayment';
import DataTable from './DataTable';
import DataCards from './DataCards';

const Instalment = () => {
  const [amount, setAmount] = useState(0);
  const [lumpsum, setLumpsum] = useState(0);



  return (
    <Box width={'100vw'} bgColor={'darkblue'}>
    <Box
      maxW={"500px"}
      p={"1rem"}
      pt={"3rem"}
      bgGradient={'linear(to-tr,purple,yellow.400)'}
      color={"white"}
      m={'auto'}
      
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={".5rem"} px={'1rem'} >
        <GridItem fontSize={"2xl"}>
          <label htmlFor="total" color="blue">
            Total
          </label>
        </GridItem>
        <GridItem>
          <NumberInput>
            <NumberInputField
              id="total"
              fontSize={"3xl"}
              onClick={(e) => e.currentTarget.select()}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </NumberInput>

        </GridItem >
        <GridItem fontSize={"2xl"}>
        <label htmlFor="lumpsum" color="blue" >
          Lumpsum
        </label>
        </GridItem>
        <GridItem>
        <NumberInput>
          <NumberInputField
            id="lumpsum"
            fontSize={"3xl"}
            onClick={(e) => e.currentTarget.select()}
            value={lumpsum}
            onChange={(e) => setLumpsum(Number(e.target.value))}
          />
        </NumberInput>
        </GridItem>
      </Grid>
      <Spacer height={"4rem"}/>

{/* <DataTable balance={amount-lumpsum}/> */}
<DataCards balance={amount-lumpsum}/>
    </Box>
    </Box>
  );
};

export default Instalment;
