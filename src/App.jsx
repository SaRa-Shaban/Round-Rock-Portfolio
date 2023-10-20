import reactLogo from "./assets/react.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import ContactUs from "./Components/ContactUs/ContactUs";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
      <Navbar />
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}

export default App;
