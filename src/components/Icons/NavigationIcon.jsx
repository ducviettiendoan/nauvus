import React from 'react';
import {SvgIcon} from '@material-ui/core';

function NavigationIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 15 20" >
      <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 8.63158L16 2L9.36842 16L7.89474 10.1053L2 8.63158Z" stroke="#27AE60" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </SvgIcon>
  );
}

export default NavigationIcon;