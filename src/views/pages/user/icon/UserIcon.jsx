import React, {useEffect, useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import RoundedTabs from "components/CustomTabs/RoundedTabs";
// import Violations from "./hos-violation/Violations";
// import MissingCertifications from "./hos-violation/MissingCertifications";
import classNames from "classnames";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import {connect} from "react-redux";
import {getProfileData} from "reducers/icon";

import Profile from "./components/Profile";
import WhatNew from "./components/WhatNew";
import Order from "./components/Order";
import ActivateDevice from "./components/ActivateDevice";
import ViewOrganization from "./components/ViewOrganization";

const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
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
    margin: '16px 0, 16px, 0 !important',
  },
  topHeaderButton: {
    textAlign: "right !important",
    display: "flex",
    alignItems: "center"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#C4C4C4',
  },
  textInputRoot: {
    padding: "6px, 0, 9px !important",
    marginTop: "5px",
    marginBottom: "5px",
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C',
    "&>input": {
      padding: "6px, 0, 9px !important",
    }
  },
  onHeaderCellFirst: {
    fontWeight: 700,
    color: "#25345C",
    paddingLeft: "28px"
  },
  onHeaderCellNext: {
    fontWeight: 700,
    color: "#25345C",
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    paddingLeft: "12px"
  },
  textBold: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontWeight: 700,
  },
  textEmail: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontWeight: 400
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  table: {
    "&>div>div": {
      boxShadow: "unset",
      padding: 0,
      margin: 0,
    }
  },
  body: {
    paddingTop: "16px",
  },
  card: {
    borderRadius: "12px",
    marginTop: "16px",
    padding: "20px 0 28px 0",
  },
  title: {
    fontWeight: 700,
    fontSize: "18px",
    color: "#25345C",
    fontFamily: "Lato",
    padding: "0 16px 0 16px",
  },
  email: {
    padding: "24px 0 16px 16px",
  },
  emailLeft: {
    fontWeight: 700,
    fontSize: "18px",
    color: "#25345C",
    fontFamily: "Lato",
  },
  emailRight: {
    fontWeight: 700,
    fontSize: "18px",
    color: "#B4B4B4",
    fontFamily: "Lato",
  },
  form: {
    padding: "0 16px 0 16px",
  }
}));

function UserIcon(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getProfileData();
  }, []);

  const [value, setValue] = React.useState(0);

  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

  const dropdownItem = classNames(classes.dropdownItem, classes.grayHover);

  const onSubmit = async (values) => {
    console.log(values);
  };
  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getViolations({page, pageSize});
  }

  const columns = [
    {
      title: 'Sign-in type',
      key: 'signInType',
      onHeaderCell: {className: classes.onHeaderCellFirst},
      render: signInType => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{signInType}</div>
        </div>
      ),
    },
    {
      title: 'IP Address',
      key: 'ipAddress',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: ipAddress => <div className={classes.textEmail}>{ipAddress}</div>
    },
    {
      title: 'Date',
      key: 'date',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: date => <div className={classes.textEmail}>{date}</div>
    },
  ]

  return (
    <div className={classes.body}>
      <div className={classes.head}>
        <RoundedTabs tabs={["Profile", "What's new", "Order", "Activate devices", "View my organization"]}
                     tabValue={handleChangeTab}/>
      </div>

      {value === 0 && <Profile/>}
      {value === 1 && <WhatNew/>}
      {value===2 && <Order/>}
      {value===3 && <ActivateDevice/>}
      {value===4 && <ViewOrganization/>}
    </div>
  );
}

const mapStateToProps = ({icon}) => {
  return {
    data: icon.profile.data,
    page: icon.profile.page,
    total: icon.profile.total,
    pageSize: icon.profile.pageSize
  };
};

const mapDispatchToProps = {
  getProfileData
};

export default connect(mapStateToProps, mapDispatchToProps)(UserIcon);