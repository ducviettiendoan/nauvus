import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import TextField from '@material-ui/core/TextField';
import { Row, Col } from "reactstrap";
import OrganizationUpload from "components/CustomUpload/OrganizationUpload";

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
  }
};

const useStyles = makeStyles(styles);

export default function GeneralOrganization() {
  const classes = useStyles();
  return (
    <>
      <OrganizationUpload />
      <div>
        <Row style={{marginTop: '20px'}}>
          <Col xs={12} sm={12} md={6}>
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
          <Col xs={12} sm={12} md={6}>
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
