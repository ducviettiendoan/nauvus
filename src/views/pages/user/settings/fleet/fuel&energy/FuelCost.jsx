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
import CardBody from "components/Card/CardBody.js";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";

import CostIcon from "components/Icons/CostIcon";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

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
  textDate: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    color: '#25345C',
    marginLeft: '24px'
  },
  
  textSub: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '25px',
    marginLeft: '24px',
    color: "#25345C",
  },
  textFieldCost: {
    textAlign: "left",
    padding: "0 !important",
    marginTop: 14
  },
  textInputRoot: {
    fontWeight: '700',
    fontSize: '14px',
    color: "#25345C",
  },
  textFieldRoot: {
    fontWeight: '400',
    fontSize: '14px',
    color: "#C4C4C4",
    lineHeight: "21px",
  },
  fuelCostTitle: {
    fontWeight: '700',
    fontSize: '14px',
    color: "#25345C",
    textAlign: "left",
    padding: "0 !important",
    marginTop: 20
  }
};

const dumpData = [
    { date: '03/18/2021', cost: "1 Vehicle" },
    { date: '03/18/2021', cost: "1 Vehicle" },
    { date: '03/18/2021', cost: "1 Vehicle" },
    { date: '03/18/2021', cost: "1 Vehicle" },
    { date: '03/18/2021', cost: "1 Vehicle" },
    { date: '03/18/2021', cost: "1 Vehicle" },
  
  ];

const useStyles = makeStyles(styles);

export default function FuelCost() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const formatDate = (cell, row) => {
    return <>
      <div className={classes.textDate}>{cell}</div>
    </>
  }

  const formatCost = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card testimonial>
                <CardBody>
                    <GridItem xs={12} sm={12} md={12} className={classes.textFieldCost}>
                <TextField
              id="standard-basic"
              label="Custom Fuel Cost"
              placeholder="Start typing..."
              InputLabelProps={{
                shrink: true,
                classes: {root: classes.textFieldRoot}
              }}
              InputProps={{
                classes: {input: classes.textInputRoot},
                endAdornment: (
                  <InputAdornment position="start">
                    <CostIcon className={classes.inputAdornmentIcon} />
                  </InputAdornment>
                ),
              }}
            />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} className={classes.fuelCostTitle}>
            Custom Fuel Cost History
            </GridItem>
                </CardBody>
                <ToolkitProvider
                    data={dumpData}
                    keyField="_id"
                    columns={[
                      {
                        dataField: "date",
                        text: "Date",
                        formatter: formatDate
                      },
                      {
                        dataField: "cost",
                        text: "Cost",
                        formatter: formatCost
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
              
        <GenPaginationV1 total={29} page={1} size={10}/>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
