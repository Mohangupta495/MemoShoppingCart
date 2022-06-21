import { useContext } from "react";
import { CartState } from "./context/Context";
import Filter from "./Filter";
import Products from "./Products";
import "./home.css";

const Home = () => {
  const {
    state: { products },
    productState: { byRating, sort, searchQuery }
  } = CartState();

  const transformProducts = () => {
    let sortProducts = products;
    if (sort) {
      sortProducts = sortProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (byRating) {
      sortProducts = sortProducts.filter((prod) => prod.rating >= byRating);
    }
    if (searchQuery) {
      sortProducts = sortProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      );
    }
    return sortProducts;
  };
  return (
    <>
      <div className="home">
        <Filter />
        <div className="productContainer">
          {transformProducts().map((item) => {
            return <Products prod={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
