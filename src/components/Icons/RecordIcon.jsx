import React from 'react';
import {SvgIcon} from '@material-ui/core';

function RecordIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 -1 18 22">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 2.6H11.5C11.8978 2.6 12.2794 2.76857 12.5607 3.06863C12.842 3.36869 13 3.77565 13 4.2V15.4C13 15.8243 12.842 16.2313 12.5607 16.5314C12.2794 16.8314 11.8978 17 11.5 17H2.5C2.10218 17 1.72064 16.8314 1.43934 16.5314C1.15804 16.2313 1 15.8243 1 15.4V4.2C1 3.77565 1.15804 3.36869 1.43934 3.06863C1.72064 2.76857 2.10218 2.6 2.5 2.6H4M4.75 1H9.25C9.66421 1 10 1.35817 10 1.8V3.4C10 3.84183 9.66421 4.2 9.25 4.2H4.75C4.33579 4.2 4 3.84183 4 3.4V1.8C4 1.35817 4.33579 1 4.75 1Z"
          stroke="#25345C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </SvgIcon>
  );
}

export default RecordIcon;