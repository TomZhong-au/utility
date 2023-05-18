import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Instalment from './components/Instalment';
import NumberGame from './components/NumberGame/NumberGame';

function App() {
  return (
    <ChakraProvider>
      {/* <Instalment /> */}
      <NumberGame boardSize={4}/>
    </ChakraProvider>
  );
}

export default App;
