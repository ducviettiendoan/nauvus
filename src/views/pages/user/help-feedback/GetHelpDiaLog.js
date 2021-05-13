import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { MoreHoriz } from "@material-ui/icons";
import Button from "components/CustomButtons/Button";
import Chart from "../../../../assets/img/get-help-chart.png"; 
import MailOutLine from "../../../../components/Icons/MailOutLine";
import PhoneIconButton from "../../../../components/Icons/PhoneIconButton";

const styles = {
    button: {
        background: '#25345C !important',
        borderRadius: '28px !important',
        padding: '8px 12px !important',
        textTransform: 'initial !important',
        fontSize: ' 14px !important',
        fontStyle: 'normal!important',
        fontWeight: 700,
        "&>span>span": {
            marginRight: "0px !important",
        }
    },
    titleButton: {
        textAlign: "right",
    },
    hoursOfService: {
        color: "rgba(128, 151, 216, 1)",
        textDecoration: "underline",
    },
    textDecor: {
        color: '#25345C',
        textDecoration: "underline",
    },
    phoneIcon: {
        paddingTop: "18px",
        paddingRight: "15px"
    }
};

const useStyles = makeStyles(styles);

export default function GetHelpDiaLog() {
    const classes = useStyles();
    return (
        <div>
        <GridContainer>
            <GridItem xs={12} xl={12}>
                <GridContainer>
                    <GridItem xs={6} xl={6}>
                        Compliance Report Help
                </GridItem>
                    <GridItem xs={6} xl={6} className={classes.titleButton}>
                        <Button
                            color="white"
                            aria-label="edit"
                            justIcon
                            round
                            className={`btn-36 ${classes.moreAction} mr-2`}
                        // onClick={handleOpenMore}
                        >
                            <MailOutLine/>
                        </Button>

                        <Button
                            color="white"
                            aria-label="edit"
                            justIcon
                            round
                            className={`btn-36 ${classes.phoneIcon} mr-2`}
                        // onClick={handleOpenMore}
                        >
                            <PhoneIconButton/>
                        </Button>

                        <Button
                            round
                            className={classes.button}
                            // startIcon={<AddOutlined />}
                        >
                            Visit Help Center
                        </Button>
                    </GridItem>
                </GridContainer>
            </GridItem>

            <GridItem xs={12} xl={12}>
                <GridContainer>
                    <GridItem xs={8} xl={8}>
                        <div>Hours of Service Handling for Daylight Savings Time</div>
                        <div>Do admins or drivers need to do anything for handling daylight savings time?</div>
                        <div>Nauvus will automatically handle daylight savings for drivers. 
                        See below for how Hours of Service logs appear on the daylight savings dates</div>
                        <div>What do driver logs look like in the Fall on the day of daylight savings?</div>
                        <div>The graph grid on the driver log will show 25 hours, with an additional 1am log.</div>
                        <img src={Chart} alt="..." />
                        <div>What do driver logs look like in the Spring on the day of daylight savings?</div>
                        <div>The graph grid on the driver log will show 23 hours,
                        with the 2am hour omitted. </div>
                    </GridItem>

                    <GridItem xs={4} xl={4}>
                        <div>Suggested Articles</div>
                        <div className={classes.hoursOfService}>Hours of Service Handling for Daylight Savings Time</div>
                        <div className={classes.textDecor}>Updated IFTA Mileage Report</div>
                        <div className={classes.textDecor}>Driver HoS Reporting</div>
                        <div className={classes.textDecor}>Driver HoS Audit Report</div>
                        <div className={classes.textDecor}>Duty Status Summary Report</div>
                    </GridItem>
                </GridContainer>
            </GridItem>
        </GridContainer>
        </div>
    );
}
