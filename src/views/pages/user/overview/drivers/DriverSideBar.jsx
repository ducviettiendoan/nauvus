import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Divider from '@material-ui/core/Divider';
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import {InfoOutlined} from "@material-ui/icons";
import Button from "components/CustomButtons/Button";
import TruckIcon from "components/Icons/TruckIcon";
import LocationIcon from "components/Icons/LocationIcon";
import PhoneIcon from "components/Icons/PhoneIcon";
import RecordIcon from "components/Icons/RecordIcon";
import Accordion from "components/Accordion/Accordion";
import FakeChartImage from "assets/img/svg-image/FakeChartImage";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import {Col, Row} from 'reactstrap';

const styles = {
  sidebarContainer: {
    overflowY: "auto",
  },
  txtMainDevice: {
    color: "#25345C",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "21px",
    marginBottom: "7px"
  },
  txtSubDevice: {
    color: "#C4C4C4",
    fontSize: "12px",
    lineHeight: "21px",
    position: "relative"
  },
  cameraIcon: {
    position: "absolute",
    top: "20px",
    left: "25px"
  },
  alert: {
    background: "#ECEEF0",
    height: "120px",
    margin: "20px 0px !important"
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
    fontSize: 14,
    color: "#25345C",
    padding: "0 16px !important"
  },
  topHeaderButton: {
    textAlign: "right",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    padding: "15px 0px "
  },
  cardHeaderTitle: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
  },
  cardSubHeaderTitle: {
    fontWeight: 700,
    fontSize: 12,
    color: "#B4B4B4",
  },
  cardItems: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0px",
  },
  cardItemsContent: {
    fontSize: 14,
    fontWeight: 400,
    color: "#25345C",
    paddingLeft: "10px"
  },
  cardItemsFooterTitle: {
    fontSize: 14,
    fontWeight: 400,
    color: "#25345C",
    paddingLeft: "10px"
  },
  cardItemsSubFooterTitle: {
    fontSize: 14,
    fontWeight: 400,
    color: "#B4B4B4",
  },
  cardExpandHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "19px 0px"
  },
  cardExpandHeaderTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#25345C",
  },
  expandTitle: {
    alignItems: "center",
    marginTop: 19
  },
  expandTitleLeft: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: 400,
    color: "#25345C",
  },
  expandTitleRight: {
    textAlign: "right",
    fontSize: 14,
    fontWeight: 400,
    color: "#25345C",
  },
  cardExpandContent: {
    paddingTop: "10px"
  },
  cardExpandFooterContent: {
    alignItems: "center",
    padding: "10px 0px"
  },
  cardExpandFooterTitle: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: 400,
    color: "#B4B4B4",
  },
  cardExpandFooterData: {
    textAlign: "right",
    fontSize: 14,
    fontWeight: 700,
    color: "#25345C",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  txtInfoMain: {
    fontSize: 14,
    fontWeight: 400,
    color: "#25345C",
  }
};

const useStyles = makeStyles(styles);
var ps;

export default function DriverSideBar(props) {
  const classes = useStyles();
  const mainPanelVehicleSideBar = React.createRef();

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      // setMobileOpen(false);
    }
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanelVehicleSideBar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [1]);

  return (
    <div ref={mainPanelVehicleSideBar} className={classes.sidebarContainer}>
      <Divider/>
      <Row>
        <Col>
          <div className={classes.txtMainDevice} style={{padding: '23px'}}>Your recent for</div>
        </Col>
        <Col style={{textAlign: 'right', padding: '23px', marginRight: '23px'}} className={classes.txtMainDevice}>
          <div>Clear All</div>
        </Col>
      </Row>
      <div style={{padding: "0px 18px"}}>
        <Card className={classes.alert}>
          <CardBody>
            <div className="ml-4" style={{textAlign: "left"}}>
              <div className={classes.txtInfoMain}>
                No location data found for Mar 25, 12:00 AM - Mar 25, 11:59 PM
              </div>
              <div className={`mb-4 ${classes.txtInfoMain}`}>
                Showing last found location from Feb 8, 2021 2:17 AM
              </div>
            </div>
            <div style={{position: "absolute", top: "16px", left: "10px"}}>
              <InfoOutlined/>
            </div>
          </CardBody>
        </Card>
      </div>
      <div style={{padding: "0px 18px"}}>
        <Row className={classes.topHeader}>
          <Col className={classes.topHeaderTitle}>
            Driver details
          </Col>
          <Col className={classes.topHeaderButton}>
            <Button
              color="white"
              aria-label="edit"
              justIcon
              round
              className={`btn-36 ${classes.moreAction} mr-2`}
            >
              <MoreHorizontalIcon/>
            </Button>
          </Col>
        </Row>
      </div>
      <div style={{padding: "0px 18px"}}>
        <Card>
          <CardBody>
            <Row className={classes.cardHeader}>
              <Col xs={2}>
                <TruckIcon/>
              </Col>
              <Col xs={10}>
                <Row className={classes.cardHeaderTitle}>Ali Singh</Row>
                <Row className={classes.cardSubHeaderTitle}>Name</Row>
              </Col>
            </Row>
            <Divider variant="fullWidth" light/>
            <div className={classes.cardItems}>
              <div>
                <LocationIcon/>
              </div>
              <div className={classes.cardItemsContent}>Tri-State Toolway, East Hazel Crest , IL</div>
            </div>
            <div className={classes.cardItems}>
              <div>
                <PhoneIcon/>
              </div>
              <div className={classes.cardItemsContent}>4046921660</div>
            </div>
            <div className={classes.cardItems}>
              <div>
                <RecordIcon/>
              </div>
              <div className={classes.cardItemsContent}>View Driver Record</div>
            </div>
            <div className={classes.cardItems}>
              <div className={classes.cardItemsSubFooterTitle}>
                Co Vehicle:
              </div>
              <div className={classes.cardItemsFooterTitle}>
                Vehicle 101
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div style={{padding: "0px 18px"}}>
        <Card>
          <CardBody>
            <Accordion collapses={
              [
                {
                  title:
                    <div className={classes.cardExpandHeaderTitle}>
                      Hour of service
                    </div>,
                  content:
                    <div className={classes.cardExpandContent}>
                      <FakeChartImage/>
                      <Row className={classes.cardExpandFooterContent}>
                        <Col className={classes.cardExpandFooterTitle}>
                          Duty Status
                        </Col>
                        <Col className={classes.cardExpandFooterData}>
                          Disconnected
                        </Col>
                      </Row>
                      <Divider variant="fullWidth" light/>
                      <Row className={classes.cardExpandFooterContent}>
                        <Col className={classes.cardExpandFooterTitle}>
                          Time in current status
                        </Col>
                        <Col className={classes.cardExpandFooterData}>
                          0:36
                        </Col>
                      </Row>
                      <Divider variant="fullWidth" light/>
                      <Row className={classes.cardExpandFooterContent}>
                        <Col className={classes.cardExpandFooterTitle}>
                          Time until break
                        </Col>
                        <Col className={classes.cardExpandFooterData}>
                          -
                        </Col>
                      </Row>
                      <Divider variant="fullWidth" light/>
                      <Row className={classes.cardExpandFooterContent}>
                        <Col className={classes.cardExpandFooterTitle}>
                          Drive remaining
                        </Col>
                        <Col className={classes.cardExpandFooterData}>
                          0:00
                        </Col>
                      </Row>
                    </div>
                },
              ]
            }/>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

// export default connect(
//   ({ vehicle }: IRootState) => ({
//     vehicles: vehicle.vehicles
//   }),
//   {
//   }
// )(DriverSideBar);