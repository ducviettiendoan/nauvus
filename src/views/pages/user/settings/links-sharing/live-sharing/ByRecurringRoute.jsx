import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import Button from "components/CustomButtons/Button.js";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import BootstrapTable from "react-bootstrap-table-next";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import EditIcon from "components/Icons/EditIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import CopyIcon from "components/Icons/CopyIcon";
import {connect} from "react-redux";
import {IRootState} from "reducers";
import {getByRoute} from "reducers/setting-link-sharing";

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
  liveSharingHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  liveSharingTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    color: "#25345C",
    marginTop: '-17px'
  },
  liveSharingButton: {
    textAlign: "right",
    marginTop: "2px"
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    color: '#25345C',
    marginLeft: '24px'
  },
  textSub: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px',
    color: '#25345C'
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    }
  },
};

const useStyles = makeStyles(styles);

export function ByRecurringRoute(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getByRoute();
  }, []);

  const formatLocation = (cell, row) => {
    return <>
      <div className={classes.textName}>{cell}</div>
    </>
  }

  const formatName = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatDescription = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatLinkExpires = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const addActionButton = () => {
    return (
      <>
        <Button justIcon color="twitter" simple>
          <EditIcon className={classes.iconButton} style={{color: "#ffffff", width: '22px', height: '22px'}}/>
        </Button>
        <Button justIcon color="google" simple>
          <DeleteIcon className={classes.iconButton} style={{color: "#C4C4C4", width: '24px', height: '24px'}}/>
        </Button>
        <Button justIcon color="google" simple>
          <CopyIcon className={classes.iconButton} style={{color: "#ffffff", width: '22px', height: '22px'}}/>
        </Button>
      </>
    )
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody style={{height: '74px'}}>
                  <GridContainer className={classes.liveSharingHeader}>
                    <GridItem xs={12} sm={3} md={3} className={classes.liveSharingTitle}>
                      22 routes
                    </GridItem>
                    <GridItem xs={12} sm={9} md={9} className={classes.liveSharingButton}>
                      <ToolboxButton placeholder={"Search routes"}/>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <ToolkitProvider
                  data={props.data}
                  columns={[
                    {
                      dataField: "route",
                      text: "Route",
                      formatter: formatLocation
                    },
                    {
                      dataField: "name",
                      text: "Name",
                      formatter: formatName
                    },
                    {
                      dataField: "description",
                      text: "Description",
                      formatter: formatDescription
                    },
                    {
                      dataField: "linkExpires",
                      text: "Link Expires",
                      formatter: formatLinkExpires
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
  ({settingLinkSharing}: IRootState) => ({
    data: settingLinkSharing.byRoutes
  }),
  {
    getByRoute
  }
)(ByRecurringRoute);
