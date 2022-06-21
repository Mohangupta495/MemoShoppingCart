import React from "react";
import { CartState } from "./context/Context";
import CartProduct from "./CartProduct";
import { useEffect, useState } from "react";
const Cartt = () => {
  const {
    state: { cart },
    dispatch
  } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
    );
  }, [cart]);
  return (
    <>
      <div className="mainCart">
        <div className="productContainerCart">
          {cart.map((prod) => {
            return <CartProduct prod={prod} key={prod.id} />;
          })}
        </div>
        <div class="menuBar">
          <h3>Total Price ₹{total}</h3>

          <h2>Desined By Mohan Gupta</h2>
        </div>
      </div>
    </>
  );
};

export default Cartt;
