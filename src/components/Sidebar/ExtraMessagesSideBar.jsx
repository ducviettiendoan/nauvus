import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import List from '@material-ui/core/List';
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import GridItem from "components/Grid/GridItem"
import avatar from "assets/img/faces/avatar.jpg";
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import { getMessages } from 'reducers/messages';
import { Grid } from "@material-ui/core";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import CustomTagDropdown from "components/CustomDropdown/CustomTagDropdown";

const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
  extraSidebarContainer: {
    padding: '0 18px',
    background: "#FFFFFF",
  },
  extraSidebarSearchContainer: {
    height: '68px',
    borderBottom: '1px solid #25345c1f',
    marginLeft: '-18px',
    marginRight: '-18px',
    alignItems: "center",
  },
  messagesContainer: {
    padding: "16px 0px 16px 0px"
  },
  tagText: {
    color: "#25345C",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "17px",
    paddingBottom: "16px",
  },
  chatContainer: {
    border: "1px solid #ECEEF0",
    borderRadius: "12px",
    padding: "16px 16px",
    marginBottom: "16px"
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
  chatTime: {
    float: "right",
    color: "#B4B4B4",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px",
  },
  chatTitle: {
    color: "#25345C",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "17px",
    paddingBottom: "4px",
  },
  chatThumbnail: {
    color: "#B4B4B4",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "15px",
  },
}))

export function ExtraMessagesSideBar(props) {
  const classes = useStyles();

  React.useEffect(() => {
    props.getMessages()
  }, []);

  return (
    <>
      <div className={classes.extraSidebarContainer}>
        <Row className={classes.extraSidebarSearchContainer}>
          <GridItem>
            <ToolboxButton placeholder="Search drivers" showFilter />
          </GridItem>
        </Row>

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.messagesContainer}
        >
          <CustomTagDropdown tags = { ["Title", "Title 2", "Title 3"] } />
          <Grid>
            {props.allMessages?.map((chat, i) => {
              return (
                <Grid className={classes.chatContainer} key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "8px" }}>
                    <div style={{ display: "flex" }}>
                      <img src={avatar} alt="user-avatar" className={classes.avatarImage} />
                      <div>
                        <div className={classes.chatName}>{chat.name}</div>
                        <div className={classes.chatRole}>{chat.role}</div>
                      </div>
                    </div>
                    <div className={classes.chatTime}>{chat.time}</div>
                  </div>
                  <div className={classes.chatTitle}>{chat.title}</div>
                  <div className={classes.chatThumbnail}>{chat.thumbnail}</div>
                </Grid>
              )
            })}
          </Grid>
        </List>
      </div>
    </>
  );
}

const mapStateToProps = ({ messages }) => {
  return {
    allMessages: messages.messages.data
  }
}

const mapDispatchToProps = {
  getMessages
}

export default connect(mapStateToProps, mapDispatchToProps)(ExtraMessagesSideBar);