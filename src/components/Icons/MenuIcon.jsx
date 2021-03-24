import React from 'react';
import {SvgIcon} from '@material-ui/core';

function MenuIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0.5V1.5H12V0.5H0ZM0 4.5V5.5H12V4.5H0ZM0 8.5V9.5H12V8.5H0Z"/>
    </SvgIcon>
  );
}

export default MenuIcon;