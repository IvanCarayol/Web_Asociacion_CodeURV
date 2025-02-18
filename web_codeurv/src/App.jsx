import NavBar from "./components/NavBar";
import "./App.css";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";
import Equipos from "./components/Equipos";
import SobreNosotros from "./components/SobreNosotros";
import Form from "./components/Form";

function App() {
  return (
    <>
      <NavBar /> <Inicio /> <Equipos /> <SobreNosotros /> <Form /> <Footer />
    </>
  );
}

export default App;
