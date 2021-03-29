import React from 'react';
import {SvgIcon} from '@material-ui/core';

function CardIcon(props) {
    return (
      <SvgIcon {...props}>
       <path d="M1 6.25H19M2.63636 1H17.3636C18.2674 1 19 1.7835 19 2.75V13.25C19 14.2165 18.2674 15 17.3636 15H2.63636C1.73262 15 1 14.2165 1 13.25V2.75C1 1.7835 1.73262 1 2.63636 1Z" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
       </SvgIcon>
    );
}

export default CardIcon;