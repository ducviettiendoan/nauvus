import React from 'react';
import {SvgIcon} from '@material-ui/core';

function TripDriverIcon(props) {
  return (
    <SvgIcon {...props} viewBox="-4 0 19 16">
      <svg width="14" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 15V13.4444C13 12.6193 12.6839 11.828 12.1213 11.2446C11.5587 10.6611 10.7956 10.3333 10 10.3333H4C3.20435 10.3333 2.44129 10.6611 1.87868 11.2446C1.31607 11.828 1 12.6193 1 13.4444V15M10 4.11111C10 5.82933 8.65685 7.22222 7 7.22222C5.34315 7.22222 4 5.82933 4 4.11111C4 2.39289 5.34315 1 7 1C8.65685 1 10 2.39289 10 4.11111Z"
          stroke="#25345C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </SvgIcon>
  );
}

export default TripDriverIcon;