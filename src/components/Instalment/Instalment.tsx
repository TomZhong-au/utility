import {
  Box,
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
    <Box width={"100vw"} bgColor={"#dda706"}>
      <Box
        maxW={"1024px"}
        p={"1rem"}
        pt={"1.5rem"}
        // bgGradient={"linear(to-tr,purple,yellow.400)"}
        bgColor={'#030352'}
        color={"white"}
        m={"auto"}
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

      </Box>
    </Box>
  );
};

export default Instalment;
