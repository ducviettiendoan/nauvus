import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import {Divider} from "@material-ui/core";
import CustomInput from "components/CustomInput/CustomInput.js";

const styles = {
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
    fontSize: '12px',
    fontWeight: 700,
    color: "#B4B4B4",
  },
  timeInput: {
    padding: "0px !important ",
  },
  timeLabel: {
    textAlign: "left",
    padding: "0px 0px 0px 15px!important ",
    fontSize: '14px',
    fontWeight: 700,
  },
  timeSetting: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0px !important ",

  },
};

const useStyles = makeStyles(styles);

export default function Dispatch() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card testimonial>
                <CardBody className={classes.cardBody}>
                  <GridItem className={classes.cardMultipleContent}>
                    <GridItem className={classes.gridContent}>
                      <GridItem xs={6} className={classes.cardItem}>
                        <GridItem className={classes.headerItem}>
                          Route Tracking Window
                        </GridItem>
                        <GridItem className={classes.contentItem}>
                          Expand the route tracking window beyond the scheduled start and end times.
                        </GridItem>
                      </GridItem>
                      <GridItem xs={6} className={classes.timeSetting}>
                        <GridContainer justify="flex-end">
                          <GridItem xs={2}>
                            <GridContainer>
                              <GridItem xs={12} className={classes.timeLabel}>
                                Start
                              </GridItem>
                              <GridItem xs={12}>
                                <GridContainer>
                                  <GridItem
                                    xs={6}
                                    className={classes.timeInput}
                                  >
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
                                  <GridItem
                                    xs={6}
                                    className={classes.timeUnit}
                                  >
                                    h
                                  </GridItem>
                                </GridContainer>
                              </GridItem>
                            </GridContainer>
                          </GridItem>
                          <GridItem xs={2}>
                            <GridContainer>
                              <GridItem
                                xs={12}
                                className={classes.timeLabel}
                              >
                                End
                              </GridItem>
                              <GridItem xs={12}>
                                <GridContainer>
                                  <GridItem
                                    xs={6}
                                    className={classes.timeInput}
                                  >
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
                                  <GridItem
                                    xs={6}
                                    className={classes.timeUnit}
                                  >
                                    h
                                  </GridItem>
                                </GridContainer>
                              </GridItem>
                            </GridContainer>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                    </GridItem>
                    <Divider variant="fullWidth" light/>
                  </GridItem>
                  <GridItem className={classes.cardMultipleContent}>
                    <GridItem className={classes.gridContent}>
                      <GridItem xs={6} className={classes.cardItem}>
                        <GridItem className={classes.headerItem}>
                          Default Route Stop Time
                        </GridItem>
                        <GridItem className={classes.contentItem}>
                          Set the default amount of time at a stop, which will automatically determine the stop's
                          scheduled departure time.
                        </GridItem>
                      </GridItem>
                      <GridItem xs={6} className={classes.timeSetting}>
                        <GridContainer justify="flex-end">
                          <GridItem xs={4}>
                            <GridContainer>
                              <GridItem xs={12}>
                                <GridContainer>
                                  <GridItem
                                    xs={12}
                                    className={classes.timeLabel}
                                  >
                                    Default stop time
                                  </GridItem>
                                  <GridItem
                                    xs={3}
                                    className={classes.timeInput}
                                  >
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
                                  <GridItem
                                    xs={3}
                                    className={classes.timeUnit}
                                  >
                                    h
                                  </GridItem>
                                  <GridItem
                                    xs={3}
                                    className={classes.timeInput}
                                  >
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
                                  <GridItem
                                    xs={3}
                                    className={classes.timeUnit}
                                  >
                                    min
                                  </GridItem>
                                </GridContainer>
                              </GridItem>
                            </GridContainer>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                    </GridItem>
                    <Divider variant="fullWidth" light/>
                  </GridItem>
                  <GridItem className={classes.cardMultipleContent}>
                    <GridItem className={classes.gridContent}>
                      <GridItem xs={6} className={classes.cardItem}>
                        <GridItem className={classes.headerItem}>
                          Route Stop Thresholds
                        </GridItem>
                        <GridItem className={classes.contentItem}>
                          Configure how long a vehicle needs to be at a stop for it to count as an arrival and departed
                          from a stop to count as a departure.
                        </GridItem>
                      </GridItem>
                      <GridItem xs={6} className={classes.timeSetting}>
                        <GridContainer justify="flex-end">
                          <GridItem xs={4}>
                            <GridContainer>
                              <GridItem xs={12}>
                                <GridContainer>
                                  <GridItem
                                    xs={12}
                                    className={classes.timeLabel}
                                  >
                                    Arrival threshold
                                  </GridItem>
                                  <GridItem
                                    xs={3}
                                    className={classes.timeInput}
                                  >
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
                                  <GridItem
                                    xs={3}
                                    className={classes.timeUnit}
                                  >
                                    min
                                  </GridItem>
                                  <GridItem
                                    xs={3}
                                    className={classes.timeInput}
                                  >
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
                                  <GridItem
                                    xs={3}
                                    className={classes.timeUnit}
                                  >
                                    sec
                                  </GridItem>
                                </GridContainer>
                              </GridItem>
                            </GridContainer>
                          </GridItem>
                          <GridItem xs={4}>
                            <GridContainer>
                              <GridItem xs={12}>
                                <GridContainer>
                                  <GridItem
                                    xs={12}
                                    className={classes.timeLabel}
                                  >
                                    Departure threshold
                                  </GridItem>
                                  <GridItem
                                    xs={3}
                                    className={classes.timeInput}
                                  >
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
                                  <GridItem
                                    xs={3}
                                    className={classes.timeUnit}
                                  >
                                    min
                                  </GridItem>
                                  <GridItem
                                    xs={3}
                                    className={classes.timeInput}
                                  >
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
                                  <GridItem
                                    xs={3}
                                    className={classes.timeUnit}
                                  >
                                    sec
                                  </GridItem>
                                </GridContainer>
                              </GridItem>
                            </GridContainer>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                    </GridItem>
                    <Divider variant="fullWidth" light/>
                  </GridItem>
                  <GridItem className={classes.cardMultipleContent}>
                    <GridItem className={classes.gridContent}>
                      <GridItem xs={6} className={classes.cardItem}>
                        <GridItem className={classes.headerItem}>
                          Route Stop Timeliness Window
                        </GridItem>
                        <GridItem className={classes.contentItem}>
                          Define the time window before and after a stop's
                          scheduled arrival time that's considered "on time."
                        </GridItem>
                      </GridItem>
                      <GridItem xs={6} className={classes.timeSetting}>
                        <GridContainer justify="flex-end">
                          <GridItem xs={2}>
                            <GridContainer>
                              <GridItem xs={12} className={classes.timeLabel}>
                                Start
                              </GridItem>
                              <GridItem xs={12}>
                                <GridContainer>
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
                                  <GridItem xs={6} className={classes.timeUnit}>
                                    min
                                  </GridItem>
                                </GridContainer>
                              </GridItem>
                            </GridContainer>
                          </GridItem>
                          <GridItem xs={2}>
                            <GridContainer>
                              <GridItem
                                xs={12}
                                className={classes.timeLabel}
                              >
                                End
                              </GridItem>
                              <GridItem xs={12}>
                                <GridContainer>
                                  <GridItem
                                    xs={6}
                                    className={classes.timeInput}
                                  >
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
                                  <GridItem
                                    xs={6}
                                    className={classes.timeUnit}
                                  >
                                    min
                                  </GridItem>
                                </GridContainer>
                              </GridItem>
                            </GridContainer>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                    </GridItem>
                    <Divider variant="fullWidth" light/>
                  </GridItem>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
