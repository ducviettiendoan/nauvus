import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";

import Button from "components/CustomButtons/Button.js";
import {Row, Col} from "reactstrap";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import avatar from "assets/img/faces/avatar.jpg";
import VerifiedIcon from "components/Icons/VerifiedIcon"
import CardIcon from "components/Icons/CardIcon"
import HelpIcon from "components/Icons/HelpIcon"

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
    marginTop: '16px',
    marginLeft: '24px',
    color: "#25345C",
  },
  textStatus: {
    fontSize: '14px',
    lineHeight: '24px',
    marginTop: '7px',
    marginBottom: '8px',
    marginLeft: '24px',
    padding: "12px 14px",
    color: "#FFFFFF",
    background: "rgba(229,57,53,0.85)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: 87,
    height: 41
  },
  userHeader: {
    paddingTop: "27px"
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    marginTop: "-20px",
    marginRight: "20px"
  },
  status: {
    padding: "0px 0px 0px 0px !important",
    textAlign: "left",
    display: 'inline-block'
  },
  avatar: {
    padding: "0px 0px 0px 0px !important",
    textAlign: "center",
    display: 'inline-block'
  },
  statusName: {
    color: "#25345C",
    fontWeight: "700",
    padding: "0px 0px 0px 0px !important",
  },
  statusVerify: {
    color: "#B4B4B4",
    fontWeight: "400",
    fontSize: "14px",
    padding: "0px 0px 0px 0px !important",
  },
  paymentData: {
    marginTop: "50px"
  },
  paymentTitle: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#25345C"
  },
  paymentType: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#B4B4B4"
  },
  paymentAmount: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#25345C",
    lineHeight: "21px"
  },
  paymentView: {
    fontSize: "12px",
    fontWeight: "700",
    color: "#25345C",
    marginTop: "40px",
    marginBottom: "20px",
    marginLeft: "11px"
  },
  paymentInfo: {
    padding: "0 !important",
    marginTop: "20px"
  },

  card: {
    paddingRight: "0 !important",
    marginTop: "25px",
    marginRight: "11px",
    marginLeft: "11px"
  },
  cardInfo: {
    paddingRight: "0 !important",
    marginTop: "25px",
    marginLeft: "11px"
  },
  paymentSection: {
    border: "1px solid #ECEEF0",
    borderRadius: "12px",
    margin: "15px",
  },
  helpBtn: {
    // marginLeft: "10px"
    textAlign: "right"
  }
};

const dumpDataSummary = [
  {
    dueDate: '02/03/2021',
    po: "Signed Agreement",
    invoice: '30510326',
    amount: "$627.12",
    remainingBalance: "$14.05",
    status: "Overdue"
  },
  {
    dueDate: '02/03/2021',
    po: "Signed Agreement",
    invoice: '30510326',
    amount: "$627.12",
    remainingBalance: "$14.05",
    status: "Overdue"
  },
  {
    dueDate: '02/03/2021',
    po: "Signed Agreement",
    invoice: '30510326',
    amount: "$627.12",
    remainingBalance: "$14.05",
    status: "Overdue"
  },

];

const useStyles = makeStyles(styles);

export default function Summary() {
  const classes = useStyles();

  const formatDueDate = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatPO = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatInvoice = (cell, row) => {
    return <>

      <div className={classes.textSub}>{cell}</div>

    </>
  }

  const formatAmount = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatRemainingBalance = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatStatus = (cell, row) => {
    return <>
      <div className={classes.textStatus}>{cell}</div>
    </>
  }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <Row className={classes.userHeader}>
                <Col>
                  <div className={classes.avatar}>
                    <img src={avatar} alt="user-avatar" className={classes.avatarImage}/>
                  </div>
                  <div className={classes.status}>
                    <div className={classes.statusName}>
                      Account status, Johnny Bowers
                    </div>
                    <div className={classes.statusVerify}>
                      <VerifiedIcon style={{color: "#FFFFFF", width: '16px', height: '16px', marginRight: '11px'}}/>
                      Your account is current
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className={classes.helpBtn}>
                    <Button
                      round
                      className="btn-round-white w-88"
                      startIcon={<HelpIcon
                        style={{color: "#FFFFFF", width: '16px', height: '16px', top: "2px", marginRight: 0}}/>}
                    >
                      Help
                    </Button>
                  </div>
                </Col>
              </Row>
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer className={classes.paymentData}>
                  <GridItem xs={6} sm={6} md={6} className={classes.paymentTitle}>
                    Your Account
                    <GridContainer>
                      <GridItem xs={10} sm={10} md={10} lg={5} className={classes.paymentSection}>

                        <GridContainer>
                          <GridItem xs={1} sm={1} md={1} className={classes.card}>
                            <CardIcon style={{color: "#FFFFFF", width: '18px', height: '21px'}}/>
                          </GridItem>
                          <GridItem xs={9} sm={9} md={9} className={classes.paymentInfo}>
                            <GridItem xs={12} sm={12} md={12} className={classes.paymentType}>
                              Upcoming payment
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12} className={classes.paymentAmount}>
                              $30,659,45
                            </GridItem>

                          </GridItem>
                          <GridItem xs={12} sm={12} md={12} className={classes.paymentView}>
                            View All
                          </GridItem>

                        </GridContainer>
                      </GridItem>

                      <GridItem xs={3} sm={3} md={5} className={classes.paymentSection}>
                        <GridContainer>
                          <GridItem xs={1} sm={1} md={1} className={classes.card}>
                            <CardIcon style={{color: "#FFFFFF", width: '18px', height: '21px'}}/>
                          </GridItem>
                          <GridItem xs={9} sm={9} md={9} className={classes.paymentInfo}>
                            <GridItem xs={12} sm={12} md={12} className={classes.paymentType}>
                              Last payment
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12} className={classes.paymentAmount}>
                              $28,750,00
                            </GridItem>

                          </GridItem>
                          <GridItem xs={12} sm={12} md={12} className={classes.paymentView}>
                            View All
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                    </GridContainer>
                  </GridItem>


                  <GridItem xs={6} sm={6} md={6} className={classes.paymentTitle}>
                    Payment Method
                    <GridContainer>
                      <GridItem xs={7} sm={7} md={7} className={classes.paymentSection}>

                        <GridContainer>
                          <GridItem xs={1} sm={1} md={1} className={classes.cardInfo}>
                            <CardIcon style={{color: "#FFFFFF", width: '18px', height: '21px'}}/>
                          </GridItem>
                          <GridItem xs={10} sm={10} md={10} className={classes.paymentInfo}>
                            <GridItem xs={12} sm={12} md={12} className={classes.paymentType}>
                              Exp 1/2025
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12} className={classes.paymentAmount}>
                              MASTERCARD ••••1887
                            </GridItem>

                          </GridItem>
                          <GridItem xs={12} sm={12} md={12} className={classes.paymentView}>
                            Change payment method
                          </GridItem>

                        </GridContainer>
                      </GridItem>


                    </GridContainer>
                  </GridItem>
                </GridContainer>


              </GridItem>
            </CardBody>

            <ToolkitProvider
              data={dumpDataSummary}
              keyField="_id"
              columns={[
                {
                  dataField: "dueDate",
                  text: "Due Date",
                  formatter: formatDueDate
                },
                {
                  dataField: "po",
                  text: "PO",
                  formatter: formatPO
                },
                {
                  dataField: "invoice",
                  text: "Invoice",
                  formatter: formatInvoice
                },
                {
                  dataField: "amount",
                  text: "Amount",
                  formatter: formatAmount
                },
                {
                  dataField: "remainingBalance",
                  text: "Remaining Balance",
                  formatter: formatRemainingBalance
                },
                {
                  dataField: "status",
                  text: "Status",
                  formatter: formatStatus
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

                </div>
              )}
            </ToolkitProvider>

          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
