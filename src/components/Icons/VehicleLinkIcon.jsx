import React from 'react';
import { makeStyles, SvgIcon } from '@material-ui/core';

const styles = {
  root: {
    fill: "#ECEEF0"
  }
}

const useStyles = makeStyles(styles)

function VehicleLinkIcon(props) {
  const classes = useStyles(styles)
  return (
    <SvgIcon {...props} className={classes.root} viewBox="-1 -5 24 24" >
        <path d="M6.81818 7.5H4.63636C4.15883 7.5 3.68597 7.4224 3.24479 7.27164C2.8036 7.12087 2.40273 6.8999 2.06507 6.62132C1.38312 6.05871 1 5.29565 1 4.5C1 3.70435 1.38312 2.94129 2.06507 2.37868C2.74702 1.81607 3.67194 1.5 4.63636 1.5H6.81818M6.09091 4.5H11.9091M11.1818 1.5H13.3636C13.8412 1.5 14.314 1.5776 14.7552 1.72836C15.1964 1.87913 15.5973 2.1001 15.9349 2.37868C16.2726 2.65726 16.5405 2.98797 16.7232 3.35195C16.9059 3.71593 17 4.10603 17 4.5C17 4.89397 16.9059 5.28407 16.7232 5.64805C16.5405 6.01203 16.2726 6.34274 15.9349 6.62132C15.5973 6.8999 15.1964 7.12087 14.7552 7.27164C14.314 7.4224 13.8412 7.5 13.3636 7.5H11.1818V1.5Z" stroke="#25345C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </SvgIcon>
  );
}

export default VehicleLinkIcon;