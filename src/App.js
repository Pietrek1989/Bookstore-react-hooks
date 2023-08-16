import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import AllBooks from "./Components/AllBooks";
import BookList from "./Components/BookList";
import fantasy from "../src/Data/fantasy.json";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import romance from "../src/Data/romance.json";
import history from "../src/Data/history.json";
import horror from "../src/Data/horror.json";
import sciFi from "../src/Data/scifi.json";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Hero name="✨MAGICAL BOOKSTORE✨"></Hero>

        {/* <AllBooks></AllBooks> */}

        {/* <BookList genre={fantasy}></BookList> */}
        <Routes>
          <Route element={<BookList genre={fantasy}></BookList>} path="/" />
          <Route
            element={<BookList genre={romance}></BookList>}
            path="/romance"
          />
          <Route
            element={<BookList genre={history}></BookList>}
            path="/history"
          />
          <Route
            element={<BookList genre={horror}></BookList>}
            path="/horror"
          />
          <Route element={<BookList genre={sciFi}></BookList>} path="/sciFi" />
          <Route element={NotFound} path="*" />
        </Routes>

        <Footer name="MAGICAL BOOKSTORE"></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
