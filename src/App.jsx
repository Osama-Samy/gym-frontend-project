import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Offers from "./components/Offers.jsx";
import Sec3 from "./components/Sec3.jsx";
import SecCards from "./components/SecCards.jsx";
import Comments from "./components/Comments.jsx";
import Discounts from "./components/Discount.jsx";
import Footer from "./components/Footer.jsx";
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
