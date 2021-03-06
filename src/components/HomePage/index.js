import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Timeline from './Timeline';
import AccountLine from './AccountLine';
import './timeline.css';

const HomePage = ({ images, onSearch }) => {
  let { term } = useParams();

  useEffect(() => {
    onSearch(term || 'random');
  }, [term, onSearch]);

  return (
    <div>
      <div className="full">
        <Timeline images={images} />
        <AccountLine />
      </div>
    </div>
  );
};

export default HomePage;
