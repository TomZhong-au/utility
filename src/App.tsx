import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Instalment from "./components/Instalment/Instalment";

function App() {
  return (
    <ChakraProvider>
      <Instalment />
    </ChakraProvider>
  );
}

export default App;
