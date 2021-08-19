import React from "react";
import { Table } from "react-bootstrap";
import ModalAdmin from "./ModalAdmin";
import tableStyles from "./tableStyles.module.css";

const TableAdmin = () => {
  return (
    <div className={`${tableStyles.font} pb-2`}>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Producto</th>
            <th>Modelo</th>
            <th>Categoria</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="text-center">1</td>
            <td>Mesa de 4</td>
            <td>Otto</td>
            <td>Comedor</td>
            <td>USD 500</td>
            <td>5</td>
            <td>
              <ModalAdmin />
            </td>
            <td>
              <i class="far fa-trash-alt"></i>
            </td>
          </tr>
          <tr className="text-center">
            <td className="text-center">1</td>
            <td>Mesa de 4</td>
            <td>Otto</td>
            <td>Comedor</td>
            <td>USD 500</td>
            <td>5</td>
            <td>
              <ModalAdmin />
            </td>
            <td>
              <i class="far fa-trash-alt"></i>
            </td>
          </tr>
          <tr className="text-center">
            <td className="text-center">1</td>
            <td>Mesa de 4</td>
            <td>Otto</td>
            <td>Comedor</td>
            <td>USD 500</td>
            <td>5</td>
            <td>
              <ModalAdmin />
            </td>
            <td>
              <i class="far fa-trash-alt"></i>
            </td>
          </tr>
          <tr className="text-center">
            <td className="text-center">1</td>
            <td>Mesa de 4</td>
            <td>Otto</td>
            <td>Comedor</td>
            <td>USD 500</td>
            <td>5</td>
            <td>
              <ModalAdmin />
            </td>
            <td>
              <i class="far fa-trash-alt"></i>
            </td>
          </tr>
          <tr className="text-center">
            <td className="text-center">1</td>
            <td>Mesa de 4</td>
            <td>Otto</td>
            <td>Comedor</td>
            <td>USD 500</td>
            <td>5</td>
            <td>
              <ModalAdmin />
            </td>
            <td>
              <i class="far fa-trash-alt"></i>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableAdmin;
