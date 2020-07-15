import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import unsplash from '../api/unsplash';

const ImagePage = ({ images }) => {
  let { id } = useParams();

  const [image, setImage] = useState(null);

  useEffect(() => {
    const request = async () => {
      const result = await unsplash.get(`/photos/${id}`);
      setImage(result.data);
    };
    request();
  }, [setImage, id]);

  return (
    <div className="light-box">
      {image && <img src={image.urls.regular} alt="" />}
    </div>
  );
};

export default ImagePage;
