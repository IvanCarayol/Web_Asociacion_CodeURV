import NavBar from "./components/NavBar";
import "./App.css";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";
import Equipos from "./components/Equipos";
import SobreNosotros from "./components/SobreNosotros";

function Contacto() {
  return (
    <>
      <NavBar /> <Inicio /> <Equipos /> <SobreNosotros /> <Footer />
    </>
  );
}

export default Contacto;
