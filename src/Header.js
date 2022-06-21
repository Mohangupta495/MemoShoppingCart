import React from "react";
import { Link } from "react-router-dom";
import Logo from "../public/logo.png";
import {
  Navbar,
  Container,
  Form,
  Dropdown,
  Nav,
  Badge,
  Button
} from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "./context/Context";
import "./header.css";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productState: { searchQurey },
    productDispatch
  } = CartState();
  return (
    <Navbar
      sticky="top"
      variant="dark"
      style={{ height: 80, background: "#01404a" }}
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={Logo}
              alt="img"
              style={{ width: "60px", height: "60px" }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Text>
          <Form.Control
            style={{ width: 500 }}
            placeholder="search for a product"
            className="me-auto search"
            onChange={(e) => {
              console.log(e.target.value);
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value
              });
            }}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle>
              <BsFillCartFill color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: 370, marginLeft: -170 }}>
              {cart !== " " ? (
                <div>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.images}
                        className="cartItemImg"
                        alt={prod.title}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.title}</span>
                        <span>₹ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </div>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
