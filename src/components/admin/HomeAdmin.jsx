import React from "react";
import { Link } from "react-router-dom";
import homeAdminstyles from "./homeAdminstyles.module.css";

function HomeAdmin() {
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-5">Panel de control</h2>

      <div className="row d-flex justify-content-around">
        <div className={`col-md-3 ${homeAdminstyles.borderBox} rounded shadow`}>
          <Link to="/admin/categorias" className={homeAdminstyles.Link}>
            <h3 className={homeAdminstyles.subtitulo}>Categorias</h3>
            <hr />
            <i class="fas fa-layer-group fs-1 pb-4 mt-3"></i>
          </Link>
        </div>
        <div className={`col-md-3 ${homeAdminstyles.borderBox} rounded shadow`}>
          <Link to="/admin/productos" className={homeAdminstyles.Link}>
            <h3 className={homeAdminstyles.subtitulo}>Productos</h3>
            <hr />
            <i class="fas fa-tags fs-1 mt-3"></i>
          </Link>
        </div>
        <div className={`col-md-3 ${homeAdminstyles.borderBox} rounded shadow`}>
          <Link to="/admin/ordenes" className={homeAdminstyles.Link}>
            <h3 className={homeAdminstyles.subtitulo}>Ordenes</h3>
            <hr />
            <i class="fas fa-shopping-cart fs-1 mt-3"></i>
          </Link>
        </div>
        <div className="row mt-5 d-flex justify-content-around">
          <div
            className={`col-md-3 ${homeAdminstyles.borderBox} rounded shadow`}
          >
            <Link to="/admin/admin" className={homeAdminstyles.Link}>
              <h3 className={homeAdminstyles.subtitulo}>Admi</h3>
              <hr />
              <i class="fas fa-users-cog fs-1 mt-3 pb-4"></i>
            </Link>
          </div>
          <div
            className={`col-md-3 ${homeAdminstyles.borderBox} rounded shadow`}
          >
            <Link to="/admin/usuarios" className={homeAdminstyles.Link}>
              <h3 className={homeAdminstyles.subtitulo}>Usuarios</h3>
              <hr />
              <i class="fas fa-user fs-1 mt-3 pb-4"></i>
            </Link>
          </div>
        </div>
        <hr className="mt-5" />

        <div>
          <h4>Actividad de la tienda</h4>
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
