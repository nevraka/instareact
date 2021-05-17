import React, { useState } from 'react';
import unsplash from '../api/unsplash';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import UserContext from '../context/UserContext';
import HomePage from './HomePage/index';
import ImagePage from './ImagePage';
import DirectMessage from './DirectMessage';
import Header from './HomePage/Header';
import Explore from './Explore';
import 'github-fork-ribbon-css/gh-fork-ribbon.css';

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
        <Switch>
          <Route path="/post/:id">
            <ImagePage images={images} />
          </Route>
          <Route path="/" exact>
            <Header />
            <HomePage images={images} onSearch={onSearch} />
          </Route>
          <Route path="/search/:term">
            <Header />
            <HomePage images={images} onSearch={onSearch} />
          </Route>
          <Route path="/message/:userId">
            <Header />
            <DirectMessage />
          </Route>
          <Route path="/message/">
            <Header />
            <DirectMessage />
          </Route>
          <Route path="/explore/">
            <Header />
            <Explore />
          </Route>
        </Switch>
      </BrowserRouter>
      <a
        class="github-fork-ribbon right-bottom fixed"
        href="https://github.com/nevraka/instareact"
        data-ribbon="Fork me on GitHub"
        title="Fork me on GitHub"
      >
        Fork me on GitHub
      </a>
    </UserContext.Provider>
  );
};

export default App;
