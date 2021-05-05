import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import ArrowLeftIcon from "components/Icons/ArrowLeftIcon";
import RadioButton from "../../../Components/RadioButton";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput.js";

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
    paddingLeft: "7px !important",
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
    paddingTop: "30px",
  },
  cardMultipleContent: {
    paddingLeft: "6px !important",
    paddingBottom: "20px !important",
  },
  gridContent: {
    display: "flex",
    alignItems: "center",
    padding: "0px 0px 21px 0px !important",
  },
  cardItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px 0px !important",
  },
  headerItem: {
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    fontFamily: "Lato",
    padding: "9px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  contentItem: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Lato",
    padding: "0px 0px 0px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
    textAlign: "left",
  },
  rightSideContent: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 !important",
  },
  searchButton: {
    border: "1px solid #ECEEF0",
    borderRadius: "8px",
    width: "40px",
    height: "40px",
    padding: "0px !important",
    alignItems: "center",
    margin: "0px !important",
  },
  inputField: {
    margin: "5px 0px",
    width: "100%",
    textAlign: "center !important",
    padding: "0 0 9px 11px",
    color: "red !important",
  },
  cardBody: {
    paddingRight: "0px !important",
  },
  timeUnit: {
    padding: "8px !important ",
    textAlign: "left",
    fontSize: "12px",
    fontWeight: 700,
    color: "#B4B4B4",
  },
  timeInput: {
    padding: "0px !important ",
    textAlign: "right",
  },
});

const useStyles = makeStyles(styles);

export default function ConfigureDetails() {
  const classes = useStyles();
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
            <CustomInput
              formControlProps={{
                className: classes.searchButton,
              }}
              inputProps={{
                disableUnderline: true,
                className: classes.inputField,
              }}
            />
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
              <span>mph</span>
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
            <CustomInput
              formControlProps={{
                className: classes.searchButton,
              }}
              inputProps={{
                disableUnderline: true,
                className: classes.inputField,
              }}
            />
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}
