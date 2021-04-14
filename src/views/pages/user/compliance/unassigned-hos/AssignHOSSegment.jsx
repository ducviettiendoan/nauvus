import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Button from "components/CustomButtons/Button";
import {Col, Row} from 'reactstrap';
import {Field, Form} from "react-final-form";
import avatar from "assets/img/faces/avatar.jpg";
import map from "assets/img/source-map.png";
import CustomSelect from "components/CustomSelect/CustomSelect";
import List from "@material-ui/core/List";
import RadioButton from "../../../../Components/RadioButton";
import {ListItem} from "@material-ui/core";
import TruckIcon from "components/Icons/TruckIcon";
import ClockIcon from "components/Icons/ClockIcon";

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
  loginTitle: {
    fontWeight: 700,
    fontSize: '18px',
    color: '#25345C',
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end"
  },
  destination: {
    fontSize: "14px",
    lineHeight: "18px",
    color: "#25345C",
  },
  source: {
    fontSize: "14px",
    lineHeight: "18px",
    color: "#25345C",
  },
  trip: {
      margin: 16,
      marginBottom: 0 
  },
  footer: {
      display: "flex",
      justifyContent: "space-between"
  },
  avatarImage: {
    width: "80px",
    height: "80px",
    borderRadius: "100%",
  },
  avatar: {
    display: "flex",
    justifyContent: "center"
  },
  initial: {
    backgroundColor: "#27AE60",
    borderRadius: "100%",
    width: "24px",
    height: "24px",
    textAlign: "center",
    color: "#FFFFFF"
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end"
  },
  form: {
    display: "flex",
    // width: "900px !important"
  },
  detail: {
    border: "1px solid #ECEEF0",
    borderRadius: "10px",
    padding: "10px"
  },
  map:{
    marginBottom: 16
  },
  dest: {
    fontSize: "14px",
    lineHeight: "18px",
    color: "#25345C",
    fontWeight: "400"
  },
  time: {
    fontSize: "12px",
    lineHeight: "18px",
    color: "#B4B4B4",
    fontWeight: "400",
    marginBottom: 4
  },
  tripInfo: {
    fontSize: "14px",
    lineHeight: "18px",
    color: "#25345C",
    fontWeight: "400",
    marginTop: 16
  }
};

const useStyles = makeStyles(styles);

export default function AssignHOSSegment(props) {
  const classes = useStyles();

  const onSubmit = async (values) => {
    console.log(values);
  }
 
  const [selectValue, setSelectValue] = useState({
    assign: "none",
  });
  
  const handleChange = (event) => {
    setSelectValue({...selectValue, [event.target.name]: event.target.value})
  }

  const dutyStatus = ["Driving", "Yard Move", "Personal Conveyance"]

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit, reset, submitting, pristine, values}) => (
          <form onSubmit={handleSubmit} noValidate className={classes.form}>
            <div className={classes.detail}>
            <img src={map} alt="map" className={classes.map}/>
            <div className={classes.dest}>Sante Drive, Vaughan, ON</div>
            <div className={classes.time}>2:13 PM EDT</div>
            <div className={classes.dest}>111 Transam Terminal</div>
            <div className={classes.time}>Apr 1, 2:57 PM EDT</div>
            <div className={classes.tripInfo}>
              <TruckIcon /> 537
            </div>
            <div className={classes.dest}>
              <ClockIcon /> 16m 1s (6.0 km)
            </div>
            </div>
            <div>
            <div className={classes.avatar}><img src={avatar} alt="user-avatar" className={classes.avatarImage} /></div>
            <div className={classes.textFieldRoot}>Driver</div>
            <div>
                <Field
                  id="standard-full-width"
                  fullWidth
                  margin="normal"
                  name="driver"
                  listValues={["Unassigned"]}
                  placeholder={"Unassigned"}
                  selectValue={selectValue.assign}
                  IconComponent={{
                    classes: {root: classes.iconDropdown}
                  }}
                  onChange={handleChange}
                  component={CustomSelect}
                />
            </div>
            <div className={classes.textFieldRoot}>Duty Status</div>
            <Row>
              <List className={classes.listCheck}>
                  {dutyStatus.map((value) => {
                    return (
                      <ListItem key={value}>
                        <Col xs={1} className={classes.listCheckItems}>
                          <RadioButton/>
                        </Col>
                        <Col xs={1}> <div className={classes.initial}>D</div></Col>
                        <Col xs={9} className={classes.listCheckItems}>
                          {value}
                        </Col>
                      </ListItem>
                    );
                  })}
              </List>
            </Row>
            <div className={classes.footer}>
            <div className={classes.selectButton}>
              <Button
                type="button"
                round
                className="btn-round-active-2 mr-2"
                onClick={props.handleClose}
              > Cancel
              </Button>
              <Button
                round
                className="btn-round-active mr-2"
                type="submit"
                disabled={submitting}
              > Save</Button>
            </div>
            </div>
            </div>
          </form>
        )}
      />
    </div>
  );
}