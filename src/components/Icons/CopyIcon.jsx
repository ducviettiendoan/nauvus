import React from 'react';
import {SvgIcon} from '@material-ui/core';

function CopyIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M3.7 13.075H2.8C2.32261 13.075 1.86477 12.8854 1.52721 12.5478C1.18964 12.2102 1 11.7524 1 11.275V3.175C1 2.69761 1.18964 2.23977 1.52721 1.90221C1.86477 1.56464 2.32261 1.375 2.8 1.375H10.9C11.3774 1.375 11.8352 1.56464 12.1728 1.90221C12.5104 2.23977 12.7 2.69761 12.7 3.175V4.075M9.1 7.675H17.2C18.1941 7.675 19 8.48089 19 9.475V17.575C19 18.5691 18.1941 19.375 17.2 19.375H9.1C8.10589 19.375 7.3 18.5691 7.3 17.575V9.475C7.3 8.48089 8.10589 7.675 9.1 7.675Z"  stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </SvgIcon>
  );
}

export default CopyIcon;