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
import {getValidAddress} from "reducers/setting-fleet";
import DeleteIcon from "components/Icons/DeleteIcon";

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
}));

export function ValidAddresses(props) {

  const classes = useStyles();

  React.useEffect(() => {
    props.getValidAddress();
  }, []);

  const columns = [
    {
      title: 'Address',
      key: 'address',
      onHeaderCell: {className: classes.onHeaderCell},
      render: address => <div className={classes.textName}>{address}</div>
    },
    {
      title: 'Name',
      key: 'name',
      onHeaderCell: {className: classes.onHeaderCell},
      render: name => (
        <div>
          <div className={classes.textEmail}>{name.addressName}</div>
          <div className={classes.textID}>ID: {name.addressId}</div>
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
      title: 'Notes',
      key: 'notes',
      onHeaderCell: {className: classes.onHeaderCell},
      render: notes => (<div className={classes.textEmail}>{notes}</div>)
    },
    {
      title: 'Address Type',
      key: 'address_type',
      onHeaderCell: {className: classes.onHeaderCell},
      render: address_type => (<div className={classes.textEmail}>{address_type}</div>)
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
          <Button justIcon color="google" simple>
            <DeleteIcon className={classes.iconButton} style={{color: "#C4C4C4", width: '24px', height: '24px'}}/>
          </Button>
        </div>
      )
    }
  ];

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getValidAddress({page, pageSize});
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getValidAddress({page, pageSize});
    console.log(page, pageSize)
  }

  return (
    <div>
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
      />
    </div>
  );
}

const mapStateToProps = ({settingFleet}) => {
    return {
      data: settingFleet.validAddresses.data,
      page: settingFleet.validAddresses.page,
      total: settingFleet.validAddresses.total,
      pageSize: settingFleet.validAddresses.pageSize
    };
  }
;

const mapDispatchToProps = {getValidAddress};

export default connect(mapStateToProps, mapDispatchToProps)(ValidAddresses);
