import { CartState } from "../context/Context";
import Product from "./Product";
import Filters from "./Filters";
import "./styles.css";

const Home = () => {
  const {
    state: { products },
    productState: { sort, isStock, isFastDelivery, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!isStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (isFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => parseInt(prod.ratings) >= parseInt(byRating)
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <Product prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
