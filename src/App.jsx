import "./styles.css";
import Secciones from "./components/Secciones";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-[100vh] flex flex-col lg:flex-row gap-5">
      <Sidebar></Sidebar>
      <Secciones></Secciones>
    </div>
  );
}

export default App;
