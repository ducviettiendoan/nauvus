import React from 'react';
import {SvgIcon} from '@material-ui/core';

function DocumentIcon(props) {
  return (
    <SvgIcon width="18" height="16" viewBox="0 0 18 16"  {...props}>
      <svg  fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 13.4444C17 13.857 16.8314 14.2527 16.5314 14.5444C16.2313 14.8361 15.8243 15 15.4 15H2.6C2.17565 15 1.76869 14.8361 1.46863 14.5444C1.16857 14.2527 1 13.857 1 13.4444V2.55556C1 2.143 1.16857 1.74733 1.46863 1.45561C1.76869 1.16389 2.17565 1 2.6 1H6.6L8.2 3.33333H15.4C15.8243 3.33333 16.2313 3.49722 16.5314 3.78894C16.8314 4.08067 17 4.47633 17 4.88889V13.4444Z" stroke={props.color || "#25345C"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </SvgIcon>
  );
}

export default DocumentIcon;