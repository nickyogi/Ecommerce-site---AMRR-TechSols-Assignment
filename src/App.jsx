import React from "react";
import Home from "./Components/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import Edit from "./Components/Edit";
import AddItems from "./Components/AddItems";
import Enquire from "./Components/Enquire";

function App() {
  const { search, pathname } = useLocation();


  return (
    <div className="h-screen w-screen flex ">
      {(pathname !== "/" && pathname !== "/view-items" && !pathname.includes("enquire") || search.length > 0) && (
        <Link
          to="/view-items"
          className="text-red-300 font-semibold absolute z-50 left-[3%] md:left-[18%] top-[2%]"
        >
          <span className="hidden md:inline">Home</span>
          
            <svg
              className="h-6 w-6 md:hidden cursor-pointer text-gray-700 hover:text-[#6556CD]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z"></path>
            </svg>
          
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewitems" element={<Home />} />
        <Route path="/additem" element={<AddItems />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/enquire/:id" element={<Enquire />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
