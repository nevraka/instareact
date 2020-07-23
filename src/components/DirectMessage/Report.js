import React from 'react';
import './index.css';

const Report = ({ setShowReport }) => {
  return (
    <div>
      <div>
        <h3 class="ui top attached header report-header">
          Report
          <i
            class="x icon"
            onClick={() => {
              setShowReport(false);
            }}
          ></i>
        </h3>
      </div>
    </div>
  );
};

export default Report;
