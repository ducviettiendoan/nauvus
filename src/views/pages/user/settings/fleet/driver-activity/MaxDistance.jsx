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
import {getMaxDistance} from "reducers/setting-fleet";
import AddOutlined from "@material-ui/icons/AddOutlined";
import DiaLog from "components/CustomDialog/Dialog";
import AddMaxDistanceForm from "./AddMaxDistanceForm";

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

export function MaxDistance(props) {
  const {openAdd, setOpenAdd} = props;
  const classes = useStyles();

  React.useEffect(() => {
    props.getMaxDistance();
  }, []);

  const columns = [
    {
      title: 'Distance',
      key: 'distances',
      onHeaderCell: {className: classes.onHeaderCell},
      render: distances => (
        <div>
          <div className={classes.textEmail}>{distances[0]}</div>
          <div className={classes.textEmail}>{distances[1]}</div>
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
    props.getMaxDistance({page, pageSize});
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getMaxDistance({page, pageSize});
    console.log(page, pageSize)
  }

  return (
    <>
      <DiaLog
          renderTitle={<h3 className={classes.dialogTitle}>Max Distance</h3>}
          handleClose={() => {
            setOpenAdd(false)
          }
          }
          open={openAdd}
      >
        <AddMaxDistanceForm handleClose={() => {
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
    data: settingFleet.maxDistances.data,
    page: settingFleet.maxDistances.page,
    total: settingFleet.maxDistances.total,
    pageSize: settingFleet.maxDistances.pageSize
  };
};

const mapDispatchToProps = {
  getMaxDistance
};

export default connect(mapStateToProps, mapDispatchToProps)(MaxDistance);
