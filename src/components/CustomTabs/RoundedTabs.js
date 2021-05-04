import React from "react";
import { Tab, Tabs, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Card/Card";

const styles = {
  tabStyles: {
    centered: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  tabItemStyles: {
    backgroundColor: "#FFFFFF",
    position: 'relative',
    display: 'block',
    border: '1px inner',
    borderRadius: '30px',
    textAlign: 'center',
    transition: 'all .5s',
    padding: '12px 22px 12px 22px',
    color: '#25345C',
    height: 'auto',
    marginRight: '8px',
    float: 'none',
    textTransform: 'none !important',
    minWidth: 'auto !important',
    minHeight: '41px !important',
    fontWeight: 700,
    fontSize: 14,
    '&$selected': {
      '&, &:hover': {
        color: '#FFFFFF',
        backgroundColor: '#00acc1',
        boxShadow: '0 7px 10px -5px rgba(76, 175, 80, 0.4)',
      },
    },
  }
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(styles);

export default function RoundedTabs(props) {
  const [value, setValue] = React.useState(props.value || 0);

  React.useEffect(() => {
    setValue(props.value)
  }, [props.value])

  const handleChange = (event, newValue) => {
    props.tabValue(newValue)
    setValue(newValue)
  };



  const classes = useStyles()

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabStyles}
        indicatorColor=""
        position="static"
        variant="scrollable"
      >
        {props.tabs.map((tab) => {
          let tabName = tab
          let tabLabel = tabName.replace(/\s/g, '')
          return (
            <Tab
              className={classes.tabItemStyles}
              label={tabName}
              {...a11yProps(tabLabel)}
            >
              {tabName}
            </Tab>
          )
        })}
      </Tabs>
    </>
  )
}