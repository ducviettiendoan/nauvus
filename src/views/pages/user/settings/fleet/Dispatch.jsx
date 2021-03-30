import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import { Divider,Typography  } from "@material-ui/core";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";

import CustomInput from "components/CustomInput/CustomInput.js";

const styles = {
  cardMultipleContent: {
    paddingLeft: "6px !important",
    paddingBottom: "20px !important"
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
    padding: "0px 0px !important"
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

  rightSideContent:{
    display: 'flex', 
    justifyContent: "flex-end", 
    alignItems: "center",
  },
  departureContent: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },



  searchButton: {
    border: "1px solid #ECEEF0",
    borderRadius: "8px",
    width: "40px",
    height: "40px",
    padding: "0px !important",    
    display: 'flex',
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
  boxGap:{
    marginLeft: "8px",
    fontWeight: 700,
    fontSize: "12px",
    color: "#B4B4B4",
  },
  boxFlex:{
    display: "flex", 
    justifyContent: "flex-end",
  },

  startGap:{
    marginRight: "20px",
  },

  endGap:{
    marginRight: "25px",
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
                <CardBody>
               <GridItem className={classes.cardMultipleContent} xs={12} sm={12} md={12} >
                    <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
                      <GridItem className={classes.cardItem} xs={8} sm={8} md={8}>
                        <GridItem className={classes.headerItem}>
                        Route Tracking Window
                        </GridItem>
                        <GridItem className={classes.contentItem} >
                        Expand the route tracking window beyond the scheduled start and end times. 
                        </GridItem>
                      </GridItem>
                      <GridItem xs={4} sm={4} md={4}>
                        <GridContainer>
                          <GridItem xs={8} className={classes.boxFlex}>
                            <Typography className={classes.startGap}>Start</Typography>                     
                           </GridItem>
                          <GridItem xs={4} className={classes.boxFlex}>
                            <Typography className={classes.endGap}>End</Typography>
                          </GridItem>
                        </GridContainer>
                        <GridContainer>
                          <GridItem xs={8} className={classes.rightSideContent}>
                              <CustomInput
                                formControlProps={{
                                  className: classes.searchButton
                                }}
                                inputProps={{
                                  disableUnderline: true,
                                  className: classes.inputField                                  
                                }}
                                InputProps={{
                                  className: classes.multilineColor
                                }}                              
                              />
                              <div className={classes.boxGap}>h</div>
                          </GridItem>

                          <GridItem xs={4} className={classes.rightSideContent}>
                            <CustomInput
                                formControlProps={{
                                  className: classes.searchButton
                                }}
                                inputProps={{
                                  disableUnderline: true,
                                  className: classes.inputField
                                }}
                              />
                            <div className={classes.boxGap}>h</div>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                    </GridItem>
                    <Divider variant="fullWidth" light />
                </GridItem>                           
                <GridItem className={classes.cardMultipleContent} xs={12} sm={12} md={12} >
                    <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
                      <GridItem className={classes.cardItem} xs={7} sm={7} md={7}>
                        <GridItem className={classes.headerItem}>
                        Default Route Stop Time
                        </GridItem>
                        <GridItem className={classes.contentItem} >
                        Set the default amount of time at a stop, which will automatically determine the stop's scheduled departure time.
                        </GridItem>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5} >
                        <GridContainer>
                          <GridItem xs={6}>

                          </GridItem>
                          <GridItem xs={6}>
                            <GridContainer className={classes.departureContent}>
                              <Typography>
                                Default stop time
                              </Typography>
                            </GridContainer>
                            <GridContainer>
                              <GridItem xs={6} className={classes.rightSideContent}>
                                {/* <TextField id="outlined-basic" variant="outlined" style={{width: '55px', marginRight:"10px"}}/> */}
                                <CustomInput
                                  formControlProps={{
                                    className: classes.searchButton
                                  }}
                                  inputProps={{
                                    disableUnderline: true,
                                    className: classes.inputField
                                  }}
                                />
                                <div className={classes.boxGap}>h</div>
                              </GridItem>
                              <GridItem xs={6} className={classes.rightSideContent}>
                                <CustomInput

                                  formControlProps={{
                                    className: classes.searchButton
                                  }}
                                  inputProps={{
                                    disableUnderline: true,
                                    className: classes.inputField
                                  }}
                                />
                                <div className={classes.boxGap}>min</div>
                              </GridItem>
                            </GridContainer>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                    </GridItem>
                    <Divider variant="fullWidth" light />
                </GridItem>
                <GridItem className={classes.cardMultipleContent} xs={12} sm={12} md={12} >
                    <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
                      <GridItem className={classes.cardItem} xs={7} sm={7} md={7}>
                        <GridItem className={classes.headerItem}>
                        Route Stop Thresholds
                        </GridItem>
                        <GridItem className={classes.contentItem} >
                        Configure how long a vehicle needs to be at a stop for it to count as an arrival and departed from a stop to count as a departure.
                        </GridItem>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5} >
                        <GridContainer>
                        <GridItem xs={6}>
                        <GridContainer className={classes.rightSideContent}>                         
                          <Typography> 
                           Arrival threshold
                          </Typography>
                          <GridItem xs={4}></GridItem>
                        </GridContainer>
                        <GridContainer>
                          <GridItem xs={6} className={classes.rightSideContent}>
                              <CustomInput
                                formControlProps={{
                                  className: classes.searchButton
                                }}
                                inputProps={{
                                  disableUnderline: true,
                                  className: classes.inputField
                                }}

                              />
                              <div className={classes.boxGap}>min</div>
                          </GridItem>
                          <GridItem xs={6} className={classes.rightSideContent}>
                            <CustomInput
                                formControlProps={{
                                  className: classes.searchButton
                                }}
                                inputProps={{
                                  disableUnderline: true,
                                  className: classes.inputField
                                }}
                              />
                            <div className={classes.boxGap}>sec</div>
                          </GridItem>
                        </GridContainer>
                        </GridItem>
                        <GridItem xs={6}>
                        <GridContainer className={classes.departureContent}>
                          <Typography> 
                          Departure threshold
                          </Typography>
                        </GridContainer>
                        <GridContainer>
                          <GridItem xs={6} className={classes.rightSideContent}>
                              <CustomInput
                                formControlProps={{
                                  className: classes.searchButton
                                }}
                                inputProps={{
                                  disableUnderline: true,
                                  className: classes.inputField
                                }}
                              />
                              <div className={classes.boxGap}>min</div>
                          </GridItem>
                          <GridItem xs={6} className={classes.rightSideContent}>
                             <CustomInput
                                formControlProps={{
                                  className: classes.searchButton
                                }}
                                inputProps={{
                                  disableUnderline: true,
                                  className: classes.inputField
                                }}
                              />
                            <div className={classes.boxGap}>sec</div>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                      </GridContainer>
                      </GridItem>
                    </GridItem>
                    <Divider variant="fullWidth" light />
                </GridItem>
                <GridItem className={classes.cardMultipleContent} xs={12} sm={12} md={12} >
                    <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
                      <GridItem className={classes.cardItem} xs={8} sm={8} md={8}>
                        <GridItem className={classes.headerItem}>
                        Route Stop Timeliness Window
                        </GridItem>
                        <GridItem className={classes.contentItem} >
                        Define the time window before and after a stop's scheduled arrival time that's considered "on time."
                        </GridItem>
                      </GridItem>
                      <GridItem xs={4} sm={4} md={4} style={{paddingRight:"10px"}}>
                        <GridContainer>
                          <GridItem xs={8} className={classes.boxFlex}>
                            <Typography className={classes.startGap}>Start</Typography>                           
                          </GridItem>
                          <GridItem xs={4} className={classes.boxFlex}>
                            <Typography className={classes.endGap}>End</Typography>
                          </GridItem>
                        </GridContainer>
                        <GridContainer>
                          <GridItem xs={8} className={classes.rightSideContent}>
                              <CustomInput
                                formControlProps={{
                                  className: classes.searchButton
                                }}
                                inputProps={{
                                  disableUnderline: true,
                                  className: classes.inputField
                                }}
                              />
                              <div className={classes.boxGap}>h</div>
                          </GridItem>
                          <GridItem xs={4} className={classes.rightSideContent}>
                            <CustomInput
                                formControlProps={{
                                  className: classes.searchButton
                                }}
                                inputProps={{
                                  disableUnderline: true,
                                  className: classes.inputField
                                }}
                              />
                            <div className={classes.boxGap}>h</div>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                    </GridItem>
                    <Divider variant="fullWidth" light />
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
