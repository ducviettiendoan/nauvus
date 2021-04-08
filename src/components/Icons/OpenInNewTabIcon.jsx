import React from 'react';
import { makeStyles, SvgIcon } from "@material-ui/core";

const styles = {
  root: {
    fill: "#ECEEF0"
  }
}

const useStyles = makeStyles(styles)

function OpenInNewTabIcon(props) {
  const classes = useStyles(styles)
  return (
    <SvgIcon fill="none" {...props} style={{ fill: "#FFFFFF" }} className={classes.root} viewBox="0 0 18 18">
      <path d="M14.3333 9.88889V15.2222C14.3333 15.6937 14.146 16.1459 13.8126 16.4793C13.4792 16.8127 13.0271 17 12.5556 17H2.77778C2.30628 17 1.8541 16.8127 1.5207 16.4793C1.1873 16.1459 1 15.6937 1 15.2222V5.44444C1 4.97295 1.1873 4.52076 1.5207 4.18737C1.8541 3.85397 2.30628 3.66667 2.77778 3.66667H8.11111M11.6667 1H17M17 1V6.33333M17 1L7.22222 10.7778" stroke="#25345C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </SvgIcon>
  );
}

export default OpenInNewTabIcon;

