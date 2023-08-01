import { useState } from "react";
import genRepayment from "../../util/genRepayment";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,

} from "@chakra-ui/react";

const DataTable = ({ balance }: { balance: number }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    if (index === selectedIndex) {
      return setSelectedIndex(-1);
    }
    setSelectedIndex(index);
  };

  const repaymentData = genRepayment(balance);
  const tableBody = repaymentData.map(
    ({ title, weekly, fortnightly, monthly, color }, index) => {
      // selectedIndex===-1 means no row is selected
      const isSelcted =
        selectedIndex === -1
          ? undefined
          : selectedIndex === index
          ? true
          : false;
      return (
        <Tr
          bg={isSelcted ? "green.400" : ""}
          opacity={isSelcted === false ? "50%" : "100%"}
          fontWeight={isSelcted ? "600" : ""}
          key={title}
          fontSize={'xl'}
        >
          <Td>
            <Button
              border={"none"}
              bg={color}
              size={"md"}
              onClick={() => handleClick(index)}
              fontSize={"xl"}
              _hover={{ transform: "scale(1.1,1.1)", border: "none" }}
              _focus={{ outline: "none" }}
            >
              {title}
            </Button>
          </Td>
          <Td>{weekly.toFixed(2)}</Td>
          <Td>{fortnightly.toFixed(2)}</Td>
          <Td>{monthly.toFixed(2)}</Td>
        </Tr>
      );
    }
  );

  return (
    <TableContainer>
      <Table
        cellSpacing={"0px"}
        style={{ 
          borderCollapse: "separate", 
          borderSpacing: "0 1rem" 
        }}
      >
        <TableCaption color={"whiteAlpha"}>Payment Estimate</TableCaption>
        <Thead  >
          <Tr >
            <Th color={"whiteAlpha"}>Period</Th>
            <Th color={"whiteAlpha"}>Weekly</Th>
            <Th color={"whiteAlpha"}>Fortnight</Th>
            <Th color={"whiteAlpha"}>Monthly</Th>
          </Tr>
        </Thead>
        <Tbody>{tableBody}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
