import React from "react";
// @material-ui/core SafetyInbox
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core SafetyInbox
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Button from "components/CustomButtons/Button";
import Grid from '@material-ui/core/Grid';
import { Col, Row } from 'reactstrap';
import { Field, Form } from "react-final-form";
import { TextField } from "final-form-material-ui";
import CustomDateRangePicker from "components/CustomDateRangePicker/CustomDateRangePicker";


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
 
  detail: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
    marginBottom: "10px",
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C',
    "&>input": {
      padding: "6px, 0, 9px !important",
    }
  },
  column: {
    display: "flex",
    alignItems: "flex-start",
    "&>div": {
      marginBottom: "0px !important",
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
    paddingLeft: "5px",
  },
  contentBody: {
    fontSize: "12px",
    fontWeight: 400,
    color: '#25345C',
    paddingLeft: "5px",
  },
  calendar: {
    "&>div":{
      display: "flex",
      justifyContent: "space-between"
    }
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
            <Row style={{ paddingLeft: "5px" }}>
              <Col className={classes.headColumn}>
                <Field
                  id="standard-full-width"
                  label="Choose filters to apply (optional)."
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

            <Grid item xs={12} lg={12}>
              <div className={classes.contentHead}>Choose a date range</div>
              <div className={classes.contentBody}>Select up to 90 days of data. Reports containing more than 14 days of data will be emailed.</div>
            </Grid>

            <Grid item xs={12} md={9} className={classes.calendar}>         
              <CustomDateRangePicker/>
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
                  onClick={props.handleCloseAll}
                > Save
                </Button>
              </div>
            </div>

          </form>
        )}
      />
    </div>
  );
}