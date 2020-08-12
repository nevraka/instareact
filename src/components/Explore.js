import React, { useEffect, useState } from 'react';
import unsplash from '../api/unsplash';
import { Link } from 'react-router-dom';

const Explore = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      const result = await unsplash.get(`/search/photos?query=explore`);
      setImages(result.data.results);
    };
    callAPI();
  }, []);

  return (
    <div class="ui grid">
      <div class="row">
        <div class="ui segment ">
          {images.map((image) => (
            <Link to={`/post/${image.id}`}>
              <img src={image.urls.small} alt=""></img>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
