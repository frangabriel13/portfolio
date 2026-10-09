import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Resumen from './components/resumen/Resumen';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Resumen />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
