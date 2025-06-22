import React from "react";
import axios from "./axios";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

function Context(props) {
  const [product, setProduct] = useState(() => {
    const saved = localStorage.getItem("product");
    return saved ? JSON.parse(saved) : null;
  });

  const getProducts = async () => {
      try {
          const {data} = await axios.get("/products");
            localStorage.setItem("product", JSON.stringify(data));
            setProduct(JSON.parse(localStorage.getItem("product")));
            // console.log("product is " + product);
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
    if (!product) {
      getProducts();
    }
    // console.log(product);
  }, [product]);


  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
