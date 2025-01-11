import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from './Widgets/Header'
import Footer from './Widgets/Footer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import EventsPage from "./Pages/EventsPage";

function App() {
  return (
    <div >
       <Router>
       <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
