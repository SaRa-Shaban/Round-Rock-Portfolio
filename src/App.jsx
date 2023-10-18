import reactLogo from "./assets/react.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import ContactUs from "./Components/ContactUs/ContactUs";
import Navbar from "./Components/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient()


function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <Services />
      {/*  Provide the client to your App */}
      <QueryClientProvider client={queryClient}>
        <Testimonials />
      </QueryClientProvider>
      <ContactUs />
      <Navbar />
    </>
  );
}

export default App;
