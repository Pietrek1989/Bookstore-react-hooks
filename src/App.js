import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import AllBooks from "./Components/AllBooks";
import BookList from "./Components/BookList";
import fantasy from "../src/Data/fantasy.json";
import romance from "../src/Data/romance.json";
import history from "../src/Data/history.json";
import horror from "../src/Data/horror.json";
import sciFi from "../src/Data/scifi.json";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Hero name="✨MAGICAL BOOKSTORE✨"></Hero>
      </div>
      <div>
        {/* <AllBooks></AllBooks> */}
        <BookList genre={horror}></BookList>
      </div>
      <div>
        <Footer name="MAGICAL BOOKSTORE"></Footer>
      </div>
    </div>
  );
}

export default App;
