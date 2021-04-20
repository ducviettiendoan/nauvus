import React from 'react';
import { SvgIcon } from '@material-ui/core';

function GreenTickIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 12">
      <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 8L4 11L14 1" stroke="#27AE60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </SvgIcon>
  );
}

export default GreenTickIcon;