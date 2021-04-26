import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Calendar from "components/Calendar/Calendar";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
// import { CardBody } from "reactstrap";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import upload from "assets/img/Upload.png"
import front from "assets/img/bg-car.png";
import back from "assets/img/bg-car-back.png"
import AddOutlined from "@material-ui/icons/AddOutlined";
import ExpandMoreIcon from 'components/Icons/ExpandMoreIcon';
import RoundedTabs from "components/CustomTabs/RoundedTabs";

const useStyles = makeStyles((theme) => ({
    topHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        marginBottom: "0 !important"
    },
    topHeaderTitle: {
        textAlign: "left",
        fontWeight: 700,
        fontSize: 18,
        color: "#25345C",
        padding: "0 16px !important"
      },
      topHeaderButton: {
        textAlign: "right !important",
        display: "flex",
        alignItems: "center"
      },
      titleDetail: {
        fontSize: "14px",
        lineHeight: "17px",
        color: "#25345C",
        fontWeight: "700"
      },
      detail: {
        fontSize: "14px",
        lineHeight: "17px",
        color: "#B4B4B4",
        fontWeight: "400",

      },
      detailContainer: {
          display: "flex",
          justifyContent: "space-between",
      },
      titleResolve: {
        fontSize: "20px",
        lineHeight: "17px",
        color: "#25345C",
        fontWeight: "700",
        marginBottom: 8,
        marginTop: 24

      },
      detailResolve: {
        fontSize: "14px",
        lineHeight: "17px",
        color: "#B4B4B4",
        fontWeight: "400",
        marginBottom: 30
      },
      titleTask: {
        fontSize: "12px",
        lineHeight: "18px",
        color: "#B4B4B4",
        fontWeight: "700",
      },
      attachment: {
        fontSize: "18px",
        lineHeight: "27px",
        color: "#25345C",
        fontWeight: "700",
      },
      dueTo: {
        fontSize: "12px",
        lineHeight: "18px",
        color: "#25345C",
        fontWeight: "700",  
      },
      status: {
        fontSize: "12px",
        lineHeight: "18px",
        color: "#B4B4B4",
        fontWeight: "700",  
      },
      icon:{
          color: "#fff",
          marginLeft: "-10px",
          width: "26x",
          height: "24px"
      },
      upload: {
        fontSize: "12px",
        lineHeight: "14px",
        color: "#B4B4B4",
        fontWeight: "700",
        marginLeft: "9px"
      },
      uploadSection: {
          display: "flex",
          alignItems: "center",
      },
      inspectDirectionLeft: {
        fontSize: "16px",
        lineHeight: "19.2px",
        color: "#25345C " ,
        fontWeight: "700",
      },
      inspectDirectionRight: {
        fontSize: "16px",
        lineHeight: "19.2px",
        color: "#25345C " ,
        fontWeight: "700",
        textAlign: "right"
      },
      inspection: {
          marginTop: 30,
          display: "flex",
          justifyContent: "space-between"
      },
      addBtn: {
        fontSize: "14px",
        lineHeight: "17px",
        color: "#25345C " ,
        fontWeight: "700 !important",
        
      },
      dropdownBtn: {
        color: "#E53935"
      },
      carImage: {
          minWidth: "calc(100vw - 55vw)",
          minHeight: "calc(100vh - 65vh)",
      }

}));

export default function DriverVehicleReport(props) {
  const classes = useStyles();

  const [tab, setTab] = useState(0);

  const handleChange = (event) => {
    setSelectValue({ ...selectValue, [event.target.name]: event.target.value });
    
  };

  const handleChangeTab = (newTab) => {
    setTab(newTab);
  };
  

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
        <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                <RoundedTabs
                    tabs={[
                        "Defects",
                        "Dvirs"
                    ]}
                    tabValue={handleChangeTab}
                    />
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Calendar placeholder="Day"/>
                  <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 ${classes.moreAction} mr-2`}
                  >
                    <MoreHorizontalIcon/>
                  </Button>
                  <Button round className="btn-round-green w-84">
                    <LiveIconWhite/>
                    Live
                  </Button>
                </GridItem>
              </GridContainer>
              <Card>
                  <CardBody>
                      <Card>
                          <CardBody >
                    <GridContainer className={classes.detailContainer} >
                        <GridItem>
                            <div className={classes.titleDetail}>Inspection Type</div>
                            <div className={classes.detail}>Pre-trip </div>
                        </GridItem>
                        <GridItem>
                            <div className={classes.titleDetail}>Organisation/Carrier name</div>
                            <div className={classes.detail}>Singh Transport Logistics  </div>
                        </GridItem>
                        <GridItem>
                            <div className={classes.titleDetail}>Autnor/Arent/Driver name</div>
                            <div className={classes.detail}>Ali Singh  </div>
                        </GridItem>
                        <GridItem>
                            <div className={classes.titleDetail}>Date</div>
                            <div className={classes.detail}>Feb 20, 5:16 AM   </div>
                        </GridItem>
                        <GridItem>
                            <div className={classes.titleDetail}>Location</div>
                            <div className={classes.detail}>1021 North street    </div>
                        </GridItem>
                        <GridItem>
                            <div className={classes.titleDetail}>Duration</div>
                            <div className={classes.detail}>2m 53s    </div>
                        </GridItem>
                        <GridItem>
                            <div className={classes.titleDetail}>Vehicle name</div>
                            <div className={classes.detail}>Vehicle 101   </div>
                        </GridItem>
                        <GridItem>
                            <div className={classes.titleDetail}>Odometer</div>
                            <div className={classes.detail}>69,469 mi   </div>
                        </GridItem>
                        <GridItem>
                            <div className={classes.titleDetail}>License Plate</div>
                            <div className={classes.detail}>QW14T3  </div>
                        </GridItem>
                    </GridContainer>
                    </CardBody>
                    </Card>
                    <GridContainer className={classes.resolveArea}>
                        <GridItem xs={12} className={classes.titleResolve}>
                        Resolve Defects
                        </GridItem>
                        <GridItem xs={12} className={classes.detailResolve}>
                        Task created on 07 Jun 2019
                        </GridItem>
                        <GridItem xs={4} className={classes.titleTask}>
                        Fuel System
                        <GridContainer>
                        <GridItem >
                        <Button
                        color="white"
                        aria-label="edit"
                        justIcon
                        round
                        className={`btn-round-active-white ${classes.dropdownBtn}`}
                        endIcon={<ExpandMoreIcon />}
                        >
                            Unresolved
                        </Button>
                        </GridItem>
                        <GridItem >
                        <Button
                        color="white"
                        aria-label="edit"
                        justIcon
                        round
                        className={` btn-round-active-white ${classes.addBtn}`}
                        startIcon={<AddOutlined/>}
                        >
                            Add mechanic note
                        </Button>
                        </GridItem>
                        </GridContainer>
                        </GridItem>
                        <GridItem xs={2} className={classes.titleTask}>
                        
                        Due to
                        <GridContainer>
                            <GridItem xs={12} className={classes.dueTo}>
                            Feb 20, 5:13 AM
                            </GridItem>
                            <GridItem xs={12} className={classes.status}>
                            Oil pressure low   
                            </GridItem>
                        </GridContainer>
                        </GridItem>
                        <GridItem xs={2} className={classes.attachment}>
                        
                        Attachments
                        <GridItem className={classes.uploadSection}>
                        <img src={upload} className={classes.icon}/> <div className={classes.upload}>Upload your attachment</div>
                        </GridItem>
                        </GridItem>
                        
                    </GridContainer>

                    <GridContainer>
                        <GridItem xs={12} className={classes.titleResolve}>
                        Walkaround Inspection
                        </GridItem>
                        <GridItem xs={12} className={classes.detail}>
                        Walkaround Inspection
                        </GridItem>
                    </GridContainer>

                    
                    
                  </CardBody>
                  <GridContainer className={classes.inspection}>
                        <GridItem>
                            <GridItem xs={12} className={classes.inspectDirectionLeft}>
                                Front
                            </GridItem>
                            <img src={front} className={classes.carImage}/>
                        </GridItem>
                        <GridItem>
                            <GridItem xs={12} className={classes.inspectDirectionRight}>
                                Back
                            </GridItem>
                            <img src={back} className={classes.carImage}/>
                        </GridItem>
                    </GridContainer>
              </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

