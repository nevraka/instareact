import React from 'react';

const Block = ({ currentUserName }) => {
  return (
    <div>
      <div class="ui dividing header">Block&nbsp;{currentUserName}&nbsp;?</div>
      <div>
        They won't be able to find your profile, posts or story on Instagram.
        Instagram won't let them know you blocked them.
      </div>
      <div class="ui middle aligned divided list">
        <div class="item">Block</div>
        <div class="item">Cancel</div>
      </div>
    </div>
  );
};

export default Block;
