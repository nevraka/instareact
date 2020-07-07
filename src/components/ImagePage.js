import React from "react";
import { useParams } from "react-router-dom";

const ImagePage = ({ images }) => {
  let { id } = useParams();

  const foundImage = images.find((image) => {
    return image.id === id;
  });

  return (
    <div className="light-box">
      {foundImage && <img src={foundImage.urls.regular} alt="" />}
    </div>
  );
};

export default ImagePage;
