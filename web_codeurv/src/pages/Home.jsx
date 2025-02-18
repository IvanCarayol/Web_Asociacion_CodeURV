import NavBar from "../components/NavBar";
import Inicio from "../components/Inicio";
import Footer from "../components/Footer";
import Equipos from "../components/Equipos";
import SobreNosotros from "../components/SobreNosotros";
import Form from "../components/Form";
import Socios from "../components/Socios";
import Proyectos from "../components/Proyectos";

function Home() {
  return (
    <>
      <NavBar /> <Inicio /> <Equipos /> <SobreNosotros /> <Form /> <Socios /> <Proyectos />  <Footer />
    </>
  );
}

export default Home;