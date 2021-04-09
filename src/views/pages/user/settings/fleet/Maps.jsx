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
import {getSettingMap} from "reducers/setting-fleet";
import DeleteIcon from "components/Icons/DeleteIcon";
import AddOutlined from "@material-ui/icons/AddOutlined";

const useStyles = makeStyles((theme) => ({
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
  textID: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#C4C4C4',
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
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: '18px',
    color: '#25345C',
  },
  topHeaderButton: {
    textAlign: "right",
  },
  onHeaderRightCell: {
    textAlign: "right",
    fontWeight: "bold",
    paddingRight: "30px"
  },
  actionButton: {
    textAlign: "right"
  }
}));

export function Maps(props) {

  const classes = useStyles();

  React.useEffect(() => {
    props.getSettingMap();
  }, []);

  const columns = [
    {
      title: 'Name',
      key: 'name',
      onHeaderCell: {className: classes.onHeaderCell},
      render: name => <div className={classes.textName}>{name}</div>
    },
    {
      title: 'Actions',
      key: 'action',
      onHeaderCell: {className: classes.onHeaderRightCell},
      render: () => (
        <div className={classes.actionButton}>
          <Button justIcon color="twitter" simple>
            <EditIcon className={classes.iconButton} style={{color: "#ffffff", width: '22px', height: '22px'}}/>
          </Button>
          <Button justIcon color="google" simple>
            <DeleteIcon className={classes.iconButton} style={{color: "#C4C4C4", width: '24px', height: '24px'}}/>
          </Button>
        </div>
      )
    }
  ];

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getSettingMap({page, pageSize});
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getSettingMap({page, pageSize});
    console.log(page, pageSize)
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer className={classes.topHeader}>
            <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
              Map Customization List
            </GridItem>
            <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
              <Button
                round
                className="btn-round-active mr-2"
                startIcon={<AddOutlined />}
              >
                Upload Image
              </Button>
            </GridItem>

          </GridContainer>
        </GridItem>
      </GridContainer >
      <Table
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
      />
    </div>
  );
}

const mapStateToProps = ({settingFleet}) => {
    return {
      data: settingFleet.maps.data,
      page: settingFleet.maps.page,
      total: settingFleet.maps.total,
      pageSize: settingFleet.maps.pageSize
    };
  }
;

const mapDispatchToProps = {getSettingMap};

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
