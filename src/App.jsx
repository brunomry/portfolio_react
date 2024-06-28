import Menu from "./components/Menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import Secciones from "./components/Secciones";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="containerFlex d-flex">
      <Menu></Menu>
      <Secciones></Secciones>
      <Footer></Footer>
    </div>
    
    
  )
}

export default App
