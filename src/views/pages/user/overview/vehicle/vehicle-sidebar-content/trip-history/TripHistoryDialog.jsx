import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Form} from "react-final-form";
import Select from "components/CustomSelect/Select";
import Button from "components/CustomButtons/Button";
import {Col, Row} from "reactstrap";
import CustomInput from "components/CustomInput/CustomInput";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import availablefootage from "assets/img/availablefootage.png"
import CustomTimeline from "components/CustomTimeline/CustomTimeline";
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";
import {GOOGLE_MAP_API_KEY} from "config/constants";

const styles = {
  formRow: {
    marginBottom: 16
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end"
  },
  formText: {
    fontSize: "14px",
    fontFamily: 'Lato',
    fontWeight: "400",
  },
  formTextSpan: {
    paddingLeft: "30px",
    color: "#a5a5a5",
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
  selectField: {
    paddingTop: "18px",
    paddingBottom: "10px",
    fontWeight: 700,
    fontSize: '14px',
    color: '#25345C',
  },
  textSelect: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C'
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  sidebarInput: {
    width: "100%",
    paddingTop: "24px",
  },
  footage: {
    width: 500
  },
  mapDemo: {
    width: 250
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
  tripContainer: {
    marginBottom: "12px !important"
  },
  tripContent: {
    paddingLeft: "5px",
    minWidth: "237px !important"
  },
  timeline: {
    position: "relative",
    right: "17px",
    maxWidth: "150px"
  },
}
const useStyles = makeStyles(styles);

const RegularMap = withScriptjs(
  withGoogleMap((props) => {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={props.center}
        defaultOptions={{
          scrollwheel: false,
          mapTypeControl: false,
          streetViewControl: false
        }}
      />
    )
  })
);

export default function TripHistoryDialog(props) {
  const classes = useStyles()

  const [selectValue, setSelectValue] = useState({
    role: "none",
  });

  const onSubmit = async (values) => {
    console.log(values);
  }
  const validate = (values) => {
    const errors = {};
    if (!values.name)
      errors.name = 'Name must not be empty!';
    return errors;
  };

  const statusOptions = [
    {
      label: (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSelect}>405</div>
        </div>
      ),
      value: "Value1",
    },
    {
      label: (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSelect}>539</div>
        </div>
      ),
      value: "Value2",
    },
    {
      label: (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSelect}>111</div>
        </div>
      ),
      value: "Value3",
    }
  ]

  const durationOptions = [
    {
      label: (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSelect}>1 minute</div>
        </div>
      ),
      value: "Value1",
    },
    {
      label: (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSelect}>2 minute</div>
        </div>
      ),
      value: "Value2",
    },
    {
      label: (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSelect}>3 minute</div>
        </div>
      ),
      value: "Value3",
    }
  ]

  const [inputValue, setInputValue] = useState({
    date: ""
  })

  const handleInputChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    })
  }

  const timelineContent = [
    {
      title: "B",
      content: <div className={classes.tripContent}>
        <div className={classes.dest}> Highway 401Express, Mississauga, ON</div>
        <div className={classes.time}> 11:38 AM EDT</div>
      </div>,
      color: "green",
    },
    {
      title: "A",
      content: <div className={classes.tripContent}>
        <div className={classes.dest}> Highway 401Express, Mississauga, ON</div>
        <div className={classes.time}>Mar 22, 11:37 AM EDT</div>
      </div>,
      color: "red",
    }
  ]

  const renderMap = () => {
    return (
      <div style={{position: 'relative'}}>
        <RegularMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`}
          loadingElement={<div style={{height: 280}}/>}
          containerElement={<div/>}
          mapElement={<div style={{height: 280, borderRadius: 12}}/>}
          isMarkerShown
          data={props.vehicles}
          center={{lat: 40.748817, lng: -73.985428}}
        />
      </div>
    )
  }

  return (
    <div>
      <Form
        style={{overflow: "unset"}}
        onSubmit={onSubmit}
        validate={validate}
        render={({handleSubmit, reset, submitting, pristine, values}) => {
          return (
            <form onSubmit={handleSubmit} noValidate>
              <Row>
                <Col>
                  <Select
                    label="Vehicle"
                    fullWidth={true}
                    defaultValue={null}
                    options={statusOptions}
                    placeholder="Start typing..."
                    SelectProps={{isClearable: false}}
                    onChange={(value) => {
                      console.log(value);
                    }}
                  />
                </Col>
                <Col>
                  <CustomInput
                    labelText="Date"
                    name="date"
                    formControlProps={{
                      className: classes.sidebarInput
                    }}
                    inputProps={{
                      placeholder: "Enter assets",
                      onChange: handleInputChange,
                      defaultValue: "Mar 22, 2021",
                      classes: {input: classes.textInputRoot},
                    }}
                    labelProps={{
                      shrink: true,
                      classes: {root: classes.textFieldRoot}
                    }}
                  />
                </Col>
              </Row>
              <Card>
                <CardBody>
                  <img src={availablefootage} className={classes.footage}/>
                </CardBody>
              </Card>
              <Row>
                <Col>
                  <CustomInput
                    labelText="Time"
                    name="time"
                    formControlProps={{
                      className: classes.sidebarInput
                    }}
                    inputProps={{
                      placeholder: "Enter time",
                      onChange: handleInputChange,
                      defaultValue: "11:37 AM",
                      classes: {input: classes.textInputRoot},
                    }}
                    labelProps={{
                      shrink: true,
                      classes: {root: classes.textFieldRoot}
                    }}
                  />
                </Col>
                <Col>
                  <Select
                    label="Duration"
                    fullWidth={true}
                    defaultValue={null}
                    options={durationOptions}
                    placeholder="Start typing..."
                    SelectProps={{isClearable: false}}
                    onChange={(value) => {
                      console.log(value);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  {renderMap()}
                </Col>
                <Col>
                  <div className={classes.tripContainer}>
                    <div className={classes.timeline}>
                      <CustomTimeline
                        timelineContent={timelineContent}
                        classes={{
                          root: classes.timelineContent
                        }}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <div className={classes.selectButton}>
                <Button
                  type="button"
                  round
                  className="btn-round-active-2 mr-2"
                  onClick={props.close}
                >
                  Cancel
                </Button>
                <Button
                  round
                  className="btn-round-active mr-2"
                  type="submit"
                  disabled={submitting}
                > Save
                </Button>
              </div>
            </form>
          )
        }}
      />
    </div>
  )
}