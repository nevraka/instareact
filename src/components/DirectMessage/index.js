import React from 'react';
import './index.css';
import '../HomePage/Timeline';
import PeopleList from './PeopleList';

const DirectMessage = () => {
  return (
    <div className="message-box">
      <div className="ui two column grid direct">
        <div className="six wide column">
          <div className="ui vertical fluid menu">
            <div className="header item">
              Direct
              <i class="edit outline icon"></i>
            </div>
          </div>
          <div>
            <PeopleList />
          </div>
        </div>
        <div className="ten wide column">
          <div className="ui vertical fluid menu"></div>
        </div>
      </div>
    </div>
  );
};

export default DirectMessage;
