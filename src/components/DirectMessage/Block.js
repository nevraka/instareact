import React from 'react';

const Block = ({ currentUserName, closeModalBlock }) => {
  return (
    <div className="block-page">
      <div class="ui dividing header block-header">
        Block&nbsp;{currentUserName}&nbsp;?
      </div>
      <div>
        They won't be able to find your profile, posts or story on Instagram.
        Instagram won't let them know you blocked them.
      </div>
      <div class="ui middle aligned divided list block-list">
        <button class="ui basic button">Block</button>
        <button class="ui basic button" onClick={closeModalBlock}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Block;
