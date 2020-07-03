import React, { useState, useEffect } from "react";
import Timeline from "./Timeline";
import unsplash from "../api/unsplash";
import SearchBox from "./SearchBox";
import Header from "./Header";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";

const App = () => {
  const [images, setImages] = useState([]);
  const [profile, setProfile] = useState({});

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
      <Header onSearch={onSearch} profile={profile} setProfile={setProfile} />
      <Timeline images={images} />
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
  );
};

export default App;
