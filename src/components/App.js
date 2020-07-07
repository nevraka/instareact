import React, { useState, useEffect } from "react";
import unsplash from "../api/unsplash";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import "./app.css";
import UserContext from "./UserContext";
import HomePage from "./HomePage";

const App = () => {
  const [images, setImages] = useState([]);
  const [profile, setProfile] = useState({});

  const user = {
    profile,
    setProfile,
  };

  const onSearch = async (phrase) => {
    const result = await unsplash.get(
      `/search/photos?query=${phrase}&per_page=20`
    );
    setImages(result.data.results);
  };

  const LightBox = () => {
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

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/post/:id">
              <LightBox />
            </Route>
            <Route path="/" exact>
              <HomePage images={images} onSearch={onSearch} />
            </Route>
            <Route path="/search/:term">
              <HomePage images={images} onSearch={onSearch} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
