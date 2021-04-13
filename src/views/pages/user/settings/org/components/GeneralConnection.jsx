import React, {useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import { Row, Col } from "reactstrap";
import CustomSwitch from "components/CustomSwitch/Switch"
import GridItem from "components/Grid/GridItem.js";
import { Divider, InputAdornment } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import UserInfoIcon from "components/Icons/UserInfoIcon";
import Button from "components/CustomButtons/Button.js";
import { AddOutlined } from "@material-ui/icons";
import DiaLog from "components/CustomDialog/Dialog";
import AddWifiForm from "./AddWifiForm";
import {connect} from "react-redux";
import {getNetwork} from "reducers/setting-org";

const styles = {
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
  headerContent: {
    padding: "0px 0px 8px 0px !important",
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C",
  },
  headerDescription: {
    padding: "0px 0px 20px 0px !important",
    fontFamily: "Lato",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "21px",
    color: "#B4B4B4",
  },
  wifiNetworksHeader: {
    padding: "0px 0px 16px 0px !important",
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C",
  },
  lineContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 0px 0px 0px !important",
  },
  networkName: {
    padding: "0px 0px 0px 0px !important",
    fontFamily: "Lato",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C",
  },
  buttonGroupContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "0px 0px 0px 0px !important"
  },
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
};

const useStyles = makeStyles(styles);

function GeneralConnection(props) {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = useState(false);
  const [networkToDisplay, setNetworkToDisplay] = useState({ encryption: "open" })
  const [status, setStatus] = useState("")
  useEffect(() => {
    props.getNetwork()
  }, [])

  const [checkedState, setCheckedState] = useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setCheckedState({ ...checkedState, [event.target.name]: event.target.checked });
  };

  const encryption_type = {
    wpa_psk: "WPA (PSK) - Encrypted",
    wpa_enterprise: "WPA Enterprise - Encrypted",
    open: "Open"
  }

  const displayEditWifiForm = (network) => {
    setNetworkToDisplay(network)
    setOpenAdd(true)
    setStatus("Edit")
  }

  const displayAddWifiForm = () => {
    setNetworkToDisplay({ encryption: "open" })
    setOpenAdd(true)
    setStatus("Add")
  }

  return (
    <>
      <div>
        <DiaLog
            renderTitle={<h3 className={classes.dialogTitle}>{status} Wi-Fi Configuration</h3>}
            handleClose={() => {setOpenAdd(false)}
            }
            open={openAdd}
        >
          <AddWifiForm initData={networkToDisplay} handleClose={() => {setOpenAdd(false)}}/>
        </DiaLog>
        <Row style={{ marginTop: '20px', paddingRight: '16px', display: "flex", justifyContent: "space-between" }}>
          <GridItem>
            <GridItem className={classes.headerContent}>
              Hotspot
            </GridItem>
            <GridItem className={classes.headerDescription}>
              This will enable the vehicle gateway to be a hotspot for other devices like driver tablets or laptops
            </GridItem>
          </GridItem>
          <CustomSwitch checked={checkedState.checkedA} onChange={handleChange} name="checkedA" />
        </Row>
        <Divider varian="full-width" light />
        <Row style={{ marginTop: '20px', paddingBottom: '23px' }}>
          <Col>
            <TextField
              id="standard-full-width"
              label="Full name"
              placeholder="Enter full name"
              fullWidth
              margin="normal"
              defaultValue="Eliza Gray"
              InputLabelProps={{
                shrink: true,
                classes: { root: classes.textFieldRoot }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <UserInfoIcon />
                  </InputAdornment>
                ),
                classes: { input: classes.textInputRoot },
              }}
            />
          </Col>
          <Col>
            <TextField
              id="standard-full-width1"
              label="Password"
              placeholder="Enter password"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
                classes: { root: classes.textFieldRoot }
              }}
              defaultValue="4567VGjhd28"
              InputProps={{
                classes: { input: classes.textInputRoot },
                endAdornment: (
                  <InputAdornment position="end">
                    <UserInfoIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Col>
        </Row>
        <GridItem>
          <Row className={classes.wifiNetworksHeader} >Wi-Fi Networks</Row>
          <Row style={{ display: "flex", flexDirection: "column", paddingBottom: "16px" }}>
            {props.data && props.data.length > 0 && props.data.map((network, i) => (
              <GridItem key={i} className={classes.lineContainer} >
                <GridItem className={classes.networkName}>{network.name} - {encryption_type[network.encryption]}</GridItem>
                <GridItem className={classes.buttonGroupContainer}>
                  <Col style={{ paddingRight: "0px"}}>
                    <Button
                      className="btn-transparent w-29"
                      onClick={() => {
                        displayEditWifiForm(network)}}
                    >Edit</Button>
                  </Col>
                  <Col style={{ paddingRight: "0px"}}>
                    <Button
                    className="btn-transparent w-58"
                  >Delete</Button>
                  </Col>
              </GridItem>
              </GridItem>
            ))}
          </Row>
          <Row>
            <Button
              className="btn-transparent w-142"
              startIcon={<AddOutlined />}
              onClick={displayAddWifiForm}
            >
              Add Network
            </Button>
          </Row>
        </GridItem>
    </div>
    </>
  );
}

export default connect(
    ({settingOrg}) => ({
      data: settingOrg.networks.data
    }),
    {
      getNetwork
    }
)(GeneralConnection);