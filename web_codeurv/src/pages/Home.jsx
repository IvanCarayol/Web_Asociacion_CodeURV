import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import NavBar from "../components/NavBar";
import Inicio from "../components/Inicio";
import Footer from "../components/Footer";
import Equipos from "../components/Equipos";
import SobreNosotros from "../components/SobreNosotros";
import Form from "../components/Form";
import Socios from "../components/Socios";
import Proyectos from "../components/Proyectos";

function Home() {
  // Para hacer scroll si se le da a algun link del navbar
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <NavBar /> <Inicio /> <Equipos /> <SobreNosotros /> <Form /> <Socios />{" "}
      <Proyectos /> <Footer />
    </>
  );
}

export default Home;
