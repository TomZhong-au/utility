import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import DataCards from "./DataCards";
import useOrientation from "../../hooks/useOrientation";
import DataTable from "./DataTable";

const Instalment = () => {
  const [amount, setAmount] = useState(0);
  const [lumpsum, setLumpsum] = useState(0);
  const orientation = useOrientation();

  return (
    <Box width={"100vw"} h="100vh" bgImage={'https://tailwindui.com/img/beams-home@95.jpg'}>
    {orientation === "landscape" 
    ? <Center p={'3rem'} color={'#030352'}>
      <h1>A Quick Repayment Calculator </h1>
      </Center>
    :null}

      <Box
        maxW={"1024px"}
        p={"1rem"}
        pt={"1.5rem"}
        bgColor={'#030352'}
        color={"white"}
        m={"auto"}
        borderRadius={'1rem'}
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={"5px"} px={"5px"}>
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
          </GridItem>
          <GridItem fontSize={"2xl"}>
            <label htmlFor="lumpsum" color="blue">
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
        <Spacer height={"1rem"} />

        {orientation === "landscape" ? (
          <DataTable balance={amount - lumpsum} />
        ) : (
          <DataCards balance={amount - lumpsum} />
        )}
        <Center mt={'2rem'} fontSize={'sm'}>© Copyright Tom</Center>
      </Box>

    </Box>
  );
};

export default Instalment;
