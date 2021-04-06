import React from 'react';
import {SvgIcon} from '@material-ui/core';

function CameraIcon(props) {
    return (
      <SvgIcon {...props}>
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3.21429L13.2727 7.5L19 11.7857V3.21429Z" stroke="#25345C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.6364 1.5H2.63636C1.73262 1.5 1 2.26751 1 3.21429V11.7857C1 12.7325 1.73262 13.5 2.63636 13.5H11.6364C12.5401 13.5 13.2727 12.7325 13.2727 11.7857V3.21429C13.2727 2.26751 12.5401 1.5 11.6364 1.5Z" stroke="#25345C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </SvgIcon>
    );
}

export default CameraIcon;