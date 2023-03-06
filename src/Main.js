import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import { Autism } from "./pages/Autism";
import NotFound from "./pages/NotFound";
import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import News from "./pages/News";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

const Main = () => {
  return (
    <>
      <Container fluid className="px-0 d-flex flex-column min-vh-100">
        <Navbar1 />
        {/* <Landing /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Autism" element={<Autism />} />
          <Route path="/News" element={<News />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
};

export default Main;
