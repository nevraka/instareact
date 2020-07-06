import React, { useState, useEffect } from "react";
import Timeline from "./Timeline";
import unsplash from "../api/unsplash";
import Header from "./Header";
import AccountLine from "./AccountLine";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import "./app.css";
import UserContext from "./UserContext";

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

  useEffect(() => {
    onSearch("random");
  }, []);

  const Home = () => (
    <div>
      <Header onSearch={onSearch} />
      <div className="full">
        <Timeline images={images} />
        <AccountLine />
      </div>
    </div>
  );

  const LightBox = () => {
    let { id } = useParams();

    const foundImage = images.find((image) => {
      return image.id === id;
    });

    return (
      <div className="light-box">
        {foundImage && <img src={foundImage.urls.regular} />}
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
            <Route path="/" component={Home} exact />
          </Switch>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
