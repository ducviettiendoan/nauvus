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
import Button from "components/CustomButtons/Button.js";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import TableComponent from "../../../../Components/Table"

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
  apiTokensHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  apiTokensTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left"
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
  }
};

const HeadCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'accessToken', numeric: true, disablePadding: false, label: 'Access Token' },
  { id: 'scope', numeric: true, disablePadding: false, label: 'Scope' },
  { id: 'version', numeric: true, disablePadding: false, label: 'Version' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
];

function createData(name, accessToken, scope, version, status) {
  return { name, accessToken, scope, version, status };
}

const rows = [
  createData('Truckmate', 'nauvus_api_IsXNeRyK8fPRSs9z0IcSeQ9sJhrchX', 'Full Admin', '2021-02-16', 'Latest'),
  createData('Truckmate', 'nauvus_api_IsXNeRyK8fPRSs9z0IcSeQ9sJhrchX', 'Full Admin', '2021-02-16', 'Latest'),
  createData('Truckmate', 'nauvus_api_IsXNeRyK8fPRSs9z0IcSeQ9sJhrchX', 'Full Admin', '2021-02-16', 'Latest'),
  createData('Truckmate', 'nauvus_api_IsXNeRyK8fPRSs9z0IcSeQ9sJhrchX', 'Full Admin', '2021-02-16', 'Latest'),
  createData('Truckmate', 'nauvus_api_IsXNeRyK8fPRSs9z0IcSeQ9sJhrchX', 'Full Admin', '2021-02-16', 'Latest'),
  createData('Truckmate', 'nauvus_api_IsXNeRyK8fPRSs9z0IcSeQ9sJhrchX', 'Full Admin', '2021-02-16', 'Latest'),

];


const useStyles = makeStyles(styles);

export default function APITokens() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>


              <Card testimonial>

                <CardBody>
                  <GridContainer className={classes.apiTokensHeader}>
                    <GridItem xs={3} sm={3} md={3} className={classes.apiTokensTitle}>
                      6 Tokens
                    </GridItem>
                    <GridItem xs={9} sm={9} md={9} className={classes.apiTokensBtn}>
                      <Button
                        className="btn-round-active"
                        startIcon={<ControlPointIcon />}
                      >
                        Add an API Token
                      </Button>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <TableComponent rows={rows} headCells={HeadCells} action={["edit", "delete"]} />
                <CardBody>
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
