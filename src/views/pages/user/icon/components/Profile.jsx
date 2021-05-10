import React, {useEffect, useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import classNames from "classnames";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";
import Card from "@material-ui/core/Card";
import Table from "components/Table/TableV1";
import {connect} from "react-redux";
import {getProfileData} from "reducers/icon";
import Grid from "@material-ui/core/Grid";
import GenPaginationV1 from "../../../../../components/Pagination/GenPaginationV1";


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
  },
  pagination: {
    marginTop: "20px",
    padding: "0px !important",
    "&>div":{
      padding: '0px !important',
    }
  },
}));

function Profile(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getProfileData();
  }, []);

  const onSubmit = async (values) => {
    console.log(values);
  };

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getViolations({page, pageSize});
  };

  const onShowSizeChange = (page, pageSize) => {
    props.getViolations({page, pageSize});
    console.log(page, pageSize)
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
    <div>
      <Card className={classes.card}>
        <div className={classes.title}>Your Account</div>

        <div className={classes.form}>
          <Form
            onSubmit={onSubmit}
            render={({handleSubmit, reset, submitting, pristine, values}) => (
              <GridContainer>
                <GridItem xs={4} xl={4}>
                  <Field
                    id="standard-full-width"
                    label="Email"
                    placeholder="Start typing..."
                    fullWidth
                    margin="normal"
                    name="email"
                    InputLabelProps={{
                      shrink: true,
                      classes: {root: classes.textFieldRoot}
                    }}
                    InputProps={{
                      classes: {input: classes.textInputRoot}
                    }}
                    component={TextField}
                  />
                </GridItem>

                <GridItem xs={8} xl={8}>
                  <Field
                    id="standard-full-width"
                    label="Language"
                    placeholder="Start typing..."
                    fullWidth
                    margin="normal"
                    name="language"
                    InputLabelProps={{
                      shrink: true,
                      classes: {root: classes.textFieldRoot}
                    }}
                    InputProps={{
                      classes: {input: classes.textInputRoot}
                    }}
                    component={TextField}
                  />
                </GridItem>
              </GridContainer>
            )}
          />

          <Form
            onSubmit={onSubmit}
            className={classes.form}
            render={({handleSubmit, reset, submitting, pristine, values}) => (
              <GridContainer>
                <GridItem xs={4} xl={4}>
                  <Field
                    id="standard-full-width"
                    label="Report Name"
                    placeholder="Start typing..."
                    fullWidth
                    margin="normal"
                    name="language"
                    InputLabelProps={{
                      shrink: true,
                      classes: {root: classes.textFieldRoot}
                    }}
                    InputProps={{
                      classes: {input: classes.textInputRoot}
                    }}
                    component={TextField}
                  />
                </GridItem>

                <GridItem xs={8} xl={8}>
                  <Field
                    id="standard-full-width"
                    label="Home Page"
                    placeholder="Start typing..."
                    fullWidth
                    margin="normal"
                    name="homePage"
                    InputLabelProps={{
                      shrink: true,
                      classes: {root: classes.textFieldRoot}
                    }}
                    InputProps={{
                      classes: {input: classes.textInputRoot}
                    }}
                    component={TextField}
                  />
                </GridItem>
              </GridContainer>
            )}
          />
        </div>
        <div className={classes.email}>
          <span className={classes.emailLeft}>Sign In Activity for alisingh493@gmail.com</span>
          <span className={classes.emailRight}>(last 90 days)</span>
        </div>

        <div className={classes.table}>
          <Table
            // pagination={{
            //   total: props.total,
            //   current: props.page,
            //   pageSize: props.pageSize,
            //   onChange: onPageChange,
            //   onShowSizeChange: onShowSizeChange
            // }}

            columns={columns}
            dataSource={props.data}
            onHeaderRow={{
              className: classes.onHeaderRow
            }}
            onBodyRow={{
              className: classes.tableRow
            }}
          />
        </div>
      </Card>

      <div xs={12} sm={12} md={12} className={classes.pagination}>
        <GenPaginationV1
          total={50}
          current={1}
          pageSize={6}
          showSizeChanger
          onChange={null}
          onShowSizeChange={null}
          pageSizeOptions={[6, 12, 18, 24]}
        />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);