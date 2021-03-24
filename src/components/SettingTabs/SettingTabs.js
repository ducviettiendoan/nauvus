import { Tabs } from "@material-ui/core";
import React from "react";
import { Tabs, Typography } from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";

export default function SettingTabs() {
  return (
    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="" textColor="" variant="scrollable" position="static">
      <Button variant="contained"
        color="secondary"
        className={classes.btnTabs} label="By Accet" {...a11yProps(0)}>By Accet</Button>
      <Button variant="contained"
        color="secondary"
        className={classes.btnTabs} label="By Location" {...a11yProps(1)} disabled={true} >By Location</Button>
      <Button variant="contained"
        color="secondary"
        className={classes.btnTabs} label="By Recurring Route" {...a11yProps(2)} disabled={true} >By Recurring Route</Button>
    </Tabs>
  )
}