import React from 'react';
import {SvgIcon} from '@material-ui/core';

function AddIcon(props) {
  return (
    <SvgIcon width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
      <svg  xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1V13M1 7H13" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </SvgIcon>

  );
}

export default AddIcon;