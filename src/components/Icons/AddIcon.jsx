import React from 'react';
import {SvgIcon} from '@material-ui/core';

function AddIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 3V15M3 9H15" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </SvgIcon>
  );
}

export default AddIcon;