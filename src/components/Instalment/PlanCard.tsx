import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, CalendarIcon, InfoOutlineIcon} from "@chakra-ui/icons";
import { Plan } from "../../util/genRepayment";
import { SelectIndexActionTypes, SelectIndexReducerAction, resetIndex, updateIndex } from '../../reducer/instalmentReducer';

interface PlanCardProps {
  plan: Plan;
  dataLength: number;
  dispatch: React.Dispatch<SelectIndexReducerAction>;
}

export default function PlanCard({
  plan,
  dispatch,
  dataLength,
}: PlanCardProps) {
  const { title, color, weekly, fortnightly, monthly } = plan;

  const nextPlan = () => dispatch(updateIndex(SelectIndexActionTypes.INCREMENT, dataLength));
  const previousPlan = () => dispatch(updateIndex(SelectIndexActionTypes.DECREMENT, dataLength));

  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box
          mt={"2"}
          py={2}
          mx={6}
          bg={color}
          fontSize={'xl'}
          color={"white"}
          rounded={"xl"}
          textAlign={"center"}
          _hover={{ opacity: 0.8 }}
        >
          <CalendarIcon />     {title}
        </Box>

        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"3xl"}>$</Text>
            <Text fontSize={"6xl"} fontWeight={800}>
              {weekly.toFixed(2)}
            </Text>
            <Text color={"gray.500"}>/week</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.100", "gray.900")} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={InfoOutlineIcon} color={color} />
              $ <Text fontWeight={600} display={'inline'}>{fortnightly.toFixed(2)}</Text> /fortnight
            </ListItem>
            <ListItem>
              <ListIcon as={InfoOutlineIcon} color={color} />
              $ <Text fontWeight={600} display={'inline'}>{monthly.toFixed(2)}</Text> /month
            </ListItem>
          </List>
          <ButtonGroup gap={4} size={"lg"} mt={10} color={"white"} >
            <IconButton
              icon={<ArrowBackIcon />}
              aria-label="previous"
              onClick={previousPlan}
              bgColor={color}
              _hover={{}}
            />
            <Button  onClick={() => dispatch(resetIndex())} bgColor={color} _hover={{}}>
              CLOSE
            </Button>
            <IconButton
              icon={<ArrowForwardIcon />}
              aria-label="next"
              onClick={nextPlan}
              bgColor={color}
              _hover={{}}
            />
          </ButtonGroup>
        </Box>
      </Box>
    </Center>
  );
}
