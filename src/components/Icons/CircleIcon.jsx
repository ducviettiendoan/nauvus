import React from 'react';
import {SvgIcon} from '@material-ui/core';

function CircleIcon(props) {
  const {fill} = props
  return (
    <SvgIcon {...props} viewBox="0 -8 15 24">
      <svg width="8" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8.5C6.20914 8.5 8 6.70914 8 4.5C8 2.29086 6.20914 0.5 4 0.5C1.79086 0.5 0 2.29086 0 4.5C0 6.70914 1.79086 8.5 4 8.5Z" fill={fill}/>
      </svg>
    </SvgIcon>
  );
}

export default CircleIcon;