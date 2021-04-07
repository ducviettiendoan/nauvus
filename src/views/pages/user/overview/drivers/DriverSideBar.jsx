import React, {useState} from "react";
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
import ArrowBackIcon from "../../../../../components/Icons/ArrowBackIcon";
import {Field, Form} from "react-final-form";
import {Select, TextField} from "final-form-material-ui";
import DiaLog from "../../../../../components/CustomDialog/Dialog";
import InputAdornment from "@material-ui/core/InputAdornment";
import DriverIcon from "../../../../../components/Icons/DriverIcon";
import PhoneIconField from "../../../../../components/Icons/PhoneIconField";
import CustomSelect from "../../../../../components/CustomSelect/CustomSelect";
import GridItem from "../../../../../components/Grid/GridItem";


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
  },
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#C4C4C4'
  },
  textInputRoot: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C'
  },
  vehicleHeader: {
    width: "78px",
    height: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#C4C4C4",
    padding: "0px 0px 0px 0px !important",
  },
  selectField: {
    paddingTop: "18px"
  },
  loginTitle: {
    fontWeight: 700,
    fontSize: '18px',
    color: '#25345C',
    padding: "16px 0px 0px 16px"
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

  const [openInvite, setOpenInvite] = React.useState(false);
  const [selectValue, setSelectValue] = useState({
    stateProvince: "none",
  });

  const openEditDriver = () => {
    console.log("OPEN")
    setOpenInvite(true)
  }

  const closeEditDriver = () => {
    console.log("CLOSE")
    setOpenInvite(false)
  }

  const onSubmit = async (values) => {
    console.log(values);
  }

  const validate = (values) => {
    const errors = {};
    if (!values.driverName) {
      errors.driverName = 'Driver name must not be empty!';
    }
    console.log(errors);
    return errors;
  };

  const handleChange = (event) => {
    setSelectValue({ ...selectValue, [event.target.name]: event.target.value })
  }

  const roles = [
    { id: 'full_admin', label: 'Full Admin' },
    { id: 'standard_admin', label: 'Standard Admin' },
    { id: 'read_only_admin', label: 'Read-only Admin' },
    { id: 'dispatch', label: 'Dispatch' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'standard_admin_no_dash', label: "Standard Admin (No Dash Cam Access)" }
  ]

  const access = [
    { id: "Entire", label: "Entire Organization" },
    { id: "room", label: "Room" },
    { id: "new", label: "New" }
  ]

  return (
    <div ref={mainPanelVehicleSideBar} className={classes.sidebarContainer}>
      <Divider/>
      <Row>
        <Col>
          <Button
            startIcon={<ArrowBackIcon />}
            className="btn-round-white 2 w-84 h-41"
            style={{margin: "13px 0px 0px 16px"}}
            onClick={props.onBack}
          >
            Back
          </Button>
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
              onClick={openEditDriver}
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
      <DiaLog
        renderTitle={<h3 className={classes.dialogTitle}>Edit Driver</h3>}
        handleClose={closeEditDriver}
        open={true}
      >
        <Form
          onSubmit={onSubmit}
          // initialValues={{ email: "test@gmail.com", stooge: 'larry' }}
          validate={validate}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Row>
                <Col>
                  <Field
                    id="standard-full-width"
                    label="Driver Name"
                    placeholder="Start typing..."
                    fullWidth
                    margin="normal"
                    name="driverName"
                    InputLabelProps={{
                      shrink: true,
                      classes: {root: classes.textFieldRoot}
                    }}
                    InputProps={{
                      classes: {input: classes.textInputRoot},
                      endAdornment: (
                        <InputAdornment position="start">
                          <DriverIcon className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      ),
                    }}
                    component={TextField}
                  />
                </Col>
                <Col>
                  <Field
                    id="standard-full-width"
                    label="Driver Phone Number"
                    placeholder="Start typing..."
                    fullWidth
                    margin="normal"
                    name="phoneNum"
                    InputLabelProps={{
                      shrink: true,
                      classes: {root: classes.textFieldRoot}
                    }}
                    InputProps={{
                      classes: {input: classes.textInputRoot},
                      endAdornment: (
                        <InputAdornment position="start">
                          <PhoneIconField className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      ),
                    }}
                    component={TextField}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Field
                    id="standard-full-width"
                    label="Driver License Number"
                    placeholder="Start typing..."
                    fullWidth
                    margin="normal"
                    name="driverLicense"
                    InputLabelProps={{
                      shrink: true,
                      classes: {root: classes.textFieldRoot}
                    }}
                    InputProps={{
                      classes: {input: classes.textInputRoot},
                      endAdornment: (
                        <InputAdornment position="start">
                          <PhoneIconField className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      ),
                    }}
                    component={TextField}
                  />
                </Col>
                <Col>
                  <div className={classes.selectField}>
                    <div className={classes.vehicleHeader}>Locate</div>
                    <Field
                      name="stateProvince"
                      listValues={["AL-Alabama"]}
                      placeholder={"AL-Alabama"}
                      selectValue={selectValue.stateProvince}
                      onChange={handleChange}
                      component={CustomSelect}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Field
                    id="standard-full-width"
                    label="Tags"
                    placeholder="Start typing..."
                    fullWidth
                    margin="normal"
                    name="tags"
                    InputLabelProps={{
                      shrink: true,
                      classes: {root: classes.textFieldRoot}
                    }}
                    InputProps={{
                      classes: {input: classes.textInputRoot},
                      endAdornment: (
                        <InputAdornment position="start">
                          <DriverIcon className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      ),
                    }}
                    component={TextField}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Field
                    id="standard-full-width"
                    label="Notes"
                    placeholder="Start typing..."
                    fullWidth
                    margin="normal"
                    name="notes"
                    InputLabelProps={{
                      shrink: true,
                      classes: {root: classes.textFieldRoot}
                    }}
                    InputProps={{
                      classes: {input: classes.textInputRoot},
                      endAdornment: (
                        <InputAdornment position="start">
                          <DriverIcon className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      ),
                    }}
                    component={TextField}
                  />
                </Col>
              </Row>
              <Row className={classes.loginTitle}>Driver App Login</Row>
              <Row>
                <Col>
                  <Field
                    id="standard-full-width"
                    label="Username"
                    placeholder="Start typing..."
                    fullWidth
                    margin="normal"
                    name="username"
                    InputLabelProps={{
                      shrink: true,
                      classes: {root: classes.textFieldRoot}
                    }}
                    InputProps={{
                      classes: {input: classes.textInputRoot},
                      endAdornment: (
                        <InputAdornment position="start">
                          <DriverIcon className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      ),
                    }}
                    component={TextField}
                  />
                </Col>
                <Col>
                  <Field
                    id="standard-full-width"
                    label="New Password"
                    placeholder="Start typing..."
                    fullWidth
                    margin="normal"
                    name="password"
                    InputLabelProps={{
                      shrink: true,
                      classes: {root: classes.textFieldRoot}
                    }}
                    InputProps={{
                      classes: {input: classes.textInputRoot},
                      endAdornment: (
                        <InputAdornment position="start">
                          <PhoneIconField className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      ),
                    }}
                    component={TextField}
                  />
                </Col>
              </Row>
              <Row className={classes.loginTitle}>Hours of Service</Row>
              <div className={classes.selectButton}>
                <Button
                  type="button"
                  round
                  className="btn-round-active-2 mr-2"
                  onClick={props.handleClose}
                > Cancel</Button>
                <Button
                  round
                  className="btn-round-active mr-2"
                  type="submit"
                  disabled={submitting}
                > Save</Button>
              </div>

            </form>
          )}
        />
      </DiaLog>
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