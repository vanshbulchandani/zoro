import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import "./App.css";
import Movie from "./pages/Movie";
import theme from "./theme";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Genre from "./pages/Genre";
import Error from "./pages/Error";
import Search from "./pages/Search";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="/genre/:genreId" element={<Genre />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

// basepath
// path
// params

// react => varaible in path => params
// ?
export default App;
