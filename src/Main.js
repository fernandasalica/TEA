import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Landing from './components/Landing';

const Main = () => {
  return (
    <Container fluid className="px-0 d-flex flex-column min-vh-100">
      <Navbar />
      <Hero />
      <Landing />
      <Footer />
    </Container>
  )
}

export default Main