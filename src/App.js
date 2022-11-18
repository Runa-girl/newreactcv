import './App.css';
import { Footer } from './mainComponents/footer';
import { Header } from './mainComponents/Header.js';
import { Navbar } from './mainComponents/navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Footer />  
    </div>
  );
}

export default App;
