import "./filter.css";
import { Form, Button } from "react-bootstrap";
import Rating from "./Rating";
import { useState } from "react";
import { CartState } from "./context/Context";
const Filter = () => {
  const {
    productDispatch,
    productState: { byRating, sort, searchQurey }
  } = CartState();

  console.log(`${searchQurey}search`);
  return (
    <>
      <div className="filterMain">
        <div className="filters">
          <span className="title">Filter Products</span>
          <span>
            <Form.Check
              inline
              label="Ascending"
              name="group1"
              type="radio"
              id={`inline-1`}
              onChange={() =>
                productDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
              }
              checked={sort === "lowToHigh" ? true : false}
            />
          </span>
          <span>
            <Form.Check
              inline
              label="Descending"
              name="group1"
              type="radio"
              id={`inline-2`}
              onChange={() =>
                productDispatch({ type: "SORT_BY_PRICE", payload: "highTolow" })
              }
              checked={sort === "highTolow" ? true : false}
            />
          </span>
          <span>
            {" "}
            <label style={{ paddingRight: 10 }}>Rating: </label>
            <Rating
              style={{ cursor: "pointer" }}
              rating={byRating}
              onClick={(i) =>
                productDispatch({ type: "FILTER_BY_RATING", payload: i + 1 })
              }
            />
          </span>
          <Button
            variant="light"
            // onClick={}
            onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
          >
            Clear Filters
          </Button>
        </div>
      </div>
    </>
  );
};
export default Filter;
