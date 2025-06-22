import React, { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddItems() {
  const navigate = useNavigate();

  const [product, setProduct] = useContext(ProductContext);

  const [extraInputs, setExtraInputs] = useState([]);

  const [image, setimage] = useState("");
  const [additionalImages, setAdditionalImages] = useState([]);
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const handleInputAdder = () => {
    setExtraInputs((prev) => [...prev, ""]);
    setAdditionalImages((prev) => [...prev, ""]);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      image.trim().length < 5 ||
      additionalImages.some((item) => {
        return item.trim().length < 5;
      }) ||
      title.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Enter product details properly");
      return;
    }

    

    const productDetails = {
      id: nanoid(),
      image,
      additionalImages,
      extraInputs,
      title,
      category,
      price,
      description,
    };

    console.log(productDetails);

    setProduct([...product, productDetails]);

    setimage("");
    setExtraInputs([]);
    settitle("");
    setcategory("");
    setprice("");
    setdescription("");

    localStorage.setItem(
      "product",
      JSON.stringify([...product, productDetails])
    );

    toast.success("Product Added Successfully");

    navigate("/");
  };
  

  return (
    <div className="w-full overflow-x-hidden">
      <form
      action="/blank"
      onSubmit={formSubmitHandler}
      className="w-[90%] md:w-1/2  flex flex-col items-center  mx-auto mt-16"
    >
      <h1 className="text-2xl w-full my-2 font-semibold text-start ">
        Add New Item
      </h1>
      <input
        onChange={(e) => setimage(e.target.value)}
        value={image}
        type="url"
        className="bg-zinc-100 my-1 w-full px-5 py-1 text-xl"
        placeholder="Enter item image url"
      />
      {extraInputs.map((item, i) => (
        <input
          key={i}
          onChange={(e) => {
            setAdditionalImages((prev) => {
              const updated = [...prev];         
              updated[i] = e.target.value;       
              return updated;                    
            });
        
          }}
          value={additionalImages[i]}
          type="url"
          className="bg-zinc-100 my-1 w-full px-5 py-1 text-xl"
          placeholder="Enter additional image url"
        />
      ))}
      <div
        className="w-full border flex justify-center cursor-pointer border-blue-100 rounded px-4 py-2 text-blue-300 hover:text-blue-500"
        onClick={handleInputAdder}
      >
        Add Additional Images
      </div>
      <input
        onChange={(e) => settitle(e.target.value)}
        value={title}
        type="text"
        className="bg-zinc-100 my-1 w-full px-5 py-1 text-xl"
        placeholder="Item name"
      />

      <div className="w-full my-1 flex justify-between">
        <input
          onChange={(e) => setcategory(e.target.value)}
          value={category}
          type="text"
          className="bg-zinc-100 w-[48%] px-5 py-1 text-xl"
          placeholder="category"
        />
        <input
          onChange={(e) => setprice(e.target.value)}
          value={price}
          type="number"
          className="bg-zinc-100 w-[48%] px-5 py-1 text-xl"
          placeholder="price"
        />
      </div>

      <textarea
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        className="bg-zinc-100 my-1 w-full px-5 py-1 min-h-32 text-xl"
        placeholder="Enter item description ...."
        rows="5"
      ></textarea>

      <div className="w-full">
        <button
          className="border border-blue-100 rounded px-4 py-2 text-blue-300 hover:text-blue-500 mb-16"
          href="/AddItems"
        >
          Add New item
        </button>
      </div>
    </form>
    </div>
  );
}

export default AddItems;
