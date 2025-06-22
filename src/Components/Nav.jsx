import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";

function Nav() {
  const [product] = useContext(ProductContext);

  const [nav, setNav] = useState(false);

  let distnt_category =
    product && product.reduce((acc, curr) => [...acc, curr.category], []);

  distnt_category = [...new Set(distnt_category)];
  // console.log(distnt_category);

  let color = () => {
    return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)},0.5)`;
  };

  // console.log(color());

  return (
    <nav
      className={`md:w-[15%] ${
        nav ? "h-auto" : ""
      } md:h-screen transition-all duration-500 flex flex-col items-center bg-zinc-100 pt-5`}
    >
      <Link
        className="border border-blue-200 rounded px-16 py-2 md:mb-0 text-blue-300  hover:text-zinc-100 hover:bg-blue-300 duration-300"
        to="/add-items"
      >
        Add Item
      </Link>

      <div
        className={`
    w-full px-5 overflow-hidden transition-all duration-500 md:block  md:h-full md:opacity-100
    ${
      nav
        ? "max-h-[500px] opacity-100 scale-100"
        : "max-h-0 md:max-h-full opacity-0 md:opacity-100 scale-95 md:scale-100"
    }
  `}
      >
        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl mb-5">Category Filter</h1>
        <div className="w-[80%]">
          {distnt_category.map((category, index) => (
            <Link
              to={`/?category=${category}`}
              onClick={() => setNav(false)}
              key={index}
              className=" flex items-center mb-3 text-s"
            >
              <span
                style={{ backgroundColor: color() }}
                className="h-3 w-3 rounded-full mr-2"
              ></span>
              {category}
            </Link>
          ))}
        </div>
      </div>

      <span
        onClick={() => setNav((prev) => !prev)}
        className={`px-2 py-1 md:hidden ${
          nav ? "rotate-180" : ""
        } transition-all duration-300`}
      >
        <svg
          className="w-8 h-8 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.9679 9.11619L3.03212 10.8838L12 15.6315Z"></path>
        </svg>
      </span>
    </nav>
  );
}

export default Nav;
