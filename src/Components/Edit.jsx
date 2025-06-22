import React, { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Edit() {
  const [product, setProduct] = useContext(ProductContext);

  const { id } = useParams();

  const navigate = useNavigate();

  // const [singleProduct, setSingleProduct] = useState(null)
  const [singleProduct, setSingleProduct] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
    description: "",
  });

  const changeHandler = (e) => {
    // console.log(e.target.name , e.target.value);
    setSingleProduct({ ...singleProduct, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    setSingleProduct(product.filter((p) => p.id == id)[0]);
  }, [id, product]);
  //   console.log(singleProduct);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      singleProduct.image.trim().length < 5 ||
      singleProduct.title.trim().length < 5 ||
      singleProduct.category.trim().length < 5 ||
      singleProduct.price.trim().length < 1 ||
      singleProduct.description.trim().length < 5
    ) {
      alert("Enter product details properly");
      return;
    }

    const pi = product.findIndex((p) => p.id == id);
    const copyData = [...product];
    copyData[pi] = { ...product[pi], ...singleProduct };

    console.log(singleProduct, pi);
    

    setProduct(copyData);

    localStorage.setItem("product", JSON.stringify(copyData));
    // console.log(copyData);
    toast.success("Product Edited");

    navigate(-1);
  };

  return (
    <form
      action="/blank"
      onSubmit={formSubmitHandler}
      className="w-[90%] md:w-1/2 flex flex-col items-center  mx-auto mt-16 text-gray-600"
    >
      <h1 className="text-2xl w-full my-2 font-semibold text-start ">
        Edit Product
      </h1>
      <input
        // onChange={(e) => setimage(e.target.value)}
        name="image"
        onChange={changeHandler}
        value={singleProduct && singleProduct.image}
        type="url"
        className="bg-zinc-100 my-1 w-full px-5 py-1 text-xl"
        placeholder="Enter product image url"
      />
      <input
        // onChange={(e) => settitle(e.target.value)}
        name="title"
        onChange={changeHandler}
        value={singleProduct && singleProduct.title}
        type="text"
        className="bg-zinc-100 my-1 w-full px-5 py-1 text-xl"
        placeholder="Enter product name"
      />

      <div className="w-full my-1 flex justify-between">
        <input
          // onChange={(e) => setcategory(e.target.value)}
          name="category"
          onChange={changeHandler}
          value={singleProduct && singleProduct.category}
          type="text"
          className="bg-zinc-100 w-[48%] px-5 py-1 text-xl"
          placeholder="Enter product category"
        />
        <input
          // onChange={(e) => setprice(e.target.value)}
          name="price"
          onChange={changeHandler}
          value={singleProduct && singleProduct.price}
          type="number"
          className="bg-zinc-100 w-[48%] px-5 py-1 text-xl"
          placeholder="Enter product price"
        />
      </div>

      <textarea
        // onChange={(e) => setdescription(e.target.value)}
        name="description"
        onChange={changeHandler}
        value={singleProduct && singleProduct.description}
        className="bg-zinc-100 my-1 w-full px-5 py-1 text-xl"
        placeholder="Enter product description ...."
        rows="5"
      ></textarea>

      <div className="w-full">
        <button
          className="border border-blue-100 rounded px-4 py-2 text-blue-300 hover:text-blue-500"
          href="/create"
        >
          Edit Product
        </button>
      </div>
    </form>
  );
}

export default Edit;
