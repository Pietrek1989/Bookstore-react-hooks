import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import AllBooks from "./Components/AllBooks";
import cover from "./assets/cover.png";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Hero name="MAGICAL BOOKSTORE"></Hero>
      </div>
      <div>
        <AllBooks></AllBooks>
      </div>
      <div>
        <Footer name="MAGICAL BOOKSTORE"></Footer>
      </div>
    </div>
  );
}

export default App;
