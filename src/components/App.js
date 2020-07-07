import React, { useState } from "react";
import unsplash from "../api/unsplash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.css";
import UserContext from "../context/UserContext";
import HomePage from "./HomePage/index";
import ImagePage from "./ImagePage";

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

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/post/:id">
              <ImagePage images={images} />
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
