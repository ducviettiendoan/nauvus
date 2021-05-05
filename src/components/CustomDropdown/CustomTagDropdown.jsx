import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames"

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Button from "components/CustomButtons/Button";
import GridItem from "components/Grid/GridItem"
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import { Grid } from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import { primaryColor } from "assets/jss/material-dashboard-pro-react";
import CheckSquareOutlined from "components/Icons/CheckSquareOutlined";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
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
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
}))

export default function CustomTagDropdown(props) {
  const classes = useStyles();

  // popper
  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

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
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Grid className={classes.tagText}>Your recent for</Grid>
        <Grid>
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

                      {props.tags && props.tags.map((value) => {
                        return (
                          <MenuItem key={value} className={classes.itemContainer}
                              onClick={ handleToggle(value) }
                          >
                            <div className={classes.dropdownItemVehicle}>
                              <Checkbox
                                edge="end"
                                // onChange={handleToggle(value)}
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
      <Grid style={{ paddingBottom: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
    </>
  );
}