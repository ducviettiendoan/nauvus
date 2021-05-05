import React from 'react';
import {SvgIcon} from '@material-ui/core';

function WorkflowClockIcon(props) {
  return (
    <SvgIcon width="14" height="14" viewBox="0 0 14 14" {...props}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 3.4V7L9.4 8.2M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" stroke={props.color || "#25345C"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </SvgIcon>
  );
}

export default WorkflowClockIcon;