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
        <button class="ui basic button">I just don't like it</button>
        <button class="ui basic button">It's spam</button>
        <button class="ui basic button">Nudity or pornography</button>
        <button class="ui basic button">Hate speech or symbol</button>
        <button class="ui basic button">Other</button>
      </div>
    </div>
  );
};

export default Report;
