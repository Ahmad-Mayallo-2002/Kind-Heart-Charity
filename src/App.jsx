import './App.css';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slider } from './components/slider';
import { Features } from './components/Features';
import { Story } from './components/Story';
import { Causes } from './components/Causes';
import { Volunteer } from './components/Volunteer';
import { News } from './components/News';
import { Customers } from './components/Customers';
import { Contact } from './components/Contact';
import { Information } from './components/Information';
import { Footer } from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Slider />
      <Features />
      <Story />
      <Causes />
      <Volunteer />
      <News />
      <Customers />
      <Contact />
      <Information />
      <Footer />
    </>
  );
}

export default App;
