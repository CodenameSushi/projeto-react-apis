import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <ChakraProvider>
      <GlobalStyle/>
      <Router/>
      </ChakraProvider>
  );
}

export default App;
