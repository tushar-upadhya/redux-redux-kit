import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/action/action";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products); // select only the products
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error:", err.message);
      });
    dispatch(setProducts(response.data)); // dispatch an action to save the products in the store
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products.map((product) => (
    <ProductComponent key={product.id} product={product} />
  )); // render a ProductComponent for each product
};

export default ProductListing;
