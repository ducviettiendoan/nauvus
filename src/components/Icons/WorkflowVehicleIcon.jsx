import React from 'react';
import {SvgIcon} from '@material-ui/core';

function WorkflowVehicleIcon(props) {
  return (
    <SvgIcon width="17" height="14" viewBox="0 0 17 14"  {...props}>
      <svg  fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 7H1M16 7V11.5C16 11.8978 15.842 12.2794 15.5607 12.5607C15.2794 12.842 14.8978 13 14.5 13H2.5C2.10218 13 1.72064 12.842 1.43934 12.5607C1.15804 12.2794 1 11.8978 1 11.5V7M16 7L13.4125 1.8325C13.2883 1.58259 13.0969 1.37228 12.8597 1.22521C12.6226 1.07814 12.3491 1.00015 12.07 1H4.93C4.65094 1.00015 4.37745 1.07814 4.14028 1.22521C3.90312 1.37228 3.71168 1.58259 3.5875 1.8325L1 7M4 10H4.0075M7 10H7.0075" stroke={props.color || "#25345C"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </SvgIcon>
  );
}

export default WorkflowVehicleIcon;