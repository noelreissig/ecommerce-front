import React from "react";
import { Table } from "react-bootstrap";
import cartStyles from "./cart.module.css";

export const CartTable = () => {
  return (
    <div>
      <div className={`${cartStyles.font} table-responsive-md container`}>
        <Table hover>
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Producto Elegido</th>
              <th>Precio Unitario</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="text-center align-middle">1</td>
              <td className="text-center align-middle">
                <img
                  className={`img-fluid`}
                  src="../img/1_comedor_opcionDos.webp"
                  alt="comedor"
                />
              </td>
              <td className="text-center align-middle">500</td>
              <td className="text-center align-middle">2</td>
              <td className="text-center align-middle">1000</td>
              <td className="text-center align-middle">
                <i class="far fa-trash-alt"></i>
              </td>
            </tr>
            <tr className="text-center ">
              <td className="text-center align-middle">1</td>
              <td className="text-center align-middle">
                <img
                  className={`img-fluid`}
                  src="../img/1_comedor_opcionDos.webp"
                  alt="comedor"
                />
              </td>
              <td className="text-center align-middle">500</td>
              <td className="text-center align-middle">2</td>
              <td className="text-center align-middle">1000</td>
              <td className="text-center align-middle">
                <i class="far fa-trash-alt"></i>
              </td>
            </tr>
            <tr className="text-center ">
              <td className="text-center align-middle">1</td>
              <td className="text-center align-middle">
                <img
                  className={`img-fluid`}
                  src="../img/1_comedor_opcionDos.webp"
                  alt="comedor"
                />
              </td>
              <td className="text-center align-middle">500</td>
              <td className="text-center align-middle">2</td>
              <td className="text-center align-middle">1000</td>
              <td className="text-center align-middle">
                <i class="far fa-trash-alt"></i>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CartTable;
