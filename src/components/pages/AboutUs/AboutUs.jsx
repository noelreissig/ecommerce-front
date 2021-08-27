import Footer from "../../Footer/Footer";
import NavComponent from "../../Navbar/Navbar";
import aboutUsStyles from "./aboutUs.module.css";

function AboutUs() {
  return (
    <div>
      <NavComponent />
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center mx-0">
          <div className="col-md-4">
            <div>
              <h1 className={`${aboutUsStyles.title} pt-5`}>
                - Sobre el proyecto -
              </h1>
              <p>
                Este proyecto esta enmarcado en el curso Cooding Bootcamp de
                Hack Academy. El cuál es un curso de 3 meses, extremadamente
                práctico y de dedicación full-time. Durante este curso se
                aprendio sobre Front-End y Back-End con el fin de lograr ser un
                desarrollador web Full Stack.
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <img
              className={`${aboutUsStyles.imgStyle} pt-5 img-fluid`}
              src="../../img/photo-back.png"
              alt="img"
            />
          </div>
        </div>
        <hr />
        <div className="my-5">
          <h2 className={`${aboutUsStyles.title} text-center`}>
            Resumen del proyecto
          </h2>
          <p>
            En este ejercicio se debia construir un sitio de e-commerce,
            dedicado a la venta de cualquier producto elegido por el equipo. Se
            dividieron las tareas, tratando de que cada integrante realizara
            aproximadamente la misma cantidad de trabajo e intentando que las
            mismas sean variadas. Se decidió apoyarse en las herramientas como
            Trello y Exallidraw, donde se pueden crear una listas de tareas,
            tener due dates y responsables de las mismas.
          </p>
          <p className="">
            Se enfatizó en trabajo en equipo, cuidando mucho la comunicación
            entre los integrantes. Manteniendo informados a los compañeros sobre
            lo que se estaba haciendo, en qué se estaba trancado y qué se
            planeaba hacer. Ya que la buena comunicación en el equipo es clave
            para el éxito del proyecto.
          </p>
        </div>
        <div className="my-5">
          <h2 className={`${aboutUsStyles.title} text-center`}>
            Tecnologías utilizadas
          </h2>
          <div className="row">
            <div className="d-flex justify-content-center my-3">
              <div className="col-md-4 text-center">
                <h3>Front-End</h3>
                <ul className="list-unstyled">
                  <li>React</li>
                  <li>Redux</li>
                  <li>React-router-dom</li>
                  <li>Boostrap</li>
                </ul>
              </div>
              <div className="col-md-4 text-center">
                <h3>Back-End</h3>
                <ul className="list-unstyled">
                  <li>Node.js</li>
                  <li>MySql</li>
                  <li>Sequelize</li>
                  <li>Express.js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h3 className={`${aboutUsStyles.title} text-center`}>Equipo</h3>
          <div className="row">
            <div className="d-flex justify-content-around">
              <div className="col-md-3">
                <img
                  className={`${aboutUsStyles.imgProfile} img-fluid`}
                  src="../../img/aboutUs/Maria_Noel.png"
                  alt="María Noel_2"
                />
                <div className="text-center">
                  <strong>Maria Noel Reissig</strong>
                  <i class="fab fa-linkedin"> Maria Noel</i>
                </div>
              </div>
              <div className="col-md-3">
                <img
                  className={`${aboutUsStyles.imgProfile} img-fluid`}
                  src="../../img/aboutUs/Gabriel.png"
                  alt="Gabriel"
                />
              </div>
              <div className="col-md-3">
                <img
                  className={`${aboutUsStyles.imgProfile} img-fluid`}
                  src="../../img/aboutUs/Antonella_2.jpg"
                  alt="Antonella"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border shadow p-4 m-4 rounded">
          <h3 className={`${aboutUsStyles.title} text-center`}>
            Para poder acceder a las funcionalidades del Administrador:{" "}
          </h3>
          <p className="text-center">
            <strong> 1. Ingresar a </strong>//admin
          </p>
          <p className="text-center">
            <strong>2. En el campo email: </strong> admin@admin.com
          </p>
          <p className="text-center">
            <strong>3. En el campo password: </strong> password
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default AboutUs;
