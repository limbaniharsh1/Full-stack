import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Homescreen from "./Screen/Homescreen";
import Allroutes from "./Allroutes";

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Container>
          <h1>Ecommerce app</h1>
          <Allroutes/>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
