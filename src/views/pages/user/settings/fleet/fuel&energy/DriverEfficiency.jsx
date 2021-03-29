import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";

import Button from "components/CustomButtons/Button.js";
import AddOutlined from "@material-ui/icons/AddOutlined";

import EditIcon from "components/Icons/EditIcon";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";

const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0"
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem"
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px"
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  },
  
  textSub: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '25px',
    marginLeft: '24px',
    color: "#25345C",
  },
  
  topHeaderButton: {
    textAlign: "right",
    marginTop: -50
  },
};

const dumpData = [
    { nameProfiles: 'Default organization profile', vehicles: "1 Vehicle" },
    { nameProfiles: 'Default organization profile', vehicles: "1 Vehicle" },
    { nameProfiles: 'Default organization profile', vehicles: "1 Vehicle" },
    { nameProfiles: 'Default organization profile', vehicles: "1 Vehicle" },
    { nameProfiles: 'Default organization profile', vehicles: "1 Vehicle" },
  
  ];

const useStyles = makeStyles(styles);

export default function DriverEfficiency() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const formatNameProfiles = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatVehicles = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const addActionButton = () => {
    return (
      <div className={classes.actionIcon}>
        <Button justIcon color="twitter" simple>
          <EditIcon className={classes.iconButton} style={{ color: "#ffffff", width: '22px', height: '22px' }} />
        </Button>
      </div>
    )
  }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
            <GridItem xs={12} sm={12} md={12} xl={12} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-2"
                    startIcon={<AddOutlined/>}
                  >
                    Create profile
                  </Button>
                  <Button
                    round
                    className="btn-round-gray mr-4"
                    startIcon={<AddOutlined/>}
                  >
                    Essign vehicle
                  </Button>
                </GridItem>
              <Card testimonial>
              

                <ToolkitProvider
                    data={dumpData}
                    keyField="_id"
                    columns={[
                      {
                        dataField: "nameProfiles",
                        text: "Name Profiles",
                        formatter: formatNameProfiles
                      },
                      {
                        dataField: "vehicles",
                        text: "Vehicles",
                        formatter: formatVehicles
                      },
                      {
                        dataField: "actions",
                        text: "Actions",
                        formatter: addActionButton
                      },

                    ]}
                  >
                    {props => (
                      <div className="table table-settings">
                        <BootstrapTable
                          {...props.baseProps}
                          bootstrap4={true}
                          bordered={false}
                        />

                      </div>
                    )}
                  </ToolkitProvider>
                
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
