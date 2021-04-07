import React from 'react';
import { makeStyles, SvgIcon } from '@material-ui/core';

const styles = {
  root: {
    fill: "#ECEEF0"
  }
}

const useStyles = makeStyles(styles)

function VehicleUserIcon(props) {
  const classes = useStyles(styles)
  return (
    <SvgIcon fill="#FFFFFF" {...props} className={classes.root} viewBox="-3 -5 24 24" >
      <path d="M13 15.5V13.9444C13 13.1193 12.6839 12.328 12.1213 11.7446C11.5587 11.1611 10.7956 10.8333 10 10.8333H4C3.20435 10.8333 2.44129 11.1611 1.87868 11.7446C1.31607 12.328 1 13.1193 1 13.9444V15.5M10 4.61111C10 6.32933 8.65685 7.72222 7 7.72222C5.34315 7.72222 4 6.32933 4 4.61111C4 2.89289 5.34315 1.5 7 1.5C8.65685 1.5 10 2.89289 10 4.61111Z" stroke="#25345C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </SvgIcon>
  );
}

export default VehicleUserIcon;