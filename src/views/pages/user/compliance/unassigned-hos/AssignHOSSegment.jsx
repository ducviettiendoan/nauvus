import React, {useState} from "react";
// @material-ui/core SafetyInbox
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core SafetyInbox
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
import Initials from "components/Initials/Initials";
import Trip from "./trip/Trips";

const styles = {
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#C4C4C4',
    marginTop: "16px"
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
    paddingTop: "50px"
  },
  trip: {
      margin: 16,
      marginBottom: 0 
  },
  footer: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "0 !important"
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
    justifyContent: "flex-end",
    position: "absolute",
    bottom: "25px"
  },
  form: {
    display: "flex",
    justifyContent: "space-between"
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
    fontWeight: "400",
    display: "flex"
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
  },
  listCheckItems: {
    textAlign: "left",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "18px",
    color: "#25345C",
  },
  clockDetail: {
    paddingTop: "8px",
  },
  toDistance: {
    color: "#B4B4B4"
  },
  driverStatus: {
    paddingLeft: "20px"
  },
  listItem: {
    paddingLeft: "0 !important",
    position: "relative",
    right: "20px"
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
          <form onSubmit={handleSubmit} noValidate className={classes.form} style={{maxWidth:"700"}}>
            <div className={classes.detail}>
            <img src={map} alt="map" className={classes.map}/>
            <Trip />
            
            <div className={classes.tripInfo}>
              <TruckIcon /> 537
            </div>
            <div className={classes.dest}>
              <ClockIcon /> 
              <div className={classes.clockDetail}>16m 1s <span className={classes.toDistance}>(6.0 km)</span></div>
            </div>
            </div>
            <div className={classes.driverStatus}>
            <div className={classes.avatar}><img src={avatar} alt="user-avatar" className={classes.avatarImage} /></div>
            <div className={classes.textFieldRoot} style={{marginBottom: "-20px"}}>Driver</div>
            <div classname={classes.select}>
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
              <List className={classes.listCheck}>
                  {dutyStatus.map((value) => {
                    return (
                      <ListItem key={value} className={classes.listItem}>
                        <Col xs={1} className={classes.listCheckItems}>
                          <RadioButton/>
                        </Col>
                        <Col xs={1}> <Initials str={value} /> </Col>
                        <Col xs={9} className={classes.listCheckItems}>
                          {value}
                        </Col>
                      </ListItem>
                    );
                  })}
              </List>
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