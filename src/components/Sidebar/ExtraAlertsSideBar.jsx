import React from "react";
import { ROUTE_PATH } from "config/constants";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames"

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import List from '@material-ui/core/List';
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Button from "components/CustomButtons/Button";
import GridItem from "components/Grid/GridItem"
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import { Grid } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import { primaryColor } from "assets/jss/material-dashboard-pro-react";
import CheckSquareOutlined from "components/Icons/CheckSquareOutlined";
import Switch from "components/CustomSwitch/Switch.jsx"
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
  extraSidebarContainer: {
    background: "#FFFFFF",
  },
  extraSidebarSearchContainer: {
    display: "flex",
    height: '68px',
    justifyContent: "center",
    alignItems: "center",
    borderBottom: '1px solid #ECEEF0',
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
  clearAll: {
    textTransform: "none",
    color: "#25345C",
    background: "unset !important",
    boxShadow: "unset !important",
    fontSize: 14,
    fontWeight: 400,
    padding: 0,
    "&:hover": {
      color: "#B4B4B4"
    },
    "&:focus": {
      color: "#25345C"
    },
  },
  chips: {
    fontWeight: 400,
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8,
    marginBottom: 4,
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
  dropdownVehicle: {
    borderRadius: "12px",
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
    width: "230px",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
  popperInput: {
    paddingBottom: "8px",
    paddingTop: "8px",
  },
  dropdownItemVehicle: {
    marginLeft: "8px",
    fontWeight: 400,
    fontSize: '12px',
    color: '#25345C',
  },
  checked: {
    color: primaryColor[0] + "!important"
  },
  checkRoot: {
    padding: "10px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  itemContainer: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "0px !important"
  },
  chipContainer: {
    padding: "0px 0px 0px 0px !important",
    alignItems: "center"
  },
  gridChip: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 16px",
    paddingBottom: "5px",
  },
  recentTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 16px"
  },
  listItem: {
    borderBottom: "#ECEEF0 solid 1px",
    padding: "8px 16px"
  },
  listItemText: {
    fontWeight: 600,
    fontSize: 14,
    paddingRight: 8,
    "& > p": {
      marginBottom: 8
    },
    "& > p:last-child": {
      color: "#B4B4B4"
    }
  }
}))

export function ExtraMessagesSideBar(props) {
  const classes = useStyles();

  // popper
  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

  const listTag = ["Title", "Title 2", "Title 3"]

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    setChipData([])
    newChecked.filter((item) => item != 1).map((chip, i) => {
      setChipData((prev) => [
        ...prev,
        {
          key: i,
          label: chip
        }
      ])
    })
  };

  // chip
  const [chipData, setChipData] = React.useState([]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    const newChecked = checked.filter((chip) => chip !== chipToDelete.label)
    console.log(chipToDelete)
    setChecked(newChecked)
  };

  const handleClearAll = () => {
    setChipData([])
    setChecked([])
  }

  return (
    <div className={classes.extraSidebarContainer}>
      <div className={classes.extraSidebarSearchContainer}>
        <ToolboxButton placeholder="Search drivers" showFilter />
      </div>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.messagesContainer}
      >
        <div className={classes.recentTitle}>
          <Grid className={classes.tagText}>Your recent for</Grid>
          <Grid>
            {/* <Button
                color="white"
                aria-label="edit"
                justIcon
                round
                className={`btn-36 ${classes.moreAction} mr-2`}
                onClick={handleOpenMore}
              >
                <MoreHoriz />
              </Button> */}
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
                  <Paper className={classes.dropdown && classes.dropdownVehicle}>
                    <ClickAwayListener onClickAway={handleCloseMore}>
                      <MenuList role="menu">
                        <Grid xs={12} sm={12} md={12} className={classes.popperInput}>
                          <ToolboxButton placeholder="Search options" />
                        </Grid>
                        <Grid>Tags</Grid>

                        {listTag.map((value) => {
                          return (
                            <MenuItem key={value} className={classes.itemContainer}>
                              <div className={classes.dropdownItemVehicle}>
                                <Checkbox
                                  edge="end"
                                  onChange={handleToggle(value)}
                                  checked={checked.indexOf(value) !== -1}
                                  checkedIcon={<CheckSquareOutlined />}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              </div>
                              <div className={classes.dropdownItemVehicle}>
                                {value}
                              </div>
                            </MenuItem>
                          );
                        })}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid>
        </div>
        <Grid className={classes.gridChip}>
          <GridItem className={classes.chipContainer}>
            {chipData.map(data => (
              <Chip
                deleteIcon={<CloseIcon />}
                label={data.label}
                onDelete={handleDelete(data)}
                className={classes.chips}
              />
            ))}
          </GridItem>
          <Button className={classes.clearAll} onClick={handleClearAll}>
            Clear All
            </Button>
        </Grid>

        {/* listItem */}
        <ListItem className={classes.listItem}>
          <div className={classes.listItemText}>
            <p>Vehicle/Asset speed is about speed limit by 25 km/h</p>
            <p>All gateways in this organisation Dmitri Protas, Vadim Hohlov</p>
          </div>
          <Switch name="device1" />
        </ListItem>

        <ListItem className={classes.listItem}>
          <div className={classes.listItemText}>
            <p>Vehicle unplugged</p>
            <p>Tag Trucks, City Dmitry Protas, Vadim Hohlov</p>
          </div>
          <Switch name="device1" />
        </ListItem>
        <ListItem className={classes.listItem}>
          <div className={classes.listItemText}>
            <p>Vehicle engine is idle</p>
            <p>All gateways in this organisation Dmitri Protas, Vadim Hohlov</p>
          </div>
          <Switch name="device1" />
        </ListItem>
        <ListItem className={classes.listItem}>
          <div className={classes.listItemText}>
            <p>Vehicle fuel level has decreased dramatically</p>
            <p>All gateways in this organisation Dmitri Protas, Vadim Hohlov</p>
          </div>
          <Switch name="device1" />
        </ListItem>
        <ListItem className={classes.listItem}>
          <div className={classes.listItemText}>
            <p>Harsh event occurred</p>
            <p>All gateways in this organisation Dmitri Protas, Vadim Hohlov</p>
          </div>
          <Switch name="device1" />
        </ListItem>
        <ListItem className={classes.listItem}>
          <div className={classes.listItemText}>
            <p>Vehicle fuel level has decreased dramatically</p>
            <p>All gateways in this organisation Dmitri Protas, Vadim Hohlov</p>
          </div>
          <Switch name="device1" />
        </ListItem>
      </List>
    </div>
  );
}

const mapStateToProps = ({ messages }) => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ExtraMessagesSideBar);