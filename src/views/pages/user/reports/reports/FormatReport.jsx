import React from "react";
// @material-ui/core SafetyInbox
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import CloseIcon from '@material-ui/icons/Close';
// core SafetyInbox
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Button from "components/CustomButtons/Button";
import Grid from '@material-ui/core/Grid';
import { Col, Row } from 'reactstrap';
import { Field, Form } from "react-final-form";
import { TextField } from "final-form-material-ui";
import CustomSelect from "components/CustomSelect/CustomSelect";
import InputAdornment from "@material-ui/core/InputAdornment";
import StripeIcon from "components/Icons/StripesIcon";
import AddOutlined from "@material-ui/icons/AddOutlined";
import { isConstructorDeclaration } from "typescript";

const styles = {
  title: {
    fontSize: "18px",
    lineHeight: "22px",
    textAlign: "center",
    color: "#25345C",
    fontWeight: "700",
    marginBottom: 24,
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
  footer: {
    marginTop: 28,
  },
  buttonSetting: {
    width: "40px !important",
    height: "74ps !important",
    margin: "4px"
  },
  txtListHeader: {
    fontSize: "14px",
    lineHeight: "21px",
    color: "#C4C4C4",
    fontWeight: "400"
  },
  titleHeader: {
    fontSize: "14px",
    lineHeight: "22px",
    color: "#25345C",
    fontWeight: "700",
    marginBottom: "4",
    width: "500px"
  },
  listCard: {
    border: "1px solid rgba(236, 238, 240, 1)",
    borderRadius: "10px",
    marginBottom: 8
  },
  choicesAmount: {
    fontSize: "14px",
    lineHeight: "17px",
    color: "#B4B4B4 !important",
    fontWeight: "400",
  },
  dropdownItem: {
    marginLeft: "8px",
    fontWeight: 400,
    fontSize: '12px',
    color: '#25345C',
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  detail: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  detailColumn: {
    width: "250px"
  },
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#C4C4C4',
  },
  textInputRoot: {
    padding: "6px, 0, 9px !important",
    marginTop: "5px",
    marginBottom: "5px",
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C',
    "&>input": {
      padding: "6px, 0, 9px !important",
    }
  },
  selectField: {
    paddingTop: "27px",
    marginBottom: "3px",
    fontWeight: 700,
    fontSize: '14px',
    color: '#25345C',
    "&:focus": {
      background: "#FFFFFF",
    }
  },
  column: {
    display: "flex",
    alignItems: "flex-start",
    "&>div": {
      marginBottom: "0px !important",
    }
  },
  column1: {
    "&>div>div": {
      marginTop: "0px !important",
    }
  },
  row: {
    display: "flex",
    alignItems: "flex-end",
    paddingLeft: "16px"
  },
  row1: {
    paddingLeft: "5px",
  },
  addButton: {
    color: "#25345C !important",
    background: "#FFFFFF",
    padding: "12px,16px,12px,20px !important",
    marginTop: "12px",
    textTransform: 'initial',
    fontSize: '14px',
    lineHeight: '17px',
    fontStyle: 'normal',
    fontWeight: 700,
    boxShadow: 'none',
    "&:hover": {
      background: "#FFFFFF",
      boxShadow: "none",
    },
    "&:focus": {
      background: "#FFFFFF",
      boxShadow: 'none',
    },
  },
  title: {
    marginTop: "16px",
    fontSize: "18px",
    fontWeight: 700,
    color: "#25345C",
  },
  headColumn: {
    "&>div": {
      marginTop: "0px",
    }
  },
  footer: {
    marginTop: 28,
  },
  buttonSetting: {
    width: "40px !important",
    height: "74ps !important",
    margin: "4px"
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
  dialogTitle: {
    fontSize: "22px",
    fontWeight: "700",
    lineHeight: "26.4px",
    color: "#25345C"
  },
  dialogSubTitle: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#B4B4B4"
  },
  editHeader: {
    textAlign: "center"
  },
  pointer: {
    cursor: "pointer",
  }
};

const useStyles = makeStyles(styles);

export default function FormatReport(props) {
  const classes = useStyles();

  const onSubmit = async (values) => {
    console.log(values);
  }

  const [open, setOpen] = React.useState(true);
  const [currentTab, setCurrentTab] = React.useState();
  const [openForm, setOpenForm] = React.useState(false);
  const [selectValue, setSelectValue] = React.useState({
    stateProvince: "none",
  });
  const [selectedValue,setSelectedValue] = React.useState({
    "select1": "",
    "select2": "",
    "select3": ""
  })
  //User's input
  const [input, setInput] = React.useState({
    "input1": true,
    "input2": true,
    "input3": true,                                                                                               
  });

  const handleDeleteInput = selectedInput => {
    setInput({
      ...input,
      [selectedInput]: false,
    });
  }

  // const handleChange = (event) => {
  //   setSelectValue({ ...selectValue, [event.target.name]: event.target.value })
  // }

  const handleSelect = (e,choice) => {
    console.log(choice);
    console.log(e.target.value);
    setSelectedValue({
      ...selectedValue,
      [choice]: e.target.value
    })
  }

  const handleClick = (tabName) => {
    console.log(`on click tab: ${tabName}`);
    if (tabName === currentTab) {
      setOpen(!open);
    } else {
      setOpen(true);
      setCurrentTab(tabName);
    }
  };

  const isOpenList = (tabName) => {
    return open && currentTab === tabName;
  };

  const listTags = {
    driver1: ["Created At", "ELD exempt", "Is deactivated", "License state"],
    driver2: ["Driver name", "ELD exempt reason", "License number", "Notes"],
  }

  const [checked, setChecked] = React.useState({
    tags: [1],
    dutyStatus: [1],
    violations: [1]
  });
  const handleToggle = (value) => (event) => {
    const currentIndex = checked[event.target.name].indexOf(value);
    const newChecked = { ...checked };
    if (currentIndex === -1) {
      newChecked[event.target.name].push(value);
    } else {
      newChecked[event.target.name].splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const openAssignHOS = () => {
    setOpenForm(true)
  };

  const closeAssignHOS = () => {
    setOpenForm(false)
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate className={classes.form} style={{ maxWidth: "700" }}>
            <Row style={{ paddingLeft: "5px" }}>
              <Col className={classes.headColumn}>
                <Field
                  id="standard-full-width"
                  label="Report name"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="tags"
                  InputLabelProps={{
                    shrink: true,
                    classes: { root: classes.textFieldRoot }
                  }}
                  InputProps={{
                    classes: { input: classes.textInputRoot }
                  }}
                  component={TextField}
                />
              </Col>
            </Row>

            <Row className={classes.row1}>
              <Col className={classes.column1}>
                <div className={classes.title}>Column Selected</div>
              </Col>
              <Col className={classes.column1}>
                <div className={classes.title}>Rename column (optional)</div>
              </Col>
            </Row>
          
            {input["input1"] && <Row className={classes.row}>
              <StripeIcon />
              <Col className={classes.column1}>
                <Field
                  labelProps={{
                    shrink: true,
                    classes: { root: classes.textFieldRoot }
                  }}
                  selectProps={{
                    classes: { root: classes.selectField }
                  }}
                  name={"select1"}
                  listValues={["Eld Exempt", "Hello"]}
                  // placeholder={select}
                  selectValue={selectedValue["select1"]}
                  IconComponent={{
                    classes: { root: classes.iconDropdown }
                  }}
                  onChange={()=>{handleSelect(Object.keys(selectedValue)[0])}}
                  component={CustomSelect}
                />
              </Col>
              <Col className={classes.column}>
                <Field
                  id="standard-full-width1"
                  value={input}
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="input1"
                  InputLabelProps={{
                    shrink: true,
                    classes: { root: classes.textFieldRoot }
                  }}
                  InputProps={{
                    classes: { input: classes.textInputRoot },
                    endAdornment: (
                      <InputAdornment position="start" className={classes.pointer}>
                        <CloseIcon onClick={()=>{handleDeleteInput(Object.keys(input)[0])}} />
                      </InputAdornment>
                    ),
                  }}
                  component={TextField}
                />
              </Col>
            </Row>}
            
            {input["input2"] && <Row className={classes.row}>
              <StripeIcon />
              <Col>
                <Field
                  labelProps={{
                    shrink: true,
                    classes: { root: classes.textFieldRoot }
                  }}
                  selectProps={{
                    classes: { root: classes.selectField }
                  }}
                  name={"select2"}
                  listValues={["Created At"]}
                  // placeholder={"Created At"}
                  selectValue={selectedValue["select2"]}
                  IconComponent={{
                    classes: { root: classes.iconDropdown }
                  }}
                  onChange={()=>{handleSelect(Object.keys(selectedValue)[1])}}
                  component={CustomSelect}
                />
              </Col>
              <Col className={classes.column}>
                <Field
                  id="standard-full-width2"

                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="input2"
                  InputLabelProps={{
                    shrink: true,
                    classes: { root: classes.textFieldRoot }
                  }}
                  InputProps={{
                    classes: { input: classes.textInputRoot },
                    endAdornment: (
                      <InputAdornment position="start" className={classes.pointer}>
                        <CloseIcon onClick={()=>{handleDeleteInput(Object.keys(input)[1])}}/>
                      </InputAdornment>
                    ),
                  }}
                  component={TextField}
                />
              </Col>
            </Row>}

            {input["input3"] && <Row className={classes.row}>
              <StripeIcon />
              <Col>
                <Field
                  labelProps={{
                    shrink: true,
                    classes: { root: classes.textFieldRoot }
                  }}
                  selectProps={{
                    classes: { root: classes.selectField }
                  }}
                  name={"select3"}
                  listValues={["Driver Name"]}
                  // placeholder={"Driver Name"}
                  selectValue={selectedValue["select3"]}
                  IconComponent={{
                    classes: { root: classes.iconDropdown }
                  }}
                  onChange={()=>{handleSelect(Object.keys(selectedValue)[2])}}
                  component={CustomSelect}
                />
              </Col>
              <Col className={classes.column}>
                <Field
                  id="standard-full-width3"

                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="input3"
                  InputLabelProps={{
                    shrink: true,
                    classes: { root: classes.textFieldRoot }
                  }}
                  InputProps={{
                    classes: { input: classes.textInputRoot },
                    endAdornment: (
                      <InputAdornment position="start" className={classes.pointer}>
                        <CloseIcon onClick={()=>{handleDeleteInput(Object.keys(input)[2])}}/>
                      </InputAdornment>
                    ),
                  }}
                  component={TextField}
                />
              </Col>
            </Row>}
            <Grid item xs={12} xl={12}>
              <Button
                className={classes.addButton}
                startIcon={<AddOutlined />}
              // onClick={openAssignHOS}
              >
                Add Column
              </Button>
            </Grid>

            <div className={classes.footer}>
              <div className={classes.selectButton}>
                <Button
                  type="button"
                  round
                  className={`btn-round-active-2 ${classes.buttonSetting}`}
                  onClick={props.handleClose}
                > Cancel
                </Button>
                <Button
                  round
                  className={`btn-round-active ${classes.buttonSetting}`}
                  type="submit"
                  disabled={submitting}
                  onClick={props.handleOpen}
                > Next
                </Button>
              </div>
            </div>

          </form>
        )}
      />
    </div>
  );
}