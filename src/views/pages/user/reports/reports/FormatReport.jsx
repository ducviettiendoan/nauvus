import React from "react";
// @material-ui/core SafetyInbox
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core SafetyInbox
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {Form} from "react-final-form";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import CheckSquareOutlined from "components/Icons/CheckSquareOutlined";

const styles = {
  title: {
    fontSize: "18px",
    lineHeight: "22px",
    textAlign: "center",
    color: "#25345C",
    fontWeight: "700",
    marginBottom: 24,
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
  footer: {
    marginTop: 28,
  },
  buttonSetting: {
    width: "40px !important",
    height: "74ps !important",
    margin: "4px"
  },
  txtListHeader: {
    fontSize: "14px",
    lineHeight: "21px",
    color: "#C4C4C4",
    fontWeight: "400"
  },
  titleHeader: {
    fontSize: "14px",
    lineHeight: "22px",
    color: "#25345C",
    fontWeight: "700",
    marginBottom: "4",
    width: "500px"
  },
  listCard: {
    border: "1px solid rgba(236, 238, 240, 1)",
    borderRadius: "10px",
    marginBottom: 8
  },
  choicesAmount: {
    fontSize: "14px",
    lineHeight: "17px",
    color: "#B4B4B4 !important",
    fontWeight: "400",
  },
  dropdownItem: {
    marginLeft: "8px",
    fontWeight: 400,
    fontSize: '12px',
    color: '#25345C',
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  detail: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  detailColumn: {
    width: "250px"
  },
};

const useStyles = makeStyles(styles);

export default function FormatReport(props) {
  const classes = useStyles();

  const onSubmit = async (values) => {
    console.log(values);
  }

  const [open, setOpen] = React.useState(true);
  const [currentTab, setCurrentTab] = React.useState();

  const handleClick = (tabName) => {
    console.log(`on click tab: ${tabName}`);
    if (tabName === currentTab) {
      setOpen(!open);
    } else {
      setOpen(true);
      setCurrentTab(tabName);
    }
  };

  const isOpenList = (tabName) => {
    return open && currentTab === tabName;
  };

  const listTags = {
    driver1: ["Created At", "ELD exempt", "Is deactivated", "License state"],
    driver2: ["Driver name", "ELD exempt reason", "License number", "Notes"],
  }

  const [checked, setChecked] = React.useState({
    tags: [1],
    dutyStatus: [1],
    violations: [1]
  });
  const handleToggle = (value) => (event) => {
    const currentIndex = checked[event.target.name].indexOf(value);
    const newChecked = {...checked};
    if (currentIndex === -1) {
      newChecked[event.target.name].push(value);
    } else {
      newChecked[event.target.name].splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit, reset, submitting, pristine, values}) => (
          <form onSubmit={handleSubmit} noValidate className={classes.form} style={{maxWidth: "700"}}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.root}
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  className={classes.txtListHeader}
                >
                  Columns
                </ListSubheader>
              }
            >
              <div>
                <ListItem
                  onClick={() => handleClick(`Created At`)}
                >
                  <ListItemText
                    primary="Created At"
                    classes={{primary: classes.titleHeader}}
                  />
                  {isOpenList(`Created At`) ? (
                    <ExpandLess/>
                  ) : (
                    <ExpandMore/>
                  )}
                </ListItem>
                <Collapse
                  in={isOpenList(`Created At`)}
                  timeout="auto"
                  unmountOnExit
                >
                  <GridItem className={classes.detail}>Track distance, driving hours, visits, and other details of
                    your assets and drivers.</GridItem>

                </Collapse>
              </div>
            </List>

            {/*<Divider variant="fullWidth" light/>*/}
            <hr/>

            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.root}
            >
              <div className={classes.listCard}>
                <ListItem
                  button
                  onClick={() => handleClick(`Driver`)}
                >
                  <ListItemText
                    primary="Driver"
                    secondary="2 selected of 15"
                    classes={{primary: classes.titleHeader, secondary: classes.choicesAmount}}
                  />
                  {isOpenList(`Driver`) ? (
                    <ExpandLess/>
                  ) : (
                    <ExpandMore/>
                  )}
                </ListItem>
              </div>
              <div>
                <Collapse
                  in={isOpenList(`Driver`)}
                  timeout="auto"
                  unmountOnExit
                >
                  <GridItem className={`${classes.detail} ${classes.listCard}`}>
                    <div className={classes.detailColumn}>
                      {listTags.driver1.map((value) => {
                        return (
                          <MenuItem key={value} className={classes.itemContainer}>
                            <div className={classes.checkboxContainer}>
                              <div className={classes.dropdownItem}>
                                <Checkbox
                                  // name="tags"
                                  // edge="end"
                                  onChange={handleToggle(value)}
                                  checked={checked["tags"].indexOf(value) !== -1}
                                  checkedIcon={<CheckSquareOutlined/>}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              </div>
                              <div className={classes.dropdownItem}>
                                {value}
                              </div>
                            </div>
                          </MenuItem>
                        );
                      })}
                    </div>
                    <div className={classes.detailColumn}>
                      {listTags.driver2.map((value) => {
                        return (
                          <MenuItem key={value} className={classes.itemContainer}>
                            <div className={classes.checkboxContainer}>
                              <div className={classes.dropdownItem}>
                                <Checkbox
                                  name="tags"
                                  edge="end"
                                  onChange={handleToggle(value)}
                                  checked={checked["tags"].indexOf(value) !== -1}
                                  checkedIcon={<CheckSquareOutlined/>}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              </div>
                              <div className={classes.dropdownItem}>
                                {value}
                              </div>
                            </div>
                          </MenuItem>
                        );
                      })}
                    </div>
                  </GridItem>

                </Collapse>
              </div>
              <div className={classes.listCard}>
                <ListItem
                  button
                  onClick={() => handleClick(`Activity Fuel`)}
                >
                  <ListItemText
                    primary="Activity Fuel"
                    secondary="0 selected of 22"
                    classes={{primary: classes.titleHeader, secondary: classes.choicesAmount}}
                  />
                  {isOpenList(`Activity Fuel`) ? (
                    <ExpandLess/>
                  ) : (
                    <ExpandMore/>
                  )}
                </ListItem>
              </div>
              <div>
                <Collapse
                  in={isOpenList(`Activity Fuel`)}
                  timeout="auto"
                  unmountOnExit
                >
                  <GridItem className={`${classes.detail} ${classes.listCard}`}>
                    <div className={classes.detailColumn}>
                      {listTags.driver1.map((value) => {
                        return (
                          <MenuItem key={value} className={classes.itemContainer}>
                            <div className={classes.checkboxContainer}>
                              <div className={classes.dropdownItem}>
                                <Checkbox
                                  name="tags"
                                  edge="end"
                                  onChange={handleToggle(value)}
                                  checked={checked["tags"].indexOf(value) !== -1}
                                  checkedIcon={<CheckSquareOutlined/>}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              </div>
                              <div className={classes.dropdownItem}>
                                {value}
                              </div>
                            </div>
                          </MenuItem>
                        );
                      })}
                    </div>
                    <div className={classes.detailColumn}>
                      {listTags.driver2.map((value) => {
                        return (
                          <MenuItem key={value} className={classes.itemContainer}>
                            <div className={classes.checkboxContainer}>
                              <div className={classes.dropdownItem}>
                                <Checkbox
                                  name="tags"
                                  edge="end"
                                  onChange={handleToggle(value)}
                                  checked={checked["tags"].indexOf(value) !== -1}
                                  checkedIcon={<CheckSquareOutlined/>}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              </div>
                              <div className={classes.dropdownItem}>
                                {value}
                              </div>
                            </div>
                          </MenuItem>
                        );
                      })}
                    </div>
                  </GridItem>

                </Collapse>
              </div>
              <div className={classes.listCard}>
                <ListItem
                  button
                  onClick={() => handleClick(`Safety`)}
                >
                  <ListItemText
                    primary="Safety"
                    secondary="0 selected of 10"
                    classes={{primary: classes.titleHeader, secondary: classes.choicesAmount}}
                  />
                  {isOpenList(`Safety`) ? (
                    <ExpandLess/>
                  ) : (
                    <ExpandMore/>
                  )}
                </ListItem>
              </div>
              <div>
                <Collapse
                  in={isOpenList(`Safety`)}
                  timeout="auto"
                  unmountOnExit
                >
                  <GridItem className={`${classes.detail} ${classes.listCard}`}>
                    <div className={classes.detailColumn}>
                      {listTags.driver1.map((value) => {
                        return (
                          <MenuItem key={value} className={classes.itemContainer}>
                            <div className={classes.checkboxContainer}>
                              <div className={classes.dropdownItem}>
                                <Checkbox
                                  name="tags"
                                  edge="end"
                                  onChange={handleToggle(value)}
                                  checked={checked["tags"].indexOf(value) !== -1}
                                  checkedIcon={<CheckSquareOutlined/>}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              </div>
                              <div className={classes.dropdownItem}>
                                {value}
                              </div>
                            </div>
                          </MenuItem>
                        );
                      })}
                    </div>
                    <div className={classes.detailColumn}>
                      {listTags.driver2.map((value) => {
                        return (
                          <MenuItem key={value} className={classes.itemContainer}>
                            <div className={classes.checkboxContainer}>
                              <div className={classes.dropdownItem}>
                                <Checkbox
                                  name="tags"
                                  edge="end"
                                  onChange={handleToggle(value)}
                                  checked={checked["tags"].indexOf(value) !== -1}
                                  checkedIcon={<CheckSquareOutlined/>}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              </div>
                              <div className={classes.dropdownItem}>
                                {value}
                              </div>
                            </div>
                          </MenuItem>
                        );
                      })}
                    </div>
                  </GridItem>

                </Collapse>
              </div>

              <div className={classes.listCard}>
                <ListItem
                  button
                  onClick={() => handleClick(`Compliance`)}
                >
                  <ListItemText
                    primary="Compliance"
                    secondary="0 selected of 7"
                    classes={{primary: classes.titleHeader, secondary: classes.choicesAmount}}
                  />
                  {isOpenList(`Compliance`) ? (
                    <ExpandLess/>
                  ) : (
                    <ExpandMore/>
                  )}
                </ListItem>
              </div>
              <div>
                <Collapse
                  in={isOpenList(`Compliance`)}
                  timeout="auto"
                  unmountOnExit
                >
                  <GridItem className={`${classes.detail} ${classes.listCard}`}>
                    <div className={classes.detailColumn}>
                      {listTags.driver1.map((value) => {
                        return (
                          <MenuItem key={value} className={classes.itemContainer}>
                            <div className={classes.checkboxContainer}>
                              <div className={classes.dropdownItem}>
                                <Checkbox
                                  name="tags"
                                  edge="end"
                                  onChange={handleToggle(value)}
                                  checked={checked["tags"].indexOf(value) !== -1}
                                  checkedIcon={<CheckSquareOutlined/>}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              </div>
                              <div className={classes.dropdownItem}>
                                {value}
                              </div>
                            </div>
                          </MenuItem>
                        );
                      })}
                    </div>
                    <div className={classes.detailColumn}>
                      {listTags.driver2.map((value) => {
                        return (
                          <MenuItem key={value} className={classes.itemContainer}>
                            <div className={classes.checkboxContainer}>
                              <div className={classes.dropdownItem}>
                                <Checkbox
                                  name="tags"
                                  edge="end"
                                  onChange={handleToggle(value)}
                                  checked={checked["tags"].indexOf(value) !== -1}
                                  checkedIcon={<CheckSquareOutlined/>}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              </div>
                              <div className={classes.dropdownItem}>
                                {value}
                              </div>
                            </div>
                          </MenuItem>
                        );
                      })}
                    </div>
                  </GridItem>

                </Collapse>
              </div>

            </List>


            <div className={classes.footer}>
              <div className={classes.selectButton}>
                <Button
                  type="button"
                  round
                  className={`btn-round-active-2 ${classes.buttonSetting}`}
                  onClick={props.handleClose}
                > Cancel
                </Button>
                <Button
                  round
                  className={`btn-round-active ${classes.buttonSetting}`}
                  type="submit"
                  disabled={submitting}
                > Save</Button>
              </div>
            </div>
          </form>
        )}
      />

    </div>
  );
}