import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import AddOutlined from "@material-ui/icons/AddOutlined";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import {
  cardTitle,
} from "assets/jss/material-dashboard-pro-react.js";
import Button from "components/CustomButtons/Button.js";
import { MoreHoriz } from "@material-ui/icons";
import SettingSearchBox from "components/SearchBox/SettingSearchBox";

import EditIcon from "components/Icons/EditIcon";
import DeleteIcon from "components/Icons/DeleteIcon";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { Row } from "reactstrap";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";

const styles = {
  cardTitle,
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
  liveSharingHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  liveSharingTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    color: "#25345C"
  },
  liveSharingButton: {
    textAlign: "right",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  searchBox: {
    marginTop: "16px !important",
    textAlign: "right"
  },
  textName: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    color: '#25345C',
    marginLeft: '24px'
  },
  textSub: {
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px'
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    },
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important"
  },
  topHeaderButton: {
    textAlign: "right",
  },
  actionButton: {
    textAlign: "right"
  }
};


const dumpData = [
  { name: 'GR9X-6AN-3N5'},
  { name: 'GR9X-6AN-3N5'},
  { name: 'GR9X-6AN-3N5'},
  { name: 'GR9X-6AN-3N5'},
  { name: 'GR9X-6AN-3N5'},
  { name: 'GR9X-6AN-3N5'},
  { name: 'GR9X-6AN-3N5'},
  { name: 'GR9X-6AN-3N5'}
];

const useStyles = makeStyles(styles);

export default function Maps(props) {
  const classes = useStyles();

  const formatName = (cell, row) => {
    return <>
      <div className={classes.textName}>{cell}</div>
    </>
  }

  const addActionButton = () => {
    return (
      <div className={classes.actionButton}>
        <Button justIcon color="twitter" simple>
          <EditIcon className={classes.iconButton} style={{ color: "#ffffff", width: '22px', height: '22px' }} />
        </Button>
        <Button justIcon color="google" simple>
          <DeleteIcon className={classes.iconButton} style={{ color: "#C4C4C4", width: '24px', height: '24px' }} />
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

              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  Map Customization List
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active w-150 mr-2"
                    startIcon={<AddOutlined />}
                  >
                    Upload Image
                  </Button>
                </GridItem>
              </GridContainer>


              <Card testimonial>
                <div>
                  <ToolkitProvider
                    data={ dumpData }
                    keyField="_id"
                    columns={[
                      {
                        dataField: "name",
                        text: "Name",
                        formatter: formatName
                      },
                      {
                        dataField: "action",
                        text: "",
                        formatter: addActionButton
                      }
                    ]}
                  >
                    {props => (
                      <div className="table table-settings">
                        <BootstrapTable
                          {...props.baseProps}
                          bootstrap4={true}
                          bordered={false}
                        />
                        <Row className="justify-content-center">
                          {/* <PaginationV2
                                        pages={[
                                          { text: <ArrowDownIcon/>, arrow : true,disabled : true },
                                          { text: <ArrowLeftIcon/>, arrow : true,disabled : true },
                                          { active: true, text: 1 },
                                          { text: 2 },
                                          { text: 3 },
                                          { text: 4 },
                                          { text: 5 },
                                          { text: <ArrowRightIcon/>, arrow : true },
                                          { text: <ArrowUpIcon/>, arrow : true },
                                        ]}
                                      /> */}

                        </Row>
                      </div>
                    )}
                  </ToolkitProvider>
                </div>
              </Card>
              <GenPaginationV1 total={29} page={1} size={10} />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
