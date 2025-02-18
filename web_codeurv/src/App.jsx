import NavBar from "./components/NavBar";
import "./App.css";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";
import Equipos from "./components/Equipos";
import SobreNosotros from "./components/SobreNosotros";
import Form from "./components/Form";
import Socios from "./components/socios";

function App() {
  return (
    <>
      <NavBar /> <Inicio /> <Equipos /> <SobreNosotros /> <Form /> <Socios /> <Footer />
    </>
  );
}

export default App;
