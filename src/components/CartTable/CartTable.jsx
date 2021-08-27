import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import cartStyles from "./cartTable.module.css";
import { useDispatch } from "react-redux";

export const CartTable = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.cartReducer);

  function handleDelete(id) {
    console.log(id);
    console.log({ type: "REMOVE_ITEM", payload: id });
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }
  return (
    <div>
      <div className={`${cartStyles.font} table-responsive-md container`}>
        <Table hover>
          <thead>
            <tr className="text-start">
              <th className="">Producto</th>
              <th className="d-none d-md-table-cell">Img</th>
              <th>Precio</th>
              <th className="text-start">Cant.</th>
              <th>Sub-total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {shoppingCart.map((item) => {
              return (
                <tr className="text-start">
                  <td className="text-start align-middle">{item.prod.name}</td>
                  <td className="text-start align-middle d-none d-md-table-cell">
                    <img
                      className={`img-fluid`}
                      src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/${item.prod.picture_url}`}
                      alt={item.prod.name}
                    />
                    {console.log(item.prod.name)}
                  </td>
                  <td className="text-start align-middle">{item.prod.price}</td>
                  <td className="text-center align-middle">{item.quantity}</td>
                  <td className="text-start align-middle">
                    {item.prod.price * item.quantity}
                  </td>
                  <td className="text-center align-middle">
                    <i
                      onClick={() => handleDelete(item.prod.id)}
                      class="far fa-trash-alt"
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CartTable;
