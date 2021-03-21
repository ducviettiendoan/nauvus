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
import CardFooter from "components/Card/CardFooter.js";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { pagination } from 'utils/common-utils';

import Search from "@material-ui/icons/Search";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import Button from "components/CustomButtons/Button.js";
import Paging from "components/Pagination/Paging";
import Pagination from "components/Pagination/Pagination";

import { Row } from "reactstrap";

import {
  cardTitle,
  roseColor,
  infoColor,
  grayColor
} from "assets/jss/material-dashboard-pro-react.js";

const styles = {
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  tags: {
    height: "36px"
  },
  textMain : {
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    color: infoColor[0],
    marginTop: "6px",
    marginLeft: "15px"
  },
  textSub : {
    fontSize: "14px",
    lineHeight: "21px",
    color: grayColor[0],
    marginLeft: "15px"
  }
};

const useStyles = makeStyles(styles);

export default function VehicleAssets(props) {
  const [count, setCount] = React.useState(100);
  const [page, setPage] = React.useState(0);
  const [limit, setLimit] = React.useState(5);

  const classes = useStyles();
  
  const formatItemCommon = (val1, val2) => {
    return <>
      <div className={ classes.textMain }>{val1}</div>
      <div className={ classes.textSub }>{val2}</div>
    </>
  }

  const formatName = (cell, row) => {
    return formatItemCommon(cell, cell);
  }

  const formatStatus = (cell, row) => {
    return formatItemCommon(cell, 'Status');
  }

  const formatLasttrip = (cell, row) => {
    return formatItemCommon('---', 'Last trip');
  }

  const formatDrive = (cell, row) => {
    return formatItemCommon('---', 'Current Driver');
  }

  const formatLicense = (cell, row) => {
    return formatItemCommon('---', 'License Plate');
  }

  const formatFuelLevel = (cell, row) => {
    return formatItemCommon('---', '---');
  }

  const formatLocation = (cell, row) => {
    return formatItemCommon(cell, '8 hours ago');
  }

  const formatTags = (cell, row) => {
    return <Button round className={ `btn-round-active w-150 mr-4 ${classes.tags}`}>
      Room
    </Button>
  }

  const addActionButton = () => {
    return (
      <>
        <Button
          color="white"
          aria-label="edit"
          justIcon
          round
          className={ `btn-36 ${classes.moreAction} mr-2`}
        >
          <MoreHoriz />
        </Button>
      </>
    )
  }

  return (
    <div>
      { props.data && <ToolkitProvider
          data={ props.data }
          keyField="_id"
          columns={[
            {
              dataField: "serialnumber",
              text: "Name",
              formatter: formatName
            },
            {
              dataField: "formatted_address",
              text: "Location",
              formatter: formatLocation
            },
            {
              dataField: "last_trip",
              text: "Last trip",
              formatter: formatLasttrip
            },
            {
              dataField: "status",
              text: "Status",
              formatter: formatStatus
            },
            {
              dataField: "status",
              text: "Current Fuel Level",
              formatter: formatFuelLevel
            },
            {
              dataField: "status",
              text: "Current Driver",
              formatter: formatDrive
            },
            {
              dataField: "status",
              text: "License Plate",
              formatter: formatLicense
            },
            {
              dataField: "status",
              text: "Tag",
              formatter: formatTags
            },
              {
                dataField: "action",
                text: "",
                formatter: addActionButton
              } 
            ]}
                >
                  {props => (
                    <div className="table table-nauvus">
                        <BootstrapTable
                          {...props.baseProps}
                          bootstrap4={true}
                          // pagination={pagination}
                          bordered={false}
                        />
                        <Row className="justify-content-center">
                          <Pagination
                            pages={[
                              { text: "PREV" },
                              { active: true, text: 1 },
                              { text: "NEXT" }
                            ]}
                            color="info"
                          />
                        </Row>
                    </div>
                  )}
                </ToolkitProvider>
                }
    </div>
  );
}
