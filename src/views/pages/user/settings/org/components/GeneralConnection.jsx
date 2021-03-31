import React, { useState } from "react";
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


const styles = {
  cardContainer: {
    marginTop: "15px !important",
    height: "calc(100vh - 100px)"
  },
  contentContainer: {
    display: "flex",
    margin: "16px 7px 16px 16px",
  },
  areaGrow: {
    flexGrow: "1"
  },
  areaMenu: {
    width: "237px"
  },
  testimonialIcon: {
    color: "red",
    marginTop: "30px",
    "& svg": {
      width: "20px",
      height: "20px"
    }
  },
  footer: {
    position: 'absolute',
    bottom: '16px',
    width: '100%'
  },

  icons: {
    width: "22px",
    height: "22px",
    color: "#C4C4C4",
    "&:hover": {
      color: "#25345C"
    }
  },
  root: {
    width: '100%',
    alignItems: "center",
    width: "237px",
    background: "#FFFFFF",
    border: "1px solid #ECEEF0",
    boxSizing: "border-box",
    borderRadius: "12px",
    paddingTop: '0px',
    paddingBottom: '0px'
  },
  itemTextRoot: {
    marginTop: '-6px'
  },
  primaryText: {
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#25345C",
  },
  secondaryText: {
    fontFamily: "Lato",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#C4C4C4",
  },
  iconRoot: {
    marginTop: "-8px",
    marginLeft: "-5px",
    minWidth: "29px",
  },
  listItemButton: {
    "&:hover": {
      background: 'none !important'
    }
  },
  listItemRoot: {
    paddingTop: '20px'
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
  }
};

const useStyles = makeStyles(styles);

export default function GeneralConnection() {
  const classes = useStyles();

  const [checkedState, setCheckedState] = useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setCheckedState({ ...checkedState, [event.target.name]: event.target.checked });
  };

  const [listNetworks, setListNetworks] = useState(["wef - WPA", "wef - WPA", "wef - WPA", "wef - WPA"])

  return (
    <>
      <div>
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
            {listNetworks.map((network, i) => (
              <GridItem key={i} className={classes.lineContainer} >
                <GridItem className={classes.networkName}>{network}</GridItem>
                <GridItem className={classes.buttonGroupContainer}>
                  <Col style={{ paddingRight: "0px"}}>
                    <Button
                      className="btn-transparent w-29"
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
            >
              Add Network
            </Button>
          </Row>
        </GridItem>
    </div>
    </>
  );
}
