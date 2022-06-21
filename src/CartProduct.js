import { CartState } from "./context/Context";
import { Card, Button, Form } from "react-bootstrap";
import "./cartProduct.css";
const CartProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch
  } = CartState();

  return (
    <>
      <Card
        style={{
          width: "18rem",
          borderRadius: "0px 0px 20px 20px",
          marginTop: "10px",
          background: "gainsboro"
        }}
      >
        <Card.Img variant="top" src={prod.images} style={{ height: "10rem" }} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>{prod.description}</Card.Text>
          <Card.Text>₹.{prod.price}</Card.Text>
          <Card.Text>Rateing :{prod.rating}</Card.Text>
          <Card.Text className="qtyContainer">
            Qty :
            <Form.Control
              className="qty"
              as="select"
              value={prod.qty}
              onChange={(e) => {
                dispatch({
                  type: "CHANGE_CART_QTY",
                  payload: { id: prod.id, qty: e.target.value }
                });
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Card.Text>

          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              style={{ borderRadius: "20px 0px 20px 20px" }}
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: prod });
              }}
            >
              Remove Cart
            </Button>
          ) : (
            <Button
              variant="warning"
              style={{ borderRadius: "20px 0px 20px 20px" }}
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: prod });
              }}
            >
              Add to Cart
            </Button>
          )}
          <Button
            variant="info"
            style={{ borderRadius: "20px 0px 20px 20px", marginLeft: "30px" }}
          >
            Details
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default CartProduct;
