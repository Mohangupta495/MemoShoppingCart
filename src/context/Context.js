import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducer";
import productData from "../ProductData";

const Cart = createContext();

const Context = (props) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: productData,
    cart: []
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byRating: 0,
    searchQurey: ""
  });

  return (
    <>
      <Cart.Provider value={{ state, dispatch, productDispatch, productState }}>
        {props.children}
      </Cart.Provider>
    </>
  );
};
export default Context;
export const CartState = () => {
  return useContext(Cart);
};
