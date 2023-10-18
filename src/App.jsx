import reactLogo from "./assets/react.svg";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./App.css";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import ContactUs from "./Components/ContactUs/ContactUs";
import Navbar from "./Components/Navbar/Navbar";


function App() {

  return <>
  <Home/>
  <AboutUs/>
  <Services/>
  <Testimonials/>
  <ContactUs/>
  <Navbar/>
  </>;
}

export default App;
