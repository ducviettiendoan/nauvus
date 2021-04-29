import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import LocalPrintshopOutlinedIcon from '@material-ui/icons/LocalPrintshopOutlined';
import AddOutlined from "@material-ui/icons/AddOutlined";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import TextField from '@material-ui/core/TextField';
// import { TextField } from 'final-form-material-ui'
import CheckIcon from '@material-ui/icons/Check';
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import LocalOfferOutlined from '@material-ui/icons/LocalOfferOutlined';

import { Field, Form } from "react-final-form";
// @material-ui/icons 
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import DiaLog from "components/CustomDialog/Dialog";
import Calendar from "components/Calendar/Calendar";

import Button from "components/CustomButtons/Button";
import SendIcon from "components/Icons/SendIcon";
import EditOutlinedIcon from "components/Icons/EditOutlinedIcon";
import avatar from "assets/img/faces/avatar.jpg";

import { getDetailMessages, sendMessage } from 'reducers/messages';


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
  },
  dialogHeader: {
    textAlign: "center",
    margin: "24px",
    "&> h3": {
      color: "#25345C",
      fontWeight: 600,
      fontSize: 22,
      margin: 0,
      marginRight: 16
    },
    "&> p": {
      color: "#B4B4B4",
      fontWeight: 400,
      fontSize: 14,
      margin: 0
    }
  },
  dialogFooter: {
    textAlign: "right",
    borderTop: "#eeee solid 1px",
    paddingTop: 16
  },
  selectTag: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: "#eeee solid 1px",
    borderRadius: 26,
    fontWeight: 600,
    minWidth: 120,
    padding: 8,
    marginLeft: 8,
    "&> span": {
      paddingLeft: 8
    },
    "&> svg": {
      transform: "rotate(90deg)"
    }
  },
  label: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 12,
  },
  form: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  }
};

const useStyles = makeStyles(styles);

function Messages(props) { 
  const [detail, setDetail] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    props.getDetailMessages()
  }, []);

  const onSubmit = async (values) => {
    let time = new Date(Date.now());
    let data = {
      id: 123,
      type: "me",
      name: "Elisabeth Synsky",
      text: values.text,
      time: time.toUTCString(),
      seen: false
    }
    props.sendMessage(data)
  }



  return (
    <React.Fragment>
      {!detail && (
        <div className={classes.boxNotFound}>
          <div className="text-center">
            <h3 className={classes.title}>No messages found?</h3>
            <p className={classes.description}>Try to create more new conversation or wait until someone will send you a
              message</p>
            <Button
              round
              className="btn-round-active h-41 m-0"
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
              {props.data && props.data.map(d => {
                if (d.type == "you") {
                  return (
                    <GridContainer>
                      <GridItem md={6}>
                        <div className={classes.infoMessage}>
                          <img src={d.avatar} alt="user-avatar" />
                          <h3>{d.name}</h3>
                          <p>{d.time}</p>
                        </div>
                        <div className={classes.textMessage}>
                          <p>{d.text}</p>
                          <MoreHorizIcon />
                        </div>
                      </GridItem>
                    </GridContainer>
                  )
                } else {
                  return (
                    <GridContainer justify="flex-end">
                      <GridItem md={6}>
                        <div className={classes.infoMessageRight}>
                          <h3>{d.name}</h3>
                          <p>{d.time}</p>
                        </div>
                        <div className={classes.textMessageRight}>
                          <p>{d.text}</p>
                        </div>
                        {d.seen && (
                          <div className={classes.readRight}>
                            <CheckIcon />
                            <span>Read</span>
                          </div>
                        )}
                      </GridItem>
                    </GridContainer>
                  )
                }
              })}
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine }) => {
                  return (
                    <form
                      onSubmit={event => {
                        handleSubmit(event).then(form.reset);
                      }}
                      // noValidate
                      className={classes.form}
                    >
                      <Field name="text">
                        {props => (
                          <TextField
                            fullWidth
                            multiline
                            className={classes.textField}
                            placeholder="Add your message"
                            name={props.input.name}
                            value={props.input.value}
                            onChange={props.input.onChange}
                            {...props.rest}
                          />
                        )}
                      </Field>
                      <Button
                        round
                        type="submit"
                        startIcon={<SendIcon />}
                        disabled={submitting || pristine}
                        className="btn-round-active m-0"
                      > Send </Button>
                    </form>
                  )
                }} />
            </CardFooter>
          </Card>
        </div>
      )}
      <DiaLog
        renderTitle={
          <div className={classes.dialogHeader}>
            <h3>New message</h3>
            <p>Compose a direct message to your drivers</p>
          </div>
        }
        handleClose={() => setOpen(false)}
        fullWidth
        open={open}
      >
        <GridContainer>
          <GridItem md={5}>
            <InputLabel className={classes.label}>Add members</InputLabel>
            <FormControl variant="outlined" className="moreIcon" style={{ margin: "8px 0" }}>
              <IconButton style={{ width: "36px", height: "36px" }}>
                <AddOutlined fontSize="small" style={{ color: "#C4C4C4" }} />
              </IconButton>
            </FormControl>
          </GridItem>
          <GridItem md={7}>
            <div>
              <InputLabel className={classes.label}>Due to  </InputLabel>
              <GridContainer alignItems="center">
                <GridItem md={6}>
                  <FormControl variant="outlined">
                    <Calendar />
                  </FormControl>
                </GridItem>
                <GridItem md={6}>
                  <div className={classes.selectTag}>
                    <LocalOfferOutlined fontSize="small" style={{ color: "#C4C4C4" }} />
                    <span>Select tag</span>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </GridItem>
        </GridContainer>
        <div className="mt-2">
          <InputLabel className={classes.label}>Your message</InputLabel>
          <TextField
            fullWidth
            multiline
            name="message"
            className={classes.textField}
            rows={10}
            rowsMax={20}
            placeholder="Start typing..."
          />
        </div>
        <div className={classes.dialogFooter}>
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
    </React.Fragment>
  );
}


const mapStateToProps = ({ messages }) => {
  console.log(messages);
  return {
    data: messages.data
  };
};

const mapDispatchToProps = {
  getDetailMessages,
  sendMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);