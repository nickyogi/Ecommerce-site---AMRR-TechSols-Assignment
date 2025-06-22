import React, { useEffect, useState } from "react";
function Carousel({ children: slides, length = 2, imageIndex = 0, setImageScale}) {

  const [curr, setCurr] = useState(imageIndex);
  

  const prev = () => {
    setCurr((curr) => {
      const newCurr = curr === 0 ? length - 1 : curr - 1;
      setImageScale(newCurr); // now both states use the same value
      return newCurr;
    });
  };


  const next = () => {
    setCurr((curr) => {
       const newCurr = curr === length - 1 ? 0 : curr + 1;
       setImageScale(newCurr);
       return newCurr;
    });
  };

  useEffect(() => {
    setCurr(imageIndex);  
  }, [imageIndex])
  

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className="rounded-full p-1 shadow bg-zinc-200 text-gray-800 hover:bg-zinc-300"
          onClick={prev}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
          </svg>
        </button>
        <button
          className="rounded-full p-1 shadow bg-zinc-200 text-gray-800 hover:bg-zinc-300"
          onClick={next}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
