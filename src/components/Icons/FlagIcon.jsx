

import React from 'react';
import {SvgIcon} from '@material-ui/core';

function FlagIcon(props) {
  return (
    <SvgIcon width="11" height="14" viewBox="0 0 11 14"  {...props}>
      <svg  fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 8.8C1 8.8 1.5625 8.2 3.25 8.2C4.9375 8.2 6.0625 9.4 7.75 9.4C9.4375 9.4 10 8.8 10 8.8V1.6C10 1.6 9.4375 2.2 7.75 2.2C6.0625 2.2 4.9375 1 3.25 1C1.5625 1 1 1.6 1 1.6V8.8ZM1 8.8V13" stroke={props.color || "#25345C"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </SvgIcon>
  );
}

export default FlagIcon;