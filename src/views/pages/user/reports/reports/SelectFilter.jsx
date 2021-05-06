import React from "react";
// @material-ui/core SafetyInbox
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import CloseIcon from '@material-ui/icons/Close';
// core SafetyInbox
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import CheckSquareOutlined from "components/Icons/CheckSquareOutlined";
import Grid from '@material-ui/core/Grid';
import { Col, Row } from 'reactstrap';
import { Field, Form } from "react-final-form";
import { TextField } from "final-form-material-ui";
import Accordion from "components/Accordion/Accordion";
import CustomSelect from "components/CustomSelect/CustomSelect";
import InputAdornment from "@material-ui/core/InputAdornment";
import StripeIcon from "../../../../../components/Icons/StripesIcon";
import AddOutlined from "@material-ui/icons/AddOutlined";
import { isClassExpression } from "typescript";


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
  contentHead: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#25345C",
  },
  contentBody: {
    fontSize: "12px",
    fontWeight: 400,
    color: '#25345C',
  }
};

const useStyles = makeStyles(styles);

export default function SelectFilter(props) {
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

  const handleChange = (event) => {
    setSelectValue({ ...selectValue, [event.target.name]: event.target.value })
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
            <Row style={{paddingLeft: "5px"}}>
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

            <GridItem xs={12} lg={12}>
              <div className={classes.contentHead}>Choose a date range</div>
              <div className={classes.contentBody}>Select up to 90 days of data. Reports containing more than 14 days of data will be emailed.</div>
            </GridItem>

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
                  onClick={openAssignHOS}
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