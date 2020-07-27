import React, { useState } from 'react';
import './index.css';

const Report = ({ setShowReport, currentUserName }) => {
  return (
    <div className="report">
      <h3 className="ui dividing header report-header">
        Report
        <i
          className="x icon x-icon"
          onClick={() => {
            setShowReport(false);
          }}
        ></i>
      </h3>
      <div>
        Choose a reason for reporting this account. We won't tell&nbsp;
        {currentUserName}&nbsp;who reported them.
      </div>
      <div className="ui link list report-options">
        <a class="active item">I just don't like it</a>
        <a class="active item">It's spam</a>
        <a class="active item">Nudity or pornography</a>
        <a class="active item">Hate speech or symbol</a>
        <a class="active item">Other</a>
      </div>
    </div>
  );
};

export default Report;
