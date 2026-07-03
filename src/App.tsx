import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./routes/index";
import About from "./routes/about";
import Amenities from "./routes/amenities";
import Chairman from "./routes/chairman";
import Contact from "./routes/contact";
import Gallery from "./routes/gallery";
import VenturesIndex from "./routes/ventures/index";
import VentureDetails from "./routes/ventures/$slug";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/chairman" element={<Chairman />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ventures" element={<VenturesIndex />} />
        <Route path="/ventures/:slug" element={<VentureDetails />} />
      </Routes>
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;
