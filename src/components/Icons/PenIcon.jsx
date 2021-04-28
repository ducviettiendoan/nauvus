import React from 'react';
import { SvgIcon } from '@material-ui/core';

function PenIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 -2 18 20">
      <svg width="18" height="18" viewBox="0 2 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5909 2.58492C12.7763 2.39948 12.9964 2.25238 13.2387 2.15201C13.481 2.05165 13.7407 2 14.003 2C14.2652 2 14.5249 2.05165 14.7672 2.15201C15.0095 2.25238 15.2296 2.39948 15.4151 2.58492C15.6005 2.77036 15.7476 2.99051 15.848 3.2328C15.9483 3.47509 16 3.73478 16 3.99703C16 4.25928 15.9483 4.51897 15.848 4.76126C15.7476 5.00355 15.6005 5.2237 15.4151 5.40914L5.88331 14.9409L2 16L3.05909 12.1167L12.5909 2.58492Z" stroke="#25345C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </SvgIcon>
  );
}

export default PenIcon;