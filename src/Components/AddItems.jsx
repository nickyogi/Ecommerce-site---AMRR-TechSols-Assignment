import React, { useState, useContext, useEffect } from "react";
import { nanoid } from "nanoid";
import { ProductContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddItems() {
  const navigate = useNavigate();
  const [product, setProduct] = useContext(ProductContext);

  const [image, setImage] = useState("");
  const [additionalImages, setAdditionalImages] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleAddImageField = () => {
    setAdditionalImages((prev) => [...prev, ""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      image.trim().length < 5 ||
      additionalImages.some((img) => img.trim().length < 5) ||
      title.trim().length < 5 ||
      category.trim().length < 3 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Please fill out all fields correctly.");
      return;
    }

    const newProduct = {
      id: nanoid(),
      image,
      additionalImages,
      title,
      category,
      price,
      description,
    };

    const updatedProducts = [...product, newProduct];
    setProduct(updatedProducts);

    if (typeof window !== "undefined") {
      localStorage.setItem("product", JSON.stringify(updatedProducts));
    }

    // Reset form
    setImage("");
    setAdditionalImages([]);
    setTitle("");
    setCategory("");
    setPrice("");
    setDescription("");

    toast.success("Product Added Successfully");
    navigate("/");
  };

  return (
    <div className="w-full overflow-x-hidden">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-1/2 flex flex-col items-center mx-auto mt-16"
      >
        <h1 className="text-2xl w-full my-2 font-semibold text-start">
          Add New Item
        </h1>

        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          type="url"
          className="bg-zinc-100 my-1 w-full px-5 py-1 text-xl"
          placeholder="Enter item image URL"
        />

        {additionalImages.map((img, i) => (
          <input
            key={i}
            onChange={(e) => {
              const updated = [...additionalImages];
              updated[i] = e.target.value;
              setAdditionalImages(updated);
            }}
            value={img}
            type="url"
            className="bg-zinc-100 my-1 w-full px-5 py-1 text-xl"
            placeholder={`Additional image ${i + 1}`}
          />
        ))}

        <div
          className="w-full border flex justify-center cursor-pointer border-blue-100 rounded px-4 py-2 text-blue-300 hover:text-blue-500"
          onClick={handleAddImageField}
        >
          Add Additional Image
        </div>

        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="bg-zinc-100 my-1 w-full px-5 py-1 text-xl"
          placeholder="Item name"
        />

        <div className="w-full my-1 flex justify-between">
          <input
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            type="text"
            className="bg-zinc-100 w-[48%] px-5 py-1 text-xl"
            placeholder="Category"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            className="bg-zinc-100 w-[48%] px-5 py-1 text-xl"
            placeholder="Price"
          />
        </div>

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-zinc-100 my-1 w-full px-5 py-1 min-h-32 text-xl"
          placeholder="Enter item description ..."
          rows="5"
        ></textarea>

        <button
          type="submit"
          className="border border-blue-100 rounded px-4 py-2 text-blue-300 hover:text-blue-500 mb-16"
        >
          Add New Item
        </button>
      </form>
    </div>
  );
}

export default AddItems;
