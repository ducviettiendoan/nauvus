import React from 'react';
import { SvgIcon } from '@material-ui/core';

function SendIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 1L7.3 8.7M15 1L10.1 15L7.3 8.7M15 1L1 5.9L7.3 8.7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </SvgIcon>
  );
}

export default SendIcon;