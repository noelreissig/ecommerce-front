import Footer from "../Footer";
import NavComponent from "../Navbar";
import TableAdmin from "../TableAdmin";

import adminStyles from "./admin.module.css";

function Admin() {
  return (
    <div>
      <NavComponent />
      <div className="container">
        <h2 className={`${adminStyles.admin} container`}>Panel de Control</h2>
        <TableAdmin />
      </div>

      <Footer />
    </div>
  );
}
export default Admin;
