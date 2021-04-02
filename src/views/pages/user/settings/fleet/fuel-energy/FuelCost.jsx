import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
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
import {connect} from "react-redux";
import {IRootState} from "../../../../../../reducers";
import {getDriverEfficiency, getFuelCost} from "../../../../../../reducers/setting-fleet";
import {DriverEfficiency} from "./DriverEfficiency";

const styles = {
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
const useStyles = makeStyles(styles);

export function FuelCost(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getFuelCost();
  }, []);

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
                            <CostIcon className={classes.inputAdornmentIcon}/>
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
                  data={props.data}
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
                        keyField="id"
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

export default connect(
  ({settingFleet}: IRootState) => ({
    data: settingFleet.fuelCost
  }),
  {
    getFuelCost
  }
)(FuelCost);