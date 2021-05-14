import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// import { Manager, Target, Popper } from "react-popper";
import { useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import SearchIcon from "components/Icons/SearchIcon18";
import QuestionIcon from "components/Icons/QuestionIcon";
import Switch from "components/CustomSwitch/Switch.jsx";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import avatar from "assets/img/faces/avatar.jpg";
import { COGNOTO_SERVER_URL, COGNOTO_CLIENT_ID, COGNOTO_RESPONSE_TYPE, PUBLIC_URL } from "config/constants";
import { connect } from 'react-redux';
import { logout } from 'reducers/authentication';
import { IRootState } from 'reducers';

import CustomizedDialogs from "components/CustomDialog/Dialog";
import GetHelpDiaLog from "../../views/pages/user/help-feedback/GetHelpDiaLog";
import TicketDialog from "../../views/pages/user/help-feedback/TicketDiaLog";
import FeedBackDialog from "../../views/pages/user/help-feedback/FeedBackDiaLog";
import FormFeedBack from "../../views/pages/user/help-feedback/FormFeedBack";


const useStyles = makeStyles(styles);

export function HeaderLinks(props) {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openGetHelp, setOpenGetHelp] = React.useState(false);
  const [openTicket, setOpenTicket] = React.useState(false);
  const [openMore, setOpenMore] = React.useState(false);
  const [openSendFeedback, setOpenSendFeedback] = React.useState(false);
  const [openFormFeedBack, setOpenFormFeedBack] = React.useState(false);

  const handleCloseMore = () => setOpenMore(false);
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

  const handleOpenSendFeedback = () =>{
    setOpenSendFeedback(prev => !prev);
    setOpenFormFeedBack(prev => !prev);
  }
  const handleFormFeedBack = () =>{
    setOpenSendFeedback(prev => !prev);
    setOpenFormFeedBack(prev => !prev);
  }
  const handleClose = () => {
    setOpen(false)
    setOpenTicket(false)
    setOpenGetHelp(false)
    setOpenSendFeedback(false)
    setOpenFormFeedBack(false)
    setOpenMore(false)
  }

  const [openNotification, setOpenNotification] = React.useState(null);
  const handleClickNotification = event => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const [openProfile, setOpenProfile] = React.useState(null);

  const handleUserProfile = () => {
    history.push(`/u/user-icon`);
  }
  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  const handleWhatsNew = ()=>{
    history.push("/u/help-feedback/what's-new")
  }

  const handleLogout = () => {
    props.logout();
    // history.push("/auth/sign-in");
    console.log(`handleLogout`);
    history.push("/auth/logout");
    // let redirectUri = `${window.location.origin}/auth/logout`;
    // let link = `${COGNOTO_SERVER_URL}/logout?client_id=${COGNOTO_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=${COGNOTO_RESPONSE_TYPE}`;
    // console.log(link);
    // window.location.replace(link);
  };

  const classes = useStyles();
  const { rtlActive } = props;
  const searchButton =
    classes.top +
    " " +
    classes.searchButton +
    " " +
    classNames({
      [classes.searchRTL]: rtlActive
    });
  const dropdownItem = classNames(classes.dropdownItem, classes.primaryHover, {
    [classes.dropdownItemRTL]: rtlActive
  });
  const wrapper = classNames({
    [classes.wrapperRTL]: rtlActive
  });
  const managerClasses = classNames({
    [classes.managerClasses]: true
  });

  //Switch change
  const [checkedState, setCheckedState] = React.useState({
    checkedB: false,
  });

  const handleChange = (event) => {
    setCheckedState({
      ...checkedState,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <div className={wrapper}>
      <Button
        color="white"
        aria-label="edit"
        justIcon
        round
        className={ `btn-36 ${searchButton} mr-2`}
        onClick = { ()=> setOpenTicket(true)}
      >
        <SearchIcon style={{ fontSize: 14 }} className={classes.searchIcon} />
      </Button>

      {/* <DiaLog
        renderTitle={<h3 className={classes.dialogTitle}>Submit Support Ticket</h3>}
        handleClose={handleClose}
        open={openTicket}
      >
        <TicketDialog handleClose={setOpenTicket} />
      </DiaLog> */}

      <Button
        color="white"
        aria-label="edit"
        justIcon
        round
        className={`btn-36 ${searchButton}`}
        onClick={handleOpenMore}
      >
        <QuestionIcon className={classes.searchIcon} />
      </Button>
    
      <Popper
        open={openMore}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement="bottom"   
      >   
        {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list"
              style={{ transformOrigin: "0 0 0" }}
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={handleCloseMore}>
                  <MenuList role="menu"  style={{ zIndex: '9999'}}>
                    {/*start get help  */}
                    <MenuItem
                      onClick={() => setOpenGetHelp(true)}
                      className={dropdownItem}
                    >
                      {rtlActive ? "الملف الشخصي" : "Get Help"} 
                    </MenuItem>
                    <CustomizedDialogs
                      renderTitle={<h3 className={classes.dialogTitle}>Compliance Reports Help</h3>}
                      handleClose={handleClose}
                      open={openGetHelp}
                    >
                      <GetHelpDiaLog/>
                    </CustomizedDialogs>
                      {/*end get help  */}

                      {/* start dialog my tickets */}
                    <MenuItem
                      onClick={() => setOpenTicket(true)}
                      className={dropdownItem}
                    >
                      {rtlActive ? "الإعدادات" : "My open Tickets"}
                    </MenuItem>
                    <CustomizedDialogs
                      renderTitle={<h3 className={classes.dialogTitle}>Submit Support Ticket</h3>}
                      handleClose={handleClose}
                      open={openTicket}
                    >
                      <TicketDialog handleClose={setOpenTicket} />
                    </CustomizedDialogs>
                      {/* end dialog my tickets */}

                    <MenuItem
                      className={dropdownItem}
                    >
                      {rtlActive ? "الخروج" : "Training Center"}
                    </MenuItem>
                    <MenuItem
                      className={dropdownItem}
                    >
                      {rtlActive ? "الخروج" : "Exchange Cable"}
                    </MenuItem>
                    <MenuItem
                      className={dropdownItem}
                      onClick = {handleWhatsNew}
                    >
                      {rtlActive ? "الخروج" : "What's New"}
                    </MenuItem>
                    <MenuItem
                      onClick={() => setOpenSendFeedback(true)}
                      className={dropdownItem}
                    >
                      {rtlActive ? "الخروج" : "Send Feedback"}
                    </MenuItem>
                    <CustomizedDialogs
                      renderTitle={<h3 className={classes.dialogTitle}></h3>}
                      handleClose={handleClose}
                      open={openSendFeedback}
                    >
                      <FeedBackDialog handleOpen={handleFormFeedBack} handleClose={handleOpenSendFeedback}/>
                    </CustomizedDialogs>
                    <CustomizedDialogs
                      renderTitle={<h3 className={classes.dialogTitle}>Feedback</h3>}
                      handleClose={handleClose}
                      open={openFormFeedBack}
                    >
                      <FormFeedBack handleClose={handleFormFeedBack} />
                    </CustomizedDialogs>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
      </Popper>
        
      <div className={managerClasses}>
        <Button
          color="transparent"
          aria-label="Person"
          aria-owns={openProfile ? "profile-menu-list" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={classes.buttonLink}
          muiClasses={{
            label: rtlActive ? classes.labelRTL : ""
          }}
        >
          <div className="avatar-container">
            <img src={avatar} alt="..." />
            <div className="online-badge-dot" />
          </div>
          {/* <Hidden mdUp implementation="css">
            <span onClick={handleClickProfile} className={classes.linkText}>
              {rtlActive ? "الملف الشخصي" : "Profile"}
            </span>
          </Hidden> */}
        </Button>
        <Popper
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          placement="bottom"
          className={classNames({
            [classes.popperClose]: !openProfile,
            [classes.popperResponsive]: true,
            [classes.popperNav]: true
          })}
        >
          {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list"
              style={{ transformOrigin: "0 0 0" }}
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu"  style={{ zIndex: '9999'}}>
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={dropdownItem}
                    >
                      {rtlActive ? "الملف الشخصي" : "Profile"}
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={dropdownItem}
                    >
                      {rtlActive ? "الإعدادات" : "Settings"}
                    </MenuItem>
                    <MenuItem
                      onClick={handleLogout}
                      className={dropdownItem}
                    >
                      {rtlActive ? "الخروج" : "Log out"}
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default connect(
  ({ authentication }: IRootState) => ({
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.user,
  }),
  {
    logout
  }
)(HeaderLinks);

HeaderLinks.propTypes = {
  rtlActive: PropTypes.bool
};
