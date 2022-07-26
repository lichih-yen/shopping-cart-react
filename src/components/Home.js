import { CartState } from "../context/Context";
import Product from "./Product";
import Filters from "./Filters";
import "./styles.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  console.log(products);

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((prod) => {
          return <Product prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
