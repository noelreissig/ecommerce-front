import Footer from "../Footer";
import NavComponent from "../Navbar";
import TableAdmin from "./TableAdmin";

import adminStyles from "./admin.module.css";

function Admin() {
  return (
    <div className="">
      <NavComponent />
      <div className="container min-vh-100">
        <h2 className={`${adminStyles.admin} container`}>
          Gestion de Productos
        </h2>
        <TableAdmin />
      </div>

      <Footer />
    </div>
  );
}
export default Admin;
