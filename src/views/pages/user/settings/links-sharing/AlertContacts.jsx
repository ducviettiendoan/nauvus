import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddOutlined from "@material-ui/icons/AddOutlined";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import { MoreHoriz } from "@material-ui/icons";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import EditIcon from "components/Icons/EditIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";
import {connect} from "react-redux";
import {IRootState} from "reducers";
import {getAlertContact} from "reducers/setting-link-sharing";
import classNames from "classnames";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import customDropdownStyle
  from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle";
import DiaLog from "components/CustomDialog/Dialog";
import OrganizationUpload from "components/CustomUpload/OrganizationUpload";
import InputLabel from "@material-ui/core/InputLabel";
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";

const styles = {
  liveSharingHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  liveSharingTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    color: "#25345C",
    marginTop: '-17px'
  },
  liveSharingButton: {
    textAlign: "right",
    marginTop: '2px'
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    color: '#25345C',
    marginLeft: '24px'
  },
  textSub: {
    fontWeight: '400',
    color: '#25345C',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px'
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    },
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important"
  },
  topHeaderButton: {
    textAlign: "right",
  },
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    marginBottom: "0px",
    textAlign: "center"
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end"
  },
  formRow: {
    marginBottom: 16
  },
  formText: {
    fontSize: "14px",
    fontFamily: 'Lato',
    fontWeight: "400",
  },
  formTextSpan: {
    paddingLeft: "30px",
    color: "#a5a5a5",
  },
  text: {
    fontSize: 14,
    fontWeight: 400,
    color: "#25345C",
    margin: "24px",
    marginTop: "8px"
  }
};

const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
  ...styles,
}))
export function AlertContacts(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openMore, setOpenMore] = React.useState(false);
  const [openUpload, setOpenUpload] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const validate = (values) => {
    const errors = {};
    if (!values.fname) errors.fname = 'First name must not be empty!';
    if (!values.lname) errors.lname = 'Last name must not be empty!';
    if (!values.phone) errors.phone = 'Phone must not be empty!';
    if (!values.email) errors.email = 'Email must not be empty!';
    return errors;
  };
  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

  const onSubmit = async (values) => {
    console.log(values);
  }

  const handleClose = () => {
    setOpen(false)
    setOpenMore(false)
    setOpenUpload(false)
  }
  React.useEffect(() => {
    // Get list data
    props.getAlertContact();
  }, []);

  const formatName = (cell, row) => {
    return <>
      <div className={classes.textName}>{cell}</div>
    </>
  }

  const formatPhone = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatEmail = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const addActionButton = () => {
    return (
      <>
        <Button justIcon color="twitter" simple>
          <EditIcon className={classes.iconButton} style={{ color: "#ffffff", width: '22px', height: '22px' }} />
        </Button>
        <Button justIcon color="google" simple>
          <DeleteIcon className={classes.iconButton} style={{ color: "#C4C4C4", width: '24px', height: '24px' }} />
        </Button>
      </>
    )
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  Alert Contacts List
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <DiaLog
                      renderTitle={
                        <>
                          <h3 className={classes.dialogTitle}>Add a new contact</h3>
                          <div className={classes.text}>You are now creating an alert contact. Alert contacts to enable you to send alerts and reports to other people within or outside of your organization.</div>
                        </>
                      }
                      handleClose={handleClose}
                      open={open}
                  >
                    <Form
                        onSubmit={onSubmit}
                        validate={validate}
                        render={({ handleSubmit, reset, submitting, pristine, values }) => {
                          return (
                              <form onSubmit={handleSubmit} noValidate>
                                <GridContainer justify="space-between" >
                                  <GridItem className={classes.formRow} xs={12}>
                                    <InputLabel required>First Name</InputLabel>
                                    <Field
                                        fullWidth
                                        required
                                        name="fname"
                                        type="text"
                                        component={TextField}
                                    />
                                  </GridItem>
                                  <GridItem className={classes.formRow} xs={12}>
                                    <InputLabel required>Last Name</InputLabel>
                                    <Field
                                        fullWidth
                                        required
                                        name="lname"
                                        type="text"
                                        component={TextField}
                                    />
                                  </GridItem>
                                  <GridItem className={classes.formRow} xs={12}>
                                    <InputLabel required>Phone</InputLabel>
                                    <Field
                                        fullWidth
                                        required
                                        name="phone"
                                        type="text"
                                        placeholder="3605550110"
                                        component={TextField}
                                    />
                                  </GridItem>
                                  <GridItem className={classes.formRow} xs={12}>
                                    <InputLabel required>Email</InputLabel>
                                    <Field
                                        fullWidth
                                        required
                                        name="email"
                                        type="text"
                                        placeholder="email@example.com"
                                        component={TextField}
                                    />
                                  </GridItem>
                                </GridContainer>
                                <div className={classes.selectButton}>
                                  <Button
                                      type="button"
                                      round
                                      className="btn-round-active-2 mr-2"
                                      onClick={props.handleClose}
                                  > Cancel</Button>
                                  <Button
                                      round
                                      className="btn-round-active mr-2"
                                      type="submit"
                                      disabled={submitting}
                                  > Save</Button>
                                </div>
                              </form>
                          )
                        }}
                    />
                  </DiaLog>
                  <DiaLog
                      renderTitle={<h3 className={classes.dialogTitle}>Upload CSV File</h3>}
                      handleClose={handleClose}
                      open={openUpload}
                  >
                    <p>Manage your contacts</p>
                    <p>
                      Manage your contacts via spreadsheet (.CSV file). You can choose to download your existing Contacts List or start from a Sample Template. Please refer to our Knowledge Base to learn more.
                    </p>
                    <OrganizationUpload />
                    <div className={classes.selectButton}>
                      <Button
                          type="button"
                          round
                          className="btn-round-active-2 mr-2"
                          onClick={handleClose}
                      > Cancel</Button>
                      <Button
                          round
                          className="btn-round-active mr-2"
                          type="submit"
                      > Preview</Button>
                    </div>
                  </DiaLog>
                  <Button
                    round
                    className="btn-round-active w-150 mr-2"
                    startIcon={<AddOutlined />}
                    onClick={() => setOpen(true)}
                  >
                    Add Contact
                  </Button>
                  <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 ${classes.moreAction} mr-2`}
                    onClick={handleOpenMore}
                  >
                    <MoreHoriz />
                  </Button>
                </GridItem>
              </GridContainer>


              <Card>
                <CardBody style={{ height: '74px' }}>
                  <GridContainer className={classes.liveSharingHeader}>
                    <GridItem xs={3} sm={3} md={3} className={classes.liveSharingTitle}>
                      2 contacts
                    </GridItem>
                    <GridItem xs={9} sm={9} md={9} className={classes.liveSharingButton}>
                      <ToolboxButton placeholder={"Search contacts"} />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <div>
                  <ToolkitProvider
                    data={props.data}
                    columns={[
                      {
                        dataField: "name",
                        text: "Name",
                        formatter: formatName
                      },
                      {
                        dataField: "phone",
                        text: "Phone",
                        formatter: formatPhone
                      },
                      {
                        dataField: "email",
                        text: "Email",
                        formatter: formatEmail
                      },
                      {
                        dataField: "action",
                        text: "Actions",
                        formatter: addActionButton
                      }
                    ]}
                  >
                    {props => (
                      <div className="table table-settings">
                        <BootstrapTable
                          {...props.baseProps}
                          keyField="id"
                          bootstrap4={true}
                          bordered={false}
                        />
                      </div>
                    )}
                  </ToolkitProvider>
                </div>
              </Card>
              <GenPaginationV1 total={29} page={1} size={10} />
            </GridItem>
          </GridContainer>
          <Popper
              open={openMore}
              anchorEl={anchorEl}
              transition
              disablePortal
              placement="bottom-end"
              className={classNames({
                [classes.popperClose]: !anchorEl,
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
                    <ClickAwayListener onClickAway={handleCloseMore}>
                      <MenuList role="menu">
                        <MenuItem className={classes.dropdownItem} onClick={() => setOpenUpload(true)} > Upload CSV </MenuItem>
                        <MenuItem className={classes.dropdownItem} onClick={handleCloseMore} > Download CSV </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
            )}
          </Popper>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default connect(
  ({settingLinkSharing}: IRootState) => ({
    data: settingLinkSharing.alertContacts
  }),
  {
    getAlertContact
  }
)(AlertContacts);
