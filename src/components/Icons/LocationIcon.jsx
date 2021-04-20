import React from 'react';
import {SvgIcon} from '@material-ui/core';

function LocationIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 14 16">
      <svg width="14" height="16"  fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 6.72727C13 11.1818 7 15 7 15C7 15 1 11.1818 1 6.72727C1 5.20831 1.63214 3.75155 2.75736 2.67748C3.88258 1.60341 5.4087 1 7 1C8.5913 1 10.1174 1.60341 11.2426 2.67748C12.3679 3.75155 13 5.20831 13 6.72727Z"
          stroke={props.color || "#25345C"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path
          d="M7 8.63636C8.10457 8.63636 9 7.78163 9 6.72727C9 5.67291 8.10457 4.81818 7 4.81818C5.89543 4.81818 5 5.67291 5 6.72727C5 7.78163 5.89543 8.63636 7 8.63636Z"
          stroke={props.color || "#25345C"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </SvgIcon>
  );
}

export default LocationIcon;