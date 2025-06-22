import React, { useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { useContext } from "react";
import { useEffect } from "react";
import Loader from "./Loader";
// import axios from '../utils/axios'

function Home() {
  const [product] = useContext(ProductContext);

  const { search } = useLocation();
  let category = decodeURIComponent(search.split("=")[1]);

  

  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    if (!filteredProducts || category == "undefined") {
      // setFilteredProducts(product);
      setFilteredProducts(
        // JSON.parse(localStorage.getItem("product"))
        product
      );
    }

    if (category != "undefined") {
      // getProductCategory()
      setFilteredProducts(
        JSON.parse(localStorage.getItem("product")).filter(
          (p) => p.category == category
        )
      );
      // console.log(filteredProducts);
    }
  }, [category, product]);

  return (
    <div className="md:flex w-full overflow-hidden pb-10">
      <Nav />


      <div className="w-full md:w-[85%] h-full p-10 flex flex-wrap justify-center md:justify-start overflow-x-hidden overflow-y-auto bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-xl shadow-inner">
        {filteredProducts ? (
          filteredProducts.map((item) => (
            <Link
              to={`/details/${item.id}`}
              key={item.id}
              className="group p-4 mr-4 mb-4 w-[18%] min-w-[180px] h-[32vh] bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col justify-between items-center"
            >
              <div
                className="w-full h-[70%] bg-contain bg-no-repeat bg-center rounded-md transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <h1
                className="text-sm font-medium text-center text-gray-700 group-hover:text-blue-500 transition-colors duration-200 line-clamp-2"
                title={item.title}
              >
                {item.title}
              </h1>
            </Link>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default Home;
