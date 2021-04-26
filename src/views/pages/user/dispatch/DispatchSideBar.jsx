import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import {connect} from 'react-redux';
import CustomInput from "components/CustomInput/CustomInput"
import {Grid} from "@material-ui/core";
import {selectDistance} from "reducers/overview";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import GridItem from "components/Grid/GridItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import BuildingIcon from "components/Icons/BuildingIcon";
import Button from "components/CustomButtons/Button";
import {MoreHoriz} from "@material-ui/icons";
import Popper from "@material-ui/core/Popper";
import classNames from "classnames";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import CheckSquareOutlined from "components/Icons/CheckSquareOutlined";
import Chip from "@material-ui/core/Chip";
import CloseIcon from "components/Icons/CloseIcon";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/customDropdownStyle";
import {primaryColor} from "assets/jss/material-dashboard-pro-react";
import TimeIcon from "components/Icons/TimeIcon";
import DistanceIcon from "components/Icons/DistanceIcon";
import FuelIcon from "components/Icons/FuelIcon";

const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
  sidebarContainer: {
    overflowY: "scroll"
  },
  contentContainer: {
    padding: "50px 28px 50px 28px !important"
  },
  sidebarInput: {
    width: "100%"
  },
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#C4C4C4',
    marginBottom: "0px !important"
  },
  textInputRoot: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C',
    padding: "6px 0 17px"
  },
  sidebarHeader: {
    width: "100%",
    height: "66px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 16px 16px 16px !important"
  },
  sidebarContentContainer: {
    padding: "16px 28px 16px 16px !important"
  },
  inputAdornmentIcon: {
    color: "#8181A5",
    fontSize: "25px"
  },
  tagText: {
    color: "#25345C",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "17px",
    paddingBottom: "16px",
  },
  sidebarContentHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
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
  itemContainer: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "0px !important"
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
  chipContainer: {
    padding: "0px 0px 0px 0px !important",
    alignItems: "center"
  },
  chips: {
    fontWeight: 400,
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8,
    marginBottom: 4,
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
  messagesContainer: {
    padding: "16px 0px 16px 0px"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  cardContainer: {
    border: "1px solid #ECEEF0",
    borderRadius: "12px",
    padding: "16px 16px",
    marginBottom: "16px"
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cardHeaderLeft: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: '14px',
    color: '#25345C',
    lineHeight: "21px"
  },
  cardHeaderRight: {
    textAlign: "right",
    fontWeight: 400,
    fontSize: '12px',
    color: '#B4B4B4',
    lineHeight: "21px"
  },
  cardSubHeader: {
    textAlign: "left",
    fontWeight: 400,
    fontSize: '12px',
    color: '#B4B4B4',
    lineHeight: "21px",
    marginTop: "7px",
    marginBottom: "7px"
  },
  cardHeaderFields: {
    display: "flex",
    alignItems: "center",
    fontWeight: 700,
    fontSize: '12px',
    color: '#25345C',
    lineHeight: "18px"
  },
  cardHeaderFuel: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    fontWeight: 700,
    fontSize: '12px',
    color: '#25345C',
    lineHeight: "18px"
  },
  cardHeaderFieldsContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "15px"
  },
  cardDataLeft: {
    textAlign: "left"
  },
  cardDataRight: {
    textAlign: "right"
  },
  cardTimeData: {
    fontWeight: 700,
    fontSize: '14px',
    color: '#25345C',
    lineHeight: "24px"
  },
  cardTypeData: {
    fontWeight: 400,
    fontSize: '12px',
    color: '#B4B4B4',
    lineHeight: "24px"
  },
  buttonFullWidth: {
    width: "100%",
    marginTop: "24px"
  },
  chipWrapper: {
    paddingBottom: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

var ps;

export function DispatchSideBar(props) {
  const classes = useStyles();

  const mainPanelVehicleSideBar = React.createRef();

  console.log(props.distances)

  // useEffect(() => {
  //   props.getDistance()
  // }, [])

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      // setMobileOpen(false);
    }
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanelVehicleSideBar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [1]);

  const [inputValue, setInputValue] = React.useState({
    asset: "",
    distance: "",
    start: "",
    end: "",
  })

  const handleInputChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    })
  }

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
    newChecked.filter((item) => item !== 1).map((chip, i) => {
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

  const listCards = ["0", "1", "2"]

  return (
    <div ref={mainPanelVehicleSideBar} className={classes.sidebarContainer}>
      <div>
        <Grid xs={12} sm={12} md={12} className={classes.sidebarHeader}>
          <ToolboxButton placeholder="Search drivers" showFilter/>
        </Grid>
        <Divider variant="fullWidth" light/>
      </div>
      <div className={classes.sidebarContentContainer}>
        <CustomInput
          labelText="Address book results"
          name="test"
          formControlProps={{
            className: classes.sidebarInput
          }}
          inputProps={{
            placeholder: "Enter test",
            onChange: handleInputChange,
            defaultValue: "test",
            classes: {input: classes.textInputRoot},
            endAdornment: (
              <InputAdornment position="start">
                <BuildingIcon className={classes.inputAdornmentIcon}/>
              </InputAdornment>
            ),
          }}
          labelProps={{
            shrink: true,
            classes: {root: classes.textFieldRoot}
          }}
        />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.messagesContainer}
        >
          <div className={classes.sidebarContentHeader}>
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
                <MoreHoriz/>
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
                {({TransitionProps}) => (
                  <Grow
                    {...TransitionProps}
                    id="profile-menu-list"
                    style={{transformOrigin: "0 0 0"}}
                  >
                    <Paper className={classes.dropdown && classes.dropdownVehicle}>
                      <ClickAwayListener onClickAway={handleCloseMore}>
                        <MenuList role="menu">
                          <Grid xs={12} sm={12} md={12} className={classes.popperInput}>
                            <ToolboxButton placeholder="Search options"/>
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
                                    checkedIcon={<CheckSquareOutlined/>}
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
          <Grid className={classes.chipWrapper}>
            <GridItem className={classes.chipContainer}>
              {chipData.map(data => (
                <Chip
                  deleteIcon={<CloseIcon/>}
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
          <Grid>
            {listCards?.map((card, i) => {
              return (
                <Grid className={classes.cardContainer} key={i}>
                  <Grid className={classes.cardHeader}>
                    <Grid xs={6} className={classes.cardHeaderLeft}>
                      574
                    </Grid>
                    <Grid xs={6} className={classes.cardHeaderRight}>
                      Ali Singh
                    </Grid>
                  </Grid>
                  <Grid className={classes.cardSubHeader}>
                    Stoney Run Drive, 1.6 mi NW Severn, MD
                  </Grid>
                  <Grid className={classes.cardHeaderFieldsContainer}>
                    <Grid xs={5} className={classes.cardHeaderFields}>
                      <TimeIcon/><span>10h 3m away</span>
                    </Grid>
                    <Grid xs={4} className={classes.cardHeaderFields}>
                      <DistanceIcon/><span>669.5 mi</span>
                    </Grid>
                    <Grid xs={3} className={classes.cardHeaderFuel}>
                      <FuelIcon/><span>21%</span>
                    </Grid>
                  </Grid>
                  <Divider variant="fullWidth" light/>
                  <Grid className={classes.cardHeader} style={{marginTop: "15px"}}>
                    <Grid xs={4}>
                      <Grid className={classes.cardTimeData}>
                        8:00
                      </Grid>
                      <Grid className={classes.cardTypeData}>
                        Until Break
                      </Grid>
                    </Grid>
                    <Grid xs={2} className={classes.cardDataLeft}>
                      <div className={classes.cardTimeData}>
                        0:00
                      </div>
                      <div className={classes.cardTypeData}>
                        Drive
                      </div>
                    </Grid>
                    <Grid xs={2} className={classes.cardDataRight}>
                      <div className={classes.cardTimeData}>
                        0:00
                      </div>
                      <div className={classes.cardTypeData}>
                        Shift
                      </div>
                    </Grid>
                    <Grid xs={4} className={classes.cardDataRight}>
                      <div className={classes.cardTimeData} style={{marginRight: "24px"}}>
                        50:53
                      </div>
                      <div className={classes.cardTypeData}>
                        Cycle tmrw
                      </div>
                    </Grid>
                  </Grid>
                  <Grid>
                    {i === 0 ?
                      <Button
                        round
                        className={`btn-round-active h-41 ${classes.buttonFullWidth}`}
                      >
                        Dispatch
                      </Button>
                      :
                      <Button
                        round
                        className={`btn-round-gray h-41 ${classes.buttonFullWidth}`}
                      >
                        Dispatch
                      </Button>}
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
        </List>
      </div>
    </div>
  );
}

const mapStateToProps = ({vehicle, overview}) => {
  console.log(overview)
  return {
    vehicles: vehicle.vehicles,
    distance: overview.distance
  }
}

const mapDispatchToProps = {
  selectDistance
}


export default connect(mapStateToProps, mapDispatchToProps)(DispatchSideBar);