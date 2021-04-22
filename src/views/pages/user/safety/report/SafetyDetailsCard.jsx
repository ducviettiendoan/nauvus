import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components

import Chip from "@material-ui/core/Chip";
import CloseIcon from "components/Icons/CloseIcon";
import Divider from "@material-ui/core/Divider";
import vehicleSidebarContentStyle from "../../overview/vehicle/vehicle-sidebar-content/vehicleSidebarContentStyle";

const useStyles = makeStyles(vehicleSidebarContentStyle);

export default function SafetyDetailsCard(props) {
  const classes = useStyles();

  const {content} = props;

  const renderItem = content.map((data,index) => {
    if (index >0 && index !== content.length - 1) {
      return (
        <div>
          <div className={classes.diagContent2}>
            <div className={classes.sensorDataTitle2}>
              {data.name}
            </div>
            <div className={classes.sensorData}>
              {data.value}
            </div>
          </div>
          <Divider variant="fullWidth" light/>
        </div>
      )
    }
    else if(index>0 && index === content.length - 1){
      return (
        <div className={classes.diagContent2}>
          <div className={classes.sensorDataTitle2}>
            {data.name}
          </div>
          <div className={classes.sensorData}>
            {data.value}
          </div>
        </div>
      )
    }
  })

  return (
    <div className={classes.chartContent}>
      <div className={classes.diagContent2}>
        <div className={classes.contentFont}>{content[0].name}</div>
        <Chip
          deleteIcon={<CloseIcon/>}
          label={'Mar 1 - Mar 31'}
          className={classes.chips}
        />
      </div>
      {renderItem}
    </div>
  );
}