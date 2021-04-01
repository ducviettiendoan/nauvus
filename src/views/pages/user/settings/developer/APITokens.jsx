import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
import AddOutlined from "@material-ui/icons/AddOutlined";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import EditIcon from "components/Icons/EditIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import DotIcon from "components/Icons/DotIcon.jsx";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import {Row} from "reactstrap";

const styles = {
  apiTokensHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  apiTokensTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important"
  },
  apiTokensBtn: {
    textAlign: "right",
  },
  apiTokensGuide: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    marginBottom: "14px"
  },
  apiTokensList: {
    margin: "15px"

  },
  apiTokensDoc: {
    fontWeight: 700,
    fontSize: 15,
    textAlign: "left"
  },
  apiTokensRead: {
    textAlign: "right",
    fontSize: 15,
    fontWeight: 400
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    marginLeft: '24px'
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    marginLeft: '24px',
    marginTop: '25px'
  },
  textSub: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '25px',
    marginLeft: '24px',
    color: "#25345C",
  },
  textScope: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',

  },
  textStatus: {
    fontSize: '16px',
    lineHeight: '24px',
    margin: '16px',
    padding: "12px 14px",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: 71,
    height: '41px'
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    },
  },
  actionIcon: {
    marginTop: "10px"
  }
};

const dumpData = [
  {
    name: 'Truckmate',
    accessTokens: "nauvus_api_IsXNeRyK8fPRSs9z0IcSeQ9sJhrchX",
    scope: 'Full Admin',
    version: "2021-02-16",
    status: "Latest"
  },
  {
    name: 'Truckmate',
    accessTokens: "nauvus_api_IsXNeRyK8fPRSs9z0IcSeQ9sJhrchX",
    scope: 'Full Admin',
    version: "2021-02-16",
    status: "Latest"
  },
  {
    name: 'Truckmate',
    accessTokens: "nauvus_api_IsXNeRyK8fPRSs9z0IcSeQ9sJhrchX",
    scope: 'Full Admin',
    version: "2021-02-16",
    status: "Latest"
  },
  {
    name: 'Truckmate',
    accessTokens: "nauvus_api_IsXNeRyK8fPRSs9z0IcSeQ9sJhrchX",
    scope: 'Full Admin',
    version: "2021-02-16",
    status: "Latest"
  },
  {
    name: 'Truckmate',
    accessTokens: "nauvus_api_IsXNeRyK8fPRSs9z0IcSeQ9sJhrchX",
    scope: 'Full Admin',
    version: "2021-02-16",
    status: "Latest"
  },
  {
    name: 'Truckmate',
    accessTokens: "nauvus_api_IsXNeRyK8fPRSs9z0IcSeQ9sJhrchX",
    scope: 'Full Admin',
    version: "2021-02-16",
    status: "Latest"
  },

];


const useStyles = makeStyles(styles);

export default function APITokens() {
  const classes = useStyles();

  const formatName = (cell, row) => {
    return <>
      <div className={classes.textName}>{cell}</div>
    </>
  }

  const formatTokens = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatScope = (cell, row) => {
    return <>
      <div className={classes.alignItemsCenter}>
        <div><DotIcon style={{color: "#7CE7AC", marginTop: 10}}/></div>
        <div className={classes.textScope}>{cell}</div>
      </div>
    </>
  }

  const formatVersion = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatStatus = (cell, row) => {
    return <>
      <div className={classes.textStatus}>{cell}</div>
    </>
  }

  const addActionButton = () => {
    return (
      <div className={classes.actionIcon}>
        <Button justIcon color="twitter" simple>
          <EditIcon className={classes.iconButton} style={{color: "#ffffff", width: '22px', height: '22px'}}/>
        </Button>
        <Button justIcon color="google" simple>
          <DeleteIcon className={classes.iconButton} style={{color: "#C4C4C4", width: '24px', height: '24px'}}/>
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

              <GridContainer className={classes.apiTokensHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.apiTokensTitle}>
                  6 Tokens
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.apiTokensBtn}>
                  <Button
                    round
                    className="btn-round-active mr-2"
                    startIcon={<AddOutlined/>}
                  >
                    Add an API Token
                  </Button>
                </GridItem>
              </GridContainer>
              <Card testimonial>

                {/* <CardBody>
                  
                </CardBody> */}
                <ToolkitProvider
                  data={dumpData}
                  keyField="_id"
                  columns={[
                    {
                      dataField: "name",
                      text: "Name",
                      formatter: formatName
                    },
                    {
                      dataField: "accessTokens",
                      text: "Acces Tokens",
                      formatter: formatTokens
                    },
                    {
                      dataField: "scope",
                      text: "Scope",
                      formatter: formatScope
                    },
                    {
                      dataField: "version",
                      text: "Version",
                      formatter: formatVersion
                    },
                    {
                      dataField: "status",
                      text: "Status",
                      formatter: formatStatus
                    },
                    {
                      dataField: "action",
                      text: "Actions",
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

                        {/* <GenPaginationV1 total={29} page={1} size={10} /> */}
                      </Row>
                    </div>
                  )}
                </ToolkitProvider>
                <CardBody style={{marginTop: '-40px'}}>
                  <GridContainer className={classes.apiTokensHeader}>
                    <GridItem className={classes.apiTokensGuide}>
                      Developer Documentation and Guides

                    </GridItem>
                    <GridContainer className={classes.apiTokensList}>
                      <GridItem xs={3} sm={3} md={3} className={classes.apiTokensDoc}>
                        API Documentation
                      </GridItem>
                      <GridItem xs={9} sm={9} md={9} className={classes.apiTokensRead}>
                        read through details on how all our APIs work
                      </GridItem>
                    </GridContainer>
                    <GridContainer className={classes.apiTokensList}>
                      <GridItem xs={3} sm={3} md={3} className={classes.apiTokensDoc}>
                        API Documentation
                      </GridItem>
                      <GridItem xs={9} sm={9} md={9} className={classes.apiTokensRead}>
                        read through details on how all our APIs work
                      </GridItem>
                    </GridContainer>
                    <GridContainer className={classes.apiTokensList}>
                      <GridItem xs={3} sm={3} md={3} className={classes.apiTokensDoc}>
                        API Documentation
                      </GridItem>
                      <GridItem xs={9} sm={9} md={9} className={classes.apiTokensRead}>
                        read through details on how all our APIs work
                      </GridItem>
                    </GridContainer>
                  </GridContainer>

                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
