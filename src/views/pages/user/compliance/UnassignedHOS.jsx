import React from "react";
// @material-ui/core components
import { makeStyles,withStyles  } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Chip from "@material-ui/core/Chip";
import { FormControl, IconButton, Select } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Button from "components/CustomButtons/Button.js";
import DropDownIcon from "components/Icons/DropDownIcon";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Calendar from "components/Calendar/Calendar";
import BootstrapTable from "react-bootstrap-table-next";
import CloseIcon from "components/Icons/CloseIcon";
import LinearProgress from '@material-ui/core/LinearProgress';
import GenPaginationV1 from "components/Pagination/GenPaginationV1";



const styles = {
  filterButtonText: {
    textTransform: "none",
    fontSize: "14px",
    color: "#25345C",
    border: "1px solid #C4C4C4 !important",
    borderRadius: "32px !important",
    width: "100px !important",
    minWidth: "100px !important",
    height: "40px",
    position: "absolute",
    right: "106px",
    marginRight: "106px",
    alignItems: "center !important",
  },
  filterButtonText2: {
    textTransform: "none",
    fontSize: "14px",
    color: "#25345C",
    border: "1px solid #C4C4C4 !important",
    borderRadius: "32px !important",
    maxWidth: "180px !important",
    minWidth: "180px !important",
    height: "40px",
    position: "absolute",
    right: "10px",
    marginRight: "10px",
    alignItems: "center !important",
  },
  filterIcon: {
    marginTop: '10px !important',
    marginRight: '0 !important'
  },
  headerRight: {
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: "20px !important",
    paddingRight: "0px !important",
  },
  hosData: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: "#25345C",
    fontSize: "18px",
    fontWeight: 700,
  },
  buttonSearch: {
    border: "1px solid #C4C4C4 !important",
  },
  selectForm: {
    width: "100%",
    height: "44px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "20px",
    padding: "0x !important",
    border: "1px solid #ECEEF0 !important",
    "&::before": {
      borderBottom: "0px",
    },
    "& > select:focus": {
      backgroundColor: "#FFFFFF !important",
    },
    "&:hover": {
      borderBottom: "0px",
    },
    marginRight: 15,
  },
  select: {
    color: "#25345C",
    fontWeight: 700,
    borderStyle: "none",
    borderWidth: 2,
    marginRight: 15,
    paddingTop: 14,
    paddingBottom: 15,
    "&:focus": {
      borderRadius: 12,
      backgroundColor: "white",
      borderColor: "#B4B4B4",
    },
  },
  dropDownIcon: {
    color: "#C4C4C4",
    cursor: "pointer",
    position: "absolute",
    right: 5,
  },
  textName: {
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "14px",
    color: "#25345C",
    marginLeft: "24px",
    paddingTop: "12px !important",
  },
  textSub: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "14px",
    marginLeft: "24px",
    paddingTop: "12px !important",
    color: "#25345C",
  },
  textTags: {
    lineHeight: "24px",
    marginTop: "16px",
    marginBottom: "15px",
    marginLeft: "24px",
    padding: "12px 14px",
    color: "white",
    background: "#25345C",
    borderRadius: 27,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: 40,
    height: "41px",
    fontSize: "16px",
  },
  calendar: {
    marginLeft: "8px !important",
    marginRight: "9px !important",
  },
  button:{
    background:" #fff !important",
    borderRadius: "28px !important",
    textTransform: "initial !important",
    fontSize: "13px !important",
    lineHeight: "17px !important",
    fontStyle: "normal!important",
    fontWeight: "bold!important",
    color: "#25345C!important",
    boxShadow: "none !important",
    border: "1px solid #ECEEF0 !important",
    width: "100px !important",
  },
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "0px !important",
    paddingLeft: "23px !important",
    
  },
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
  },
  chips: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8
  },
  clearAll: {
    textTransform: "none",
    color: "#8097D8",
    background: "unset !important",
    boxShadow: "unset !important",
    fontSize: 14,
    fontWeight: 700,
    padding: 0,
    "&:hover": {
      color: "#25345C"
    }
  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
  },
  buttonContainer: {
      height: "42px",
      width: "0px ",
      padding: "20px",
      marginRight: "10px"
  },
  iconButtonHeader: {
      color: "#25345C",
      top: "6px !important",
      left: "5px !important",
      width: "24px !important",
      height: "24px !important",
      margin: "5px 17px 5px 18px !important",
  },


};

const dumpData = [
  {
    id: 1,
    vihicle: "539",
    unassignedTime: "48m 10s",
    unassignedDistance: "46.5 km",
    segments: "2",
    pending: "0",
    annotated: "0",
  },
  {
    id: 2,
    vihicle: "539",
    unassignedTime: "48m 10s",
    unassignedDistance: "46.5 km",
    segments: "2",
    pending: "0",
    annotated: "0",
  },
  {
    id: 3,
    vihicle: "539",
    unassignedTime: "48m 10s",
    unassignedDistance: "46.5 km",
    segments: "2",
    pending: "0",
    annotated: "0",
  },
  {
    id: 4,
    vihicle: "539",
    unassignedTime: "48m 10s",
    unassignedDistance: "46.5 km",
    segments: "2",
    pending: "0",
    annotated: "0",
  },
  {
    id: 5,
    vihicle: "539",
    unassignedTime: "48m 10s",
    unassignedDistance: "46.5 km",
    segments: "2",
    pending: "0",
    annotated: "0",
  },
  {
    id: 6,
    vihicle: "539",
    unassignedTime: "48m 10s",
    unassignedDistance: "46.5 km",
    segments: "2",
    pending: "0",
    annotated: "0",
  },
  {
    id: 7,
    vihicle: "539",
    unassignedTime: "48m 10s",
    unassignedDistance: "46.5 km",
    segments: "2",
    pending: "0",
    annotated: "0",
  },

];

const useStyles = makeStyles(styles);

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 30,
    borderRadius: 28,
    width: "200px",
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 0,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

export default function UnassignedHOS() {
  const classes = useStyles();

  const handleChange = (event) => {
    setSelectValue({ ...selectValue, [event.target.name]: event.target.value });
  };

  const [selectValue, setSelectValue] = React.useState({
    selectA: "none",
  });

  const menuProps = {
    classes: {
      paper: classes.paper,
      list: classes.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  const formatName = (cell, row) => {
    return (
      <>
        <div className={classes.textName}>{cell}</div>
      </>
    );
  };

  const formatUserName = (cell, row) => {
    return (
      <>
        <div className={classes.textSub}>{cell}</div>
      </>
    );
  };

  const formatTags = (cell, row) => {
    return (
      <>
        <div className={classes.textSub}>{cell}</div>
      </>
    );
  };

  const formatPeerGroup = (cell, row) => {
    return (
      <>
        <div className={classes.textName}>{cell}</div>
      </>
    );
  };

  const formatPhone = (cell, row) => {
    return (
      <>
        <div className={classes.textName}>{cell}</div>
      </>
    );
  };

  const formatDLState = (cell, row) => {
    return (
      <>
        <div className={classes.textName}>{cell}</div>
      </>
    );
  };

  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    style: { background: "linear-gradient(0deg,#ECEEF0,#ECEEF0)" },
    classes: "customSelectRow",
    selectionHeaderRenderer: ({ indeterminate, ...rest }) => (
      <input
        type="checkbox"
        className={classes.indeterminateIcon}
        ref={(input) => {
          if (input) input.indeterminate = indeterminate;
        }}
        {...rest}
      />
    ),
    selectionRenderer: ({ mode, ...rest }) => (
      <input className={classes.checkBoxIcon} type={mode} {...rest} />
    ),
  };

  const name = "selectA";
  const listValues = [
    "Needs Coaching",
    "Needs Review",
    "Needs Recognition",
    "Coached",
    "Reviewed",
    "Regconized",
    "Dismissed",
  ];
  const placeholder = "1.1 Weeks";
  const selectValue1 = selectValue.selectA;

  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Standard Admin'},
    {key: 1, label: 'Full admin'},
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  };

  const ProgressBarDistance = (props) => {
    const {bgcolor, distance,min,sec} = props;
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 28,
    }
  
    const fillerDistance = {
      height: '100%',
      width: `${distance}%`,
      backgroundColor: bgcolor,
      borderRadius: "inherit",
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
      textAlign: 'center',
    }

    const fillerTime ={
      height: '100%',
      width: `${min}%`,
      backgroundColor: bgcolor,
      borderRadius: "inherit",
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
      textAlign: 'center',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold',
      zIndex: 2,
      
    }
  
    return (
      <div style={{display: "flex", justifyContent: "space-between"}}>

        <div style={{width: "261px", textAlign: "left"}}>
          <div>Unassigned Distance</div>
          <div style={containerStyles}>
          
          <div style={fillerDistance}>
            <span style={labelStyles}>{`${distance} km`}</span>
          </div>
          </div>
        </div>

        <div style={{width: "261px", textAlign: "left"}}>
        <div>Unassigned Time</div>
        <div style={containerStyles}>
          
          <div style={fillerTime}>
            <span style={labelStyles}>{`${min}m ${sec}s`}</span>
          </div>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card testimonial>
                <CardBody>
                  <GridContainer
                    style={{ padding: "0 16px", alignItems: "center" }}
                  >
                    <GridItem
                      xs={3}
                      sm={3}
                      md={3}
                      className={classes.searchBar}
                    >
                      
                      <div className={classes.hosData}>Unassigned HOS Report List</div>
                    </GridItem>
                    
                    <GridItem
                      xs={9}
                      sm={9}
                      md={9}
                      className={classes.headerRight}
                    >
                      <FormControl variant="outlined">
                        <Select
                          className={classes.selectForm}
                          fullWidth
                          disableUnderline
                          classes={{ root: classes.select }}
                          MenuProps={menuProps}
                          IconComponent={() => (
                            <DropDownIcon className={classes.dropDownIcon} />
                          )}
                          value={selectValue1}
                          onChange={handleChange}
                          name={name}
                        >
                          {selectValue1 === "none" && (
                            <option
                              value="none"
                              disabled
                              style={{ display: "none" }}
                            >
                              {placeholder}
                            </option>
                          )}
                          {listValues.map((value, i) => (
                            <MenuItem key={i} value={i}>
                              {value}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <FormControl
                        variant="outlined"
                        className={classes.calendar}
                      >
                        <Calendar />
                      </FormControl>
                      <FormControl variant="outlined" className="moreIcon">
                        <IconButton style={{ width: "42px", height: "42px" }}>
                          <MoreHorizIcon
                            fontSize="small"
                            style={{ color: "#25345C" }}
                          />
                        </IconButton>
                      </FormControl>
                      <FormControl variant="outlined">
                        <Button round className="btn-round-green">
                          Live
                        </Button>
                      </FormControl>
                    </GridItem>
                  </GridContainer>

                  <GridItem xs={6} sm={6} md={3}>
                    
                    <ProgressBarDistance bgcolor={"orange"} distance={50} min ={30} sec={10} />
                  </GridItem>

                  <GridContainer className={classes.headContainer}>
                    <GridItem xs={12} sm={12} md={6}>
                      <GridContainer>
                        <GridItem xl={2} className={classes.userRolesTitle}> {chipData.length} selected for </GridItem>
                        <GridItem xl={10} className={classes.chipSelected}>
                          {chipData.map(data => (
                            <Chip
                              deleteIcon={<CloseIcon/>}
                              label={data.label}
                              onDelete={handleDelete(data)}
                              className={classes.chips}
                            />
                          ))}
                          {chipData.length > 0 ?
                            (
                              <Button onClick={handleClearAll} className={classes.clearAll}>
                                Clear All
                              </Button>
                            ) : ""}
                          </GridItem>
                      </GridContainer>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                      <ToolboxButton placeholder="Search gateways" showFilter showColumn/>                     
                    </GridItem>


                  </GridContainer>
                </CardBody>

                <ToolkitProvider
                  data={dumpData}
                  columns={[
                    {
                      dataField: "vihicle",
                      text: "Vihicle",
                      formatter: formatName,
                    },
                    {
                      dataField: "unassignedTime",
                      text: "Unassigned Time",
                      formatter: formatUserName,
                    },
                    {
                      dataField: "unassignedDistance",
                      text: "Unassigned Distance",
                      formatter: formatTags,
                    },
                    {
                      dataField: "segments",
                      text: "Segments",
                      formatter: formatPeerGroup,
                    },
                    {
                      dataField: "pending",
                      text: "Pending",
                      formatter: formatPhone,
                    },
                    {
                      dataField: "annotated",
                      text: "Anotated",
                      formatter: formatDLState,
                    },
                    
                  ]}
                >
                  {(props) => (
                    <div className="table table-settings">
                      <BootstrapTable
                        {...props.baseProps}
                        bootstrap4={true}
                        bordered={false}
                        keyField="id"
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </Card>
            </GridItem>
          </GridContainer>
          <GenPaginationV1 total={29} page={1} size={10}/>
        </GridItem>
      </GridContainer>
    </div>
  );
}
