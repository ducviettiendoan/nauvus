import React from 'react';
import { SvgIcon } from '@material-ui/core';

function DownloadIcon(props) {
  return (
    <SvgIcon {...props} viewBox="-2 -2 24 24">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 11V13.6667C15 14.0203 14.8595 14.3594 14.6095 14.6095C14.3594 14.8595 14.0203 15 13.6667 15H4.33333C3.97971 15 3.64057 14.8595 3.39052 14.6095C3.14048 14.3594 3 14.0203 3 13.6667V11M5.66667 7.66667L9 11M9 11L12.3333 7.66667M9 11V3" stroke="#25345C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </SvgIcon>
  );
}

export default DownloadIcon;