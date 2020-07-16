import React, { useState, useEffect } from 'react';
import './index.css';
import unsplash from '../../api/unsplash';

const PeopleList = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const callAPI = async () => {
      const result = await unsplash.get(
        `/search/photos?query=people&per_page=20`
      );
      setUsers(result.data.results);
    };
    callAPI();
  }, []);

  return (
    <div className="list-ui">
      <div class="ui middle aligned divided list">
        {users &&
          users.map((user) => {
            return (
              <div class="item">
                <div class="right floated content"></div>
                <img
                  class="ui avatar image"
                  src="/images/avatar2/small/lena.png"
                  alt=""
                />
                <div class="content">{user.user.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PeopleList;
