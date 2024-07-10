import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutUS from "./pages/AboutUS";
import Careers from "./pages/Careers";
import ContactUS from "./pages/ContactUS";
import MainHome from "./pages/MainHome";
import SeSm from "./pages/SeSm";
import WebDesignn from "./pages/WebDesignn";
import EnquiryNow from "./pages/EnquiryNow";
import Body from "./components/Body";

function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* <MainHome/> */}
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/home" element={<MainHome />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/webdesign" element={<WebDesignn />} />
        <Route path="/sesm" element={<SeSm />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/enquirynow" element={<EnquiryNow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
