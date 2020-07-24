import React, { useState } from 'react';
import './index.css';

const Report = ({ setShowReport, currentUserName }) => {
  return (
    <div className="report">
      <h3 className="ui dividing header">
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
      <div className="ui relaxed list report-options">
        <a className="item">I just don't like it</a>
        <a className="item">It's spam</a>
        <a className="item">Nudity or pornography</a>
        <a className="item">Hate speech or symbol</a>
        <a className="item">Other</a>
      </div>
    </div>
  );
};

export default Report;
