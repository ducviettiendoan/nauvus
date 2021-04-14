import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Table from "components/Table/TableV1";
import EditIcon from "components/Icons/EditIcon";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import {connect} from 'react-redux';
import {getWorkingHour} from "reducers/setting-fleet";
import AddOutlined from "@material-ui/icons/AddOutlined";
import DiaLog from "components/CustomDialog/Dialog";
import AddWorkingHoursForm from "./AddWorkingHoursForm";

const useStyles = makeStyles((theme) => ({
  selected: {
    height: 24,
    width: "auto",
    background: "#ECEEF0 !important",
    borderRadius: 28,
    color: "#25345C !important",
    display: "flex",
    alignItems: "center",
  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px"
  },
  headLeft: {
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: 8
    }
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    marginLeft: '16px'
  },
  textEmail: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    marginLeft: '16px'
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  gridTitle: {
    padding: "20px",
    justifyContent: "flex-end"
  },
  onHeaderCell: {
    fontWeight: "bold",
    paddingLeft: "30px"
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    }
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
  textTags: {
    display: "inline-block",
    fontSize: '14px',
    lineHeight: '17px',
    padding: "12px 16px",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    fontWeight: "bold",
  },
  footerButton: {
    textAlign: "left",
    padding: "30px 0px 0px 48px !important"
  },
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
}));

export function WorkingHours(props) {
  const {openAdd, setOpenAdd} = props;
  const classes = useStyles();

  React.useEffect(() => {
    props.getWorkingHour();
  }, []);

  const columns = [
    {
      title: 'Hours',
      key: 'hours',
      onHeaderCell: {className: classes.onHeaderCell},
      render: hours => (
        <div>
          <div className={classes.textEmail}>{hours[0]}</div>
          <div className={classes.textEmail}>{hours[1]}</div>
        </div>
      )
    },
    {
      title: 'Working Days',
      key: 'workingDays',
      onHeaderCell: {className: classes.onHeaderCell},
      render: workingDays => (
        <div>
          <div className={classes.textEmail}>{workingDays[0]}</div>
          <div className={classes.textEmail}>{workingDays[1]}</div>
        </div>
      )
    },
    {
      title: 'Tags',
      key: 'tags',
      onHeaderCell: {className: classes.onHeaderCell},
      render: tags => (<div className={classes.textTags}>{tags}</div>)
    },
    {
      title: 'Actions',
      key: 'action',
      onHeaderCell: {className: classes.onHeaderCell},
      render: () => (
        <div className={classes.actionButton}>
          <Button justIcon color="twitter" simple>
            <EditIcon className={classes.iconButton} style={{color: "#ffffff", width: '22px', height: '22px'}}/>
          </Button>
        </div>
      )
    }
  ];

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getWorkingHour({page, pageSize});
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getWorkingHour({page, pageSize});
    console.log(page, pageSize)
  }

  return (
    <>
      <DiaLog
          renderTitle={<h3 className={classes.dialogTitle}>Working Hours</h3>}
          handleClose={() => {
            setOpenAdd(false)
          }
          }
          open={openAdd}
      >
        <AddWorkingHoursForm handleClose={() => {
          setOpenAdd(false)
        }}/>
      </DiaLog>
      <Table
        renderTitle={
          <GridContainer className={classes.gridTitle}>
            <GridItem className={classes.headLeft}>
              <ToolboxButton placeholder="Search for tag or email" showFilter showTrash/>
            </GridItem>
          </GridContainer>
        }
        pagination={{
          total: props.total,
          current: props.page,
          pageSize: props.pageSize,
          onChange: onPageChange,
          onShowSizeChange: onShowSizeChange
        }}
        columns={columns}
        dataSource={props.data}
        onHeaderRow={{className: classes.onHeaderRow}}
        onBodyRow={{className: classes.tableRow}}
        renderFooter={
          <GridItem className={classes.footerButton}>
            <Button
              className="btn-transparent w-122 h-41"
              startIcon={<AddOutlined/>}
              onClick={() => {
                setOpenAdd(true)
              }}
            >
              Add Working Hours
            </Button>
          </GridItem>
        }
      />
    </>
  );
}

const mapStateToProps = ({settingFleet}) => {
    return {
      data: settingFleet.workingHours.data,
      page: settingFleet.workingHours.page,
      total: settingFleet.workingHours.total,
      pageSize: settingFleet.workingHours.pageSize
    };
  }
;

const mapDispatchToProps = {getWorkingHour};

export default connect(mapStateToProps, mapDispatchToProps)(WorkingHours);
