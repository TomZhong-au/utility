import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Instalment from './components/Instalment';
import NumberGamePage from './components/NumberGame/NumberGamePage';

function App() {
  return (
    <ChakraProvider>
      {/* <Instalment /> */}
      <NumberGamePage/>
    </ChakraProvider>
  );
}

export default App;
