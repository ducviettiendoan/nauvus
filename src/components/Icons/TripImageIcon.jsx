import React from 'react';
import {SvgIcon} from '@material-ui/core';

function TripImageIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 19 18">
      <svg width="19" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 17C13.9183 17 17.5 13.4183 17.5 9C17.5 4.58172 13.9183 1 9.5 1C5.08172 1 1.5 4.58172 1.5 9C1.5 13.4183 5.08172 17 9.5 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.5 13.8C12.151 13.8 14.3 11.651 14.3 9C14.3 6.34903 12.151 4.2 9.5 4.2C6.84903 4.2 4.7 6.34903 4.7 9C4.7 11.651 6.84903 13.8 9.5 13.8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.5 10.6C10.3837 10.6 11.1 9.88366 11.1 9C11.1 8.11634 10.3837 7.4 9.5 7.4C8.61634 7.4 7.9 8.11634 7.9 9C7.9 9.88366 8.61634 10.6 9.5 10.6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </SvgIcon>
  );
}

export default TripImageIcon;