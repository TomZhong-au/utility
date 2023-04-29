import { useMemo, useReducer } from "react";
import genRepayment from "../../util/genRepayment";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import PlanModal from "./PlanModal";
import { initialIndex, selectIndexReducer, setIndex } from '../../reducer/instalmentReducer';

const DataCards = ({ balance }: { balance: number }) => {
  const repaymentData = useMemo(() => genRepayment(balance), [balance]);
  const [selectedIndex, dispatch] = useReducer(selectIndexReducer,initialIndex)

  const cards = useMemo(()=>repaymentData.map((entry,index) => {
    const { title, weekly, fortnightly, monthly, color } = entry;
    return (
      <TableContainer key={title} mb={"1.5rem"} fontSize={"1xl"}>
        <Table>
          <Thead>
            <Tr>
              <Th
                bgColor={color}
                color={"white"}
                colSpan={2}
                textAlign={"center"}
                fontSize={"1.5rem"}
              >
                {" "}
                <Box userSelect={"none"} onClick={()=>dispatch(setIndex(index))} cursor={"pointer"}>
                  {title}
                </Box>
              </Th>
            </Tr>
          </Thead>

          <Tbody fontSize={"2xl"}>
            <Tr>
              <Td>{"Weekly"}</Td>
              <Td>{weekly.toFixed(2)}</Td>
            </Tr>
            <Tr>
              <Td>{"Fortnightly"}</Td>
              <Td>{fortnightly.toFixed(2)}</Td>
            </Tr>
            <Tr>
              <Td>{"Monthly"}</Td>
              <Td>{monthly.toFixed(2)}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    );
  }), [repaymentData]);

  return (
    <div>
      <Box textAlign={"center"}>click on heading to see more details</Box>
      {cards}
      <PlanModal
        selectedIndex={selectedIndex}
        dispatch={dispatch}
        plan={repaymentData[selectedIndex]}
        dataLength={repaymentData.length}
      />
    </div>
  );
};

export default DataCards;
