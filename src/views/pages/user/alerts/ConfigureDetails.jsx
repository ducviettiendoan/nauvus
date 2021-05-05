import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import ArrowLeftIcon from "components/Icons/ArrowLeftIcon";
import RadioButton from "../../../Components/RadioButton";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput.js";
import TrashButton from "components/CustomButtons/TrashButton";
import EditButton from "components/CustomButtons/EditButton";
import Divider from "@material-ui/core/Divider";
import Select from "components/CustomSelect/Select";
import Calendar from "components/Calendar/Calendar";
import AddButton from "components/CustomButtons/AddButton";
import DateTimeRangePicker from "components/CustomDateRangePicker/DateTimeRangePicker";

const styles = (theme) => ({
  configureHeaderContainer: {
    display: "flex",
    alignItems: "center",
  },
  configureHeader: {
    fontFamily: "Lato",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "18px",
    color: "#25345C",
  },
  configureRadio: {
    display: "flex",
    alignItems: "center",
    paddingRight: "0px !important",
    paddingLeft: "20px !important",
    paddingBottom: "15px !important",
  },
  configureRadioText: {
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16.8px",
    color: "#25345C",
  },
  configureRadioContainer: {
    paddingTop: "25px",
  },
  searchButton: {
    border: "1px solid #ECEEF0",
    borderRadius: "8px",
    width: "40px",
    height: "40px",
    padding: "0px !important",
    alignItems: "center",
    margin: "0px !important",
    marginRight: "10px !important",
  },
  inputField: {
    margin: "5px 0px",
    width: "100%",
    textAlign: "center !important",
    padding: "0 0 9px 11px",
    color: "red !important",
  },
  timeInput: {
    padding: "0px !important ",
    textAlign: "right",
  },
  inputUnit: {
    textAlign: "left",
    fontSize: "12px",
    fontWeight: 700,
    color: "#B4B4B4",
  },
  dividerLine: {
    marginTop: "10px !important",
    marginLeft: "10px !important",
  },
  configureAssetHeader: {
    fontFamily: "Lato",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "18px",
    color: "#25345C",
    paddingLeft: "30px !important",
  },
  configureAssetButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "0px !important",
  },
  select: {
    paddingLeft: "40px",
    paddingBottom: "18px",
  },
  selectValue: {
    fontFamily: "Lato",
    fontSize: "14px",
    fontWeight: 700,
    color: "#B4B4B4",
  },
  assetHeadInput: {
    display: "flex",
    alignItems: "center",
    paddingRight: "0px !important",
    paddingLeft: "26px !important",
    paddingBottom: "15px !important",
  },
  selectBox: {
    marginRight: "8px",
  },
});

const useStyles = makeStyles(styles);

export default function ConfigureDetails() {
  const classes = useStyles();

  const statusOptions = [
    {
      label: <div className={classes.selectValue}>Start typing...</div>,
      value: 1,
    },
    {
      label: <div className={classes.selectValue}>Asset 1</div>,
      value: 2,
    },
    {
      label: <div className={classes.selectValue}>Asset 2</div>,
      value: 3,
    },
  ];

  const listValues = [
    { label: "Disable", value: 1 },
    { label: "Enable", value: 2 },
  ];

  const [timeState, setTimeState] = React.useState({
    start: "12:00",
    end: "12:00",
  });

  return (
    <>
      <div className={classes.configureHeaderContainer}>
        <Button
          className="btn-transparent 2 w-84 h-41 mr-3"
          startIcon={<ArrowLeftIcon />}
        >
          Back
        </Button>
        <span className={classes.configureHeader}>New Speed Alert</span>
      </div>
      <div className={classes.configureRadioContainer}>
        <GridContainer>
          <GridItem xs={6} className={classes.configureRadio}>
            <RadioButton />
            <span className={classes.configureRadioText}>
              Alert if speed is above
            </span>
          </GridItem>
          <GridItem xs={6} className={classes.timeInput}>
            <div>
              <CustomInput
                formControlProps={{
                  className: classes.searchButton,
                }}
                inputProps={{
                  disableUnderline: true,
                  className: classes.inputField,
                }}
              />
              <span className={classes.inputUnit}>mph</span>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={6} className={classes.configureRadio}>
            <RadioButton />
            <span className={classes.configureRadioText}>
              Alert if speed is above
            </span>
          </GridItem>
          <GridItem xs={6} className={classes.timeInput}>
            <div>
              <CustomInput
                formControlProps={{
                  className: classes.searchButton,
                }}
                inputProps={{
                  disableUnderline: true,
                  className: classes.inputField,
                }}
              />
              <span className={classes.inputUnit}>mph</span>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={6} className={classes.configureRadio}>
            <RadioButton />
            <span className={classes.configureRadioText}>
              Alert if speed is above
            </span>
          </GridItem>
          <GridItem xs={6} className={classes.timeInput}>
            <div style={{ marginRight: "14px" }}>
              <CustomInput
                formControlProps={{
                  className: classes.searchButton,
                }}
                inputProps={{
                  disableUnderline: true,
                  className: classes.inputField,
                }}
              />
              <span className={classes.inputUnit}>%</span>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      <Divider variant="fullWidth" light className={classes.dividerLine} />
      <div className={classes.configureHeaderContainer}>
        <GridContainer
          className={classes.configureHeaderContainer}
          style={{ paddingTop: "14px" }}
        >
          <GridItem xs={6} className={classes.configureAssetHeader}>
            Assets this alert applies to:
          </GridItem>
          <GridItem xs={6} className={classes.configureAssetButton}>
            <TrashButton />
            <EditButton />
          </GridItem>
        </GridContainer>
      </div>

      <div className={classes.configureRadioContainer}>
        <GridContainer>
          <GridItem className={classes.configureRadio}>
            <RadioButton />
            <span className={classes.configureRadioText}>Specific tags</span>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem className={classes.configureRadio}>
            <RadioButton />
            <span className={classes.configureRadioText}>Specific assets</span>
          </GridItem>
        </GridContainer>
        <Select
          className={classes.select}
          label="Specific assets"
          fullWidth={true}
          value={1}
          options={statusOptions}
          SelectProps={{ isClearable: false }}
          onChange={(value) => {
            console.log(value);
          }}
        />
        <GridContainer>
          <GridItem className={classes.configureRadio}>
            <RadioButton />
            <span className={classes.configureRadioText}>All assets</span>
          </GridItem>
        </GridContainer>
        <Divider variant="fullWidth" light className={classes.dividerLine} />
        <GridContainer
          className={classes.configureHeaderContainer}
          style={{ paddingTop: "14px" }}
        >
          <GridItem xs={6} className={classes.assetHeadInput}>
            <span className={classes.configureRadioText}>
              Only alert if this condition holds for more than
            </span>
          </GridItem>
          <GridItem xs={6} className={classes.timeInput}>
            <div>
              <CustomInput
                formControlProps={{
                  className: classes.searchButton,
                }}
                inputProps={{
                  disableUnderline: true,
                  className: classes.inputField,
                }}
              />
              <span className={classes.inputUnit}>min</span>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      <Divider variant="fullWidth" light className={classes.dividerLine} />
      <div className={classes.configureHeaderContainer}>
        <GridContainer
          className={classes.configureHeaderContainer}
          style={{ paddingTop: "14px" }}
        >
          <GridItem xs={3} className={classes.configureAssetHeader}>
            Schedule
          </GridItem>
          <GridItem xs={9} className={classes.configureAssetButton}>
            <Select
              className={classes.selectBox}
              options={listValues}
              variant="outlined"
              value={1}
              onChange={(value) => {
                console.log(value);
              }}
            />
            <Calendar isNotContainer={true} />
            <TrashButton />
            <AddButton />
          </GridItem>
        </GridContainer>
      </div>
      <DateTimeRangePicker timeState={timeState} setTimeState={setTimeState} />
      <Divider variant="fullWidth" light className={classes.dividerLine} />
    </>
  );
}
