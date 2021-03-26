import React from 'react';
import {SvgIcon} from '@material-ui/core';

function CloseIcon(props) {
  return (
    <SvgIcon viewBox="1 -5 6 18" {...props}>
      <path d="M7 1.5L1 7.5M1 1.5L7 7.5" stroke="#C4C4C4" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </SvgIcon>
  );
}

export default CloseIcon;