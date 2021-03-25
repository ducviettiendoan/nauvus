import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import TextField from '@material-ui/core/TextField';

import { Row, Col } from "reactstrap";
import OrganizationUpload from "components/CustomUpload/OrganizationUpload";

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
  }
};

const useStyles = makeStyles(styles);

export default function GeneralLanguageRegion() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Row style={{marginTop: '20px', paddingRight: '16px'}}>
          <Col>
            <TextField
              id="standard-full-width"
              label="Organisation name"
              placeholder="Global Company"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
                classes: { root: classes.textFieldRoot }
              }}
              InputProps={{
                classes: { input: classes.textInputRoot }
              }}
            />
          </Col>
          <Col>
            <TextField
                id="standard-full-width1"
                label="Driver Fleet ID"
                placeholder="Driver Fleet ID"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                  classes: { root: classes.textFieldRoot }
                }}
                InputProps={{
                  classes: { input: classes.textInputRoot }
                }}
              />
          </Col>
        </Row>
      </div>
    </>
  );
}
