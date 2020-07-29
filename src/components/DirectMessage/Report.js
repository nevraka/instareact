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
      <ul className="ui middle aligned selection list report-options">
        <div className="item-css">
          <div class="active item">
            I just don't like it
            <i className="chevron right icon right-icon"></i>
          </div>
          <div class="active item">
            It's spam
            <i className="chevron right icon right-icon"></i>
          </div>
          <div class="active item">
            Nudity or pornography
            <i className="chevron right icon right-icon"></i>
          </div>
          <div class="active item">
            Hate speech or symbol
            <i className="chevron right icon right-icon"></i>
          </div>
          <div class="active item">
            Other
            <i className="chevron right icon right-icon"></i>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Report;
