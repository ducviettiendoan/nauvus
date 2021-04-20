import React from 'react';
import {SvgIcon} from '@material-ui/core';

function TruckIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 22">
      <svg width="26" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.6364 13.0556V1.5H1V13.0556H14.6364ZM14.6364 13.0556H21V8.61111L18.2727 5.94444H14.6364V13.0556ZM7.36364 15.2778C7.36364 16.5051 6.3461 17.5 5.09091 17.5C3.83572 17.5 2.81818 16.5051 2.81818 15.2778C2.81818 14.0505 3.83572 13.0556 5.09091 13.0556C6.3461 13.0556 7.36364 14.0505 7.36364 15.2778ZM19.1818 15.2778C19.1818 16.5051 18.1643 17.5 16.9091 17.5C15.6539 17.5 14.6364 16.5051 14.6364 15.2778C14.6364 14.0505 15.6539 13.0556 16.9091 13.0556C18.1643 13.0556 19.1818 14.0505 19.1818 15.2778Z"
          stroke="#25345C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </SvgIcon>
  );
}

export default TruckIcon;