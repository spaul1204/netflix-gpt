import React, { useState } from "react";

const Carousel = () => {
  const images = [
    "https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288869.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725580800&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288883.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725580800&semt=ais_hybrid",
    "https://i.pinimg.com/236x/f6/99/82/f699821d0cb953967f608509ced46a8b.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8m8o2Uk5R4XLWALmd4Zs5dk7azbRL8G5kdLndPZo_J7_Ab0i9YRdN8aNaro6dwIo5ymc&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ875IjoxLi3QTarSWDLQUonDGPOBaSMXIDQ&s",
  ];
  const [activeImage, setActiveImage] = useState(0);
  const previousBtnHandler = () => {
    if (activeImage === 0) {
      setActiveImage(images.length - 1);
    } else {
      setActiveImage(activeImage - 1);
    }
  };
  const nextBtnHandler = () => {
    if (activeImage === images.length - 1) {
      setActiveImage(0);
    } else {
      setActiveImage(activeImage + 1);
    }
  };

  return (
    <div className="flex align-middle justify-between ">
      <button onClick={previousBtnHandler}>Previous</button>
      <div className="flex  justify-center">
        <img
          src={images[activeImage]}
          className="w-[700px] h-15 object-contain"
        />{" "}
      </div>
      <button onClick={nextBtnHandler}>Next</button>
    </div>
  );
};

export default Carousel;
