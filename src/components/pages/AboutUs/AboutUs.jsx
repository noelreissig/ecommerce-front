import ReactPlayer from "react-player";
import Footer from "../../Footer/Footer";
import NavComponent from "../../Navbar/Navbar";
import aboutUsStyles from "./aboutUs.module.css";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <NavComponent />
      <div className="container px-4">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-4">
            <div>
              <h1 className={`${aboutUsStyles.title}`}>
                - Sobre el proyecto -
              </h1>
              <p className="fs-5">
                Este proyecto está enmarcado en el curso Cooding Bootcamp de
                Hack Academy. El cuál es un curso de 3 meses, extremadamente
                práctico y de dedicación full-time. Durante este curso se
                aprendió sobre Front-End y Back-End con el fin de lograr ser un
                desarrollador web Full Stack.
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <img
              className={`${aboutUsStyles.imgStyle} pt-2 img-fluid`}
              src="../../img/photo-back.png"
              alt="img"
            />
          </div>
        </div>
        <hr />
        <div className="my-5 text-center fs-5">
          <h2 className={`${aboutUsStyles.title} text-center pt-5`}>Resúmen</h2>
          <p className="mt-4">
            En este ejercicio se debía construir un sitio de e-commerce,
            dedicado a la venta de cualquier producto. Se dividieron las tareas,
            tratando de que cada integrante realizara aproximadamente la misma
            cantidad de trabajo e intentando que las mismas sean variadas.
          </p>
          <p>
            {" "}
            Se decidió apoyarse en las herramientas como <em>
              Exallidraw
            </em> y <em>Trello</em>, donde pudimos crear listas de tareas, tener
            due dates y responsables de las mismas.
          </p>
          <p className="">
            Se enfatizó en el trabajo en equipo, cuidando mucho la comunicación
            entre los integrantes. Manteniendo informados a los compañeros sobre
            lo que se estaba haciendo, en qué se estaba trancado y qué se
            planeaba hacer. Ya que la buena comunicación en el equipo es clave
            para el éxito del proyecto.
          </p>
          <p className={`${aboutUsStyles.title} pt-4`}> Nota: </p>
          <p className={`${aboutUsStyles.disclaimer} text-center px-5 pb-0`}>
            Las imágenes e información de este proyecto, fueron recabados de la
            página de <strong>Kave Home</strong> y utilizados sólo con fines
            educativos.
          </p>
        </div>
        <hr />
        <div className="my-5">
          <h2 className={`${aboutUsStyles.title} text-center pt-5 mb-4`}>
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
              <div className="col-md-4 text-center mb-5 pb-5">
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
        <div className="my-5 py-3">
          <div className="row">
            <div className="col-md-4">
              <h3 className="mt-5 pt-3">
                El usuario puede reacorrer la página de forma muy sencilla!
              </h3>
              <p>
                Mirar los productos dependiendo de categorías, agregar a su
                carrito los productos de su interés, y solamente
                logearse-registrarse al momento de querer finalizar su compra!
              </p>
            </div>
            <div className="col-md-8 text-align-end">
              <ReactPlayer
                url="https://tyentfaqbpgmuskfbnwk.supabase.in/storage/v1/object/public/ecommerce/video/Deco-Hack-Front.mp4"
                width="90%"
                playing
                muted
                loop
              />
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-8">
              <ReactPlayer
                url="https://tyentfaqbpgmuskfbnwk.supabase.in/storage/v1/object/public/ecommerce/video/Deco-Hack-Back.mp4"
                width="90%"
                playing
                muted
                loop
              />
            </div>
            <div className="col-md-4">
              <h3 className="mt-3 pt-3">
                Algunas de las funcionalidades que se pueden realizar siendo
                administrador de la App.{" "}
              </h3>
              <span> Consulte, edite y administre </span> sus bases de datos
              fácilmente con una aplicación que puede ejecutarse rápidamente.
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h3 className={`${aboutUsStyles.title} text-center mb-4`}>
            Equipo de Trabajo
          </h3>
          <div className="row d-flex justify-content-around">
            <div className="col-md-3 text-center">
              <img
                className={`${aboutUsStyles.imgProfile} img-fluid mb-3 `}
                src="../../img/aboutUs/Maria_Noel.png"
                alt="María Noel_2"
              />
              <div className="text-center ">
                <strong>María Noel Reissig</strong>
                <Link
                  to={{ pathname: "https://www.linkedin.com/in/noelreissig/" }}
                  target="_blank"
                  className="text-decoration-none text-dark"
                >
                  <p>
                    {" "}
                    <i class="fab fa-linkedin"></i> María Noel Reissig
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <img
                className={`${aboutUsStyles.imgProfile} img-fluid mb-3`}
                src="../../img/aboutUs/Gabriel.png"
                alt="Gabriel"
              />
              <div className="text-center ">
                <strong>Gabriel Vicente</strong>
                <Link
                  to={{
                    pathname:
                      "https://www.linkedin.com/in/gabriel-vicente-presno/",
                  }}
                  target="_blank"
                  className="text-decoration-none text-dark"
                >
                  <p>
                    {" "}
                    <i class="fab fa-linkedin"> </i> Gabriel Vicente
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <img
                className={`${aboutUsStyles.imgProfile} img-fluid mb-3`}
                src="../../img/aboutUs/Antonella_2.jpg"
                alt="Antonella"
              />
              <div className="text-center">
                <strong>Antonella Gervasini</strong>
                <Link
                  to={{
                    pathname:
                      "https://www.linkedin.com/in/antonella-gervasini/",
                  }}
                  target="_blank"
                  className="text-decoration-none text-dark"
                >
                  <p>
                    {" "}
                    <i class="fab fa-linkedin"></i> Antonella Gervasini
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />

        <div className="border shadow p-4 my-5 rounded">
          <h3 className={`${aboutUsStyles.title} text-center`}>
            Para poder acceder a las funcionalidades del Administrador:{" "}
          </h3>
          <p className="text-center">
            <strong> 1. Ingresar a: </strong>
            <Link
              to={{
                pathname: "https://ecommerce-admin-one.vercel.app/",
              }}
              target="_blank"
              className="text-decoration-none text-dark"
            >
              Admin
            </Link>
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
