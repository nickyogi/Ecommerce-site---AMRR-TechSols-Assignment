import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ProductContext } from "../utils/Context";
import Carousel from "./Carousel";

function ProductDetails() {
  const [product, setProduct] = useContext(ProductContext);

  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState(null);

  const [imageIndex, setImageIndex] = useState(null);

  const navigate = useNavigate();

  const handleImageClick = (index) => {
     setImageIndex(index);
  };

  const setImageScale = (index) => {
    setImageIndex(index);
  }

  useEffect(() => {
    if (!singleProduct) {
      setSingleProduct(
        JSON.parse(localStorage.getItem("product")).filter((p) => p.id == id)[0]
      );
    }
  }, []);

  const deleteHandler = (id) => {
    const filteredProducts = JSON.parse(localStorage.getItem("product")).filter(
      (p) => p.id !== id
    );

    setProduct(filteredProducts);
    localStorage.setItem("product", JSON.stringify(filteredProducts));
    toast.error("Product Deleted");
    navigate(-1);
  };


  return singleProduct ? (
    <div className="w-full h-full overflow-x-hidden md:overflow-hidden">
      <div className="w-[90%] md:w-full h-[70%] pt-16 mx-auto md:mx-0 md:px-48 flex items-center gap-12 justify-center">
        <div className="h-[300px] w-[300px] md:h-[350px] md:w-[350px] flex items-center justify-start ">
          <Carousel length={singleProduct?.additionalImages &&  singleProduct.additionalImages.length + 1} imageIndex={imageIndex} setImageScale={setImageScale}>
            <div className="h-[300px] w-[300px] md:h-[350px] md:w-[350px] flex items-center justify-center shrink-0">
            <img
            className="h-[75%] w-[75%] object-contain"
            src={singleProduct.image}
            alt="Error 404 image not found"
          />
            </div>
          
            { singleProduct.additionalImages ? singleProduct.additionalImages.map((item, index) => <div key={index} className="h-[300px] w-[300px] md:h-[350px] md:w-[350px] flex items-center justify-center shrink-0">
            <img
              className="h-[75%] w-[75%] object-contain"
              src={singleProduct.additionalImages[index]}
              alt="Error 404 image not found"
            /> </div>) : <div className="h-[350px] w-[350px] shrink-0">
            <img
              className="h-full w-full object-contain"
              src="/NoMoreImages.jpg"
              alt="Error 404 image not found"
            /> </div> }
           
          </Carousel>
        </div>
        <div className="hidden md:block content w-[40%] pr-[12%] h-auto">
          <div className="flex items-top -ml-10">
            <div
              onClick={() => navigate(-1)}
              className="-mt-1 text-blue-300 cursor-pointer hover:text-yellow-300"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-9 w-9 hover:scale-125"
                fill="currentColor"
              >
                <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
              </svg>
            </div>
            <h1 className="text-xl font-semibold">{singleProduct.title}</h1>
          </div>

          <h3 className="text-xs text-zinc-400 my-2">
            {singleProduct.category}
          </h3>
          <h2 className="text-xs text-red-400 mb-2">${singleProduct.price}</h2>
          <p className="text-xs mb-5">{singleProduct.description}</p>
          <Link
            to={`/edit/${singleProduct.id}`}
            className="mr-5 my-3 py-1 px-5 border rounded border-blue-200 text-blue-300 hover:border-blue-500 hover:text-blue-500"
          >
            Edit
          </Link>
          <Link
            onClick={() => deleteHandler(singleProduct.id)}
            className="mr-5 py-1 px-6 border rounded border-red-200 text-red-300 hover:border-red-500 hover:text-red-00"
          >
            Delete
          </Link>
          <br />
          <Link to={`/enquire/${singleProduct.id}`} className=" border-[1px] inline-block border-red-300 text-red-600 mt-5 py-2 px-16 font-semibold rounded-md hover:bg-red-500 hover:text-white duration-300">Enquire</Link>
        </div>
       
      </div>
      <div className="px-2 md:px-32">
        <div className="w-full flex mt-12 gap-5 overflow-x-auto overflow-y-hidden">
        <div className={"h-32 w-32 flex items-center overflow-hidden overflow-x-hidden justify-center cursor-pointer overflow-x-auto shrink-0 "}>
            <img
              onClick={() => handleImageClick(0)}
              className={`h-full w-full object-contain  ${(imageIndex == 0 ) ? 'scale-125 shadow-md transition-all duration-300' : "" }`}
              src={singleProduct.image}
              alt="Error 404 image not found"
            />
          </div>
          { singleProduct?.additionalImages &&  singleProduct.additionalImages.map((item, index) =>   <div className="h-32 w-32 cursor-pointer shrink-0">
            <img
              onClick={() => handleImageClick(index + 1)}
              className={`h-full w-full object-contain ${(imageIndex - 1  == index) ? 'scale-125 shadow-md transition-all duration-300' : "" } `}
              src={singleProduct.additionalImages[index]}
              alt="Error 404 image not found"
            />
          </div>)}
        
        </div>
        
      </div>
      <div className="md:hidden  content w-full px-10 mt-10 h-auto">
          <div className="flex items-top -ml-10">
            <div
              onClick={() => navigate(-1)}
              className="-mt-1 text-blue-300 cursor-pointer hover:text-yellow-300"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-9 w-9 hover:scale-125"
                fill="currentColor"
              >
                <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
              </svg>
            </div>
            <h1 className="text-xl font-semibold">{singleProduct.title}</h1>
          </div>

          <h3 className="text-xs text-zinc-400 my-2">
            {singleProduct.category}
          </h3>
          <h2 className="text-xs text-red-400 mb-2">${singleProduct.price}</h2>
          <p className="text-xs mb-5 ">{singleProduct.description}</p>
          <div className="flex justify-center items-center">

          <Link
            to={`/edit/${singleProduct.id}`}
            className="mr-5  py-1 w-[50%] flex justify-center border rounded border-blue-200 text-blue-300 hover:border-blue-500 hover:text-blue-500"
            >
            Edit
          </Link>
          <Link
            onClick={() => deleteHandler(singleProduct.id)}
            className=" py-1 w-[50%] flex justify-center border rounded border-red-200 text-red-300 hover:border-red-500 hover:text-red-00"
            >
            Delete
          </Link>
            </div>
          <br />
          <Link to={`/enquire/${singleProduct.id}`} className=" border-[1px] flex mb-10 justify-center border-red-300 text-red-600 py-2 w-full font-semibold rounded-md hover:bg-red-500 hover:text-white duration-300">Enquire</Link>
        </div>
      
    </div>
  ) : (
    <h1 className="text-4xl font-semibold mx-auto relative mt-[20%]">
      Loading...
    </h1>
  );
}

export default ProductDetails;
