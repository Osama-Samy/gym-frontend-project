import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Offers from "./components/Offers";
import Sec3 from "./components/Sec3";
import SecCards from "./components/SecCards";
import Comments from "./components/Comments";
import Discounts from "./components/Discount";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <Offers/>
      <Sec3/>
      <SecCards/>
      <Comments/>
      <Discounts/>
      <Footer/>
    </div>
  )
}

export default App
