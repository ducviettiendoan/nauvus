import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import LocalPrintshopOutlinedIcon from '@material-ui/icons/LocalPrintshopOutlined';
import AddOutlined from "@material-ui/icons/AddOutlined";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';

// @material-ui/icons 
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import DiaLog from "components/CustomDialog/Dialog";

import Button from "components/CustomButtons/Button";
import SendIcon from "components/Icons/SendIcon";
import EditOutlinedIcon from "components/Icons/EditOutlinedIcon";
import avatar from "assets/img/faces/avatar.jpg";


const styles = {
  title: {
    color: "#25345C",
    fontWeight: 700,
    fontSize: 32,
    margin: "0 0 8px"
  },
  description: {
    fontSize: 14,
    color: "#B4B4B4",
    fontWeight: "400",
    marginBottom: 16
  },
  boxNotFound: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  boxDetail: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  headDetail: {
    padding: "16px 0",
    justifyContent: "space-between",
    alignItems: "center",
    "&>:first-child": {
      color: "#25345C",
      fontWeight: 600,
      fontSize: 18,
    }
  },
  cardHeader: {
    borderBottom: "#ddd solid 1px",
    padding: 24
  },
  cardBody: {
    padding: 24
  },
  cardFooter: {
    margin: 24,
    padding: 16,
    background: "#ECEEF0",
    borderRadius: 12,
    "& > button": {
      padding: "13px 18px!important"
    }
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    marginRight: "16px"
  },
  chatName: {
    color: "#25345C",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "19px",
    paddingBottom: "4px",
  },
  chatRole: {
    color: "#B4B4B4",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px",
  },
  infoMessage: {
    display: "flex",
    alignItems: "center",
    "&> h3": {
      color: "#25345C",
      fontWeight: 600,
      fontSize: 12,
      margin: 0,
      marginRight: 16
    },
    "&> img": {
      width: 24,
      height: 24,
      borderRadius: "50%",
      marginRight: 16
    },
    "&> p": {
      color: "#B4B4B4",
      fontWeight: 400,
      fontSize: 12,
      margin: 0
    }
  },
  infoMessageRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "&> h3": {
      color: "#25345C",
      fontWeight: 600,
      fontSize: 12,
      margin: 0,
      marginRight: 16
    },
    "&> p": {
      color: "#B4B4B4",
      fontWeight: 400,
      fontSize: 12,
      margin: 0
    }
  },
  textMessage: {
    display: "flex",
    alignItems: "center",
    margin: "8px 0",
    "&> p": {
      margin: 0,
      marginRight: 8,
      fontWeight: 400,
      color: "#25345C",
      display: "flex",
      background: "#ECEEF0",
      padding: "8px 16px",
      borderBottomRightRadius: 12,
      borderBottomLeftRadius: 12,
      borderTopRightRadius: 12,
    },
  },
  textMessageRight: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "8px 0",
    "&> p": {
      margin: 0,
      fontWeight: 400,
      color: "#FFFFFF",
      display: "flex",
      background: "#25345C",
      padding: "8px 16px",
      borderBottomRightRadius: 12,
      borderBottomLeftRadius: 12,
      borderTopLeftRadius: 12,
    },
  },
  readRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "&> svg": { color: "#27AE60" },
    "&> span": { fontSize: 12, fontWeight: 400 },
  },
  textField: {
    "&> div:hover:before, &> div:before,&> div:after": {
      borderBottom: "none!important",
    }
  }
};

const useStyles = makeStyles(styles);

export default function Messages() {
  const [detail, setDetail] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <React.Fragment>
      {!detail && (
        <div className={classes.boxNotFound}>
          <div className="text-center">
            <h3 className={classes.title}>No messages found?</h3>
            <p className={classes.description}>Try to create more new conversation or wait until someone will send you a message</p>
            <Button
              round
              className={`btn-round-active h-41 m-0`}
              startIcon={<AddOutlined />}
              onClick={() => setDetail(true)}
            > Create Chat </Button>
          </div>
        </div>
      )}

      {detail && (
        <div className={classes.boxDetail}>
          <GridContainer className={classes.headDetail}>
            <GridItem>Messages</GridItem>
            <GridItem>
              <Button
                round
                className={`btn-round-active h-41 m-0`}
                startIcon={<EditOutlinedIcon />}
                onClick={() => setOpen(true)}
              > New Message </Button>
            </GridItem>
          </GridContainer>
          <Card className="m-0 h-100">
            <CardHeader className={classes.cardHeader}>
              <GridContainer justify="space-between" alignItems="center">
                <GridItem className="d-flex">
                  <img src={avatar} alt="user-avatar" className={classes.avatarImage} />
                  <div>
                    <div className={classes.chatName}>Elisabeth Synsky</div>
                    <div className={classes.chatRole}>Driver</div>
                  </div>
                </GridItem>
                <GridItem><LocalPrintshopOutlinedIcon style={{ color: "#C4C4C4" }} /></GridItem>
              </GridContainer>
            </CardHeader>
            <CardBody className={classes.cardBody}>
              <GridContainer>
                <GridItem md={6}>
                  <div className={classes.infoMessage}>
                    <img src={avatar} alt="user-avatar" />
                    <h3>Elisabeth Synsky</h3>
                    <p>Marth 28, 5:28 AM</p>
                  </div>
                  <div className={classes.textMessage}>
                    <p>Garage Repair Ticket #60 has been created.</p>
                    <MoreHorizIcon />
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer justify="flex-end">
                <GridItem md={6}>
                  <div className={classes.infoMessageRight}>
                    <h3>Dispatch</h3>
                    <p>Marth 29, 6:03 PM</p>
                  </div>
                  <div className={classes.textMessageRight}>
                    <p>Reminder to everyone! The duration of Pre-Trip Inspections in On-Duty Status must be at least 15 minutes for each vehicle. First PTI in the yard, if you have a Truck & Trailer you should have 30 minutes. On-Duty Status, 15 minutes for Truck and 15 minutes for Trailer.</p>
                  </div>
                  <div className={classes.readRight}>
                    <CheckIcon />
                    <span>Read</span>
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem md={6}>
                  <div className={classes.infoMessage}>
                    <img src={avatar} alt="user-avatar" />
                    <h3>Elisabeth Synsky</h3>
                    <p>Marth 28, 5:28 AM</p>
                  </div>
                  <div className={classes.textMessage}>
                    <p>Reminder to everyone! The duration of Pre-Trip Inspections in On-Duty Status must be at least 15 minutes for each vehicle. First PTI in the yard, if you have a Truck & Trailer you should have 30 minutes. On-Duty Status, 15 minutes for Truck and 15 minutes for Trailer.</p>
                    <MoreHorizIcon />
                  </div>
                </GridItem>
              </GridContainer>

              <GridContainer justify="flex-end">
                <GridItem md={6}>
                  <div className={classes.infoMessageRight}>
                    <h3>Dispatch</h3>
                    <p>Marth 29, 6:03 PM</p>
                  </div>
                  <div className={classes.textMessageRight}>
                    <p>Reminder to everyone!</p>
                  </div>
                  <div className={classes.textMessageRight}>
                    <p>Reminder to everyone! The duration of Pre-Trip Inspections in On-Duty Status must be at least 15 minutes for each vehicle. First PTI in the yard, if you have a Truck & Trailer you should have 30 minutes. On-Duty Status, 15 minutes for Truck and 15 minutes for Trailer.</p>
                  </div>
                  <div className={classes.readRight}>
                    <CheckIcon />
                    <span>Read</span>
                  </div>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <TextField
                fullWidth
                multiline
                className={classes.textField}
                placeholder="Add your message"
              />
              <Button
                round
                className="btn-round-active m-0"
                startIcon={<SendIcon />}
              > Send </Button>
            </CardFooter>
          </Card>

          <DiaLog
            renderTitle={
              <div className="text-center">
                <h3 className={classes.dialogTitle}>New message</h3>
                <p>Compose a direct message to your drivers</p>
              </div>
            }
            fullWidth
            open={open}
          >
            <div className="text-right">
              <Button
                round
                className="btn-round-gray w-116 h-41 mr-2"
                onClick={() => setOpen(false)}
              > Cancel </Button>
              <Button
                round
                className={`btn-round-active h-41`}
                onClick={() => setOpen(false)}
              > Send </Button>
            </div>
          </DiaLog>
        </div>
      )}
    </React.Fragment>
  );
}
