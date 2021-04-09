import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import DeleteIcon from "components/Icons/DeleteIcon";
import Table from "components/Table/TableV1";
import DotIcon from "components/Icons/DotIcon";
import EditIcon from "components/Icons/EditIcon";
import ChipSelect from 'components/Chip/ChipSelect';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import {connect} from 'react-redux';
import {getDriverEfficiency, getFuelCard} from "../../../../../../reducers/setting-fleet";

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
  chips: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8
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
  onHeaderConnectCell: {
    paddingLeft: 18,
    fontWeight: "bold",
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  dotIcon: {
    color: "#7CE7AC"
  },
  textRoles: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  textAccess: {
    display: "inline-block",
    fontSize: '14px',
    lineHeight: '17px',
    padding: "12px 16px",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    fontWeight: "bold",
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    }
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: "50%"
  },
  rootSelect: {
    width: "100%"
  },
  formRow: {
    marginBottom: 16
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end"
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
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
}));

export function FuelCards(props) {

  const classes = useStyles();

  React.useEffect(() => {
    props.getFuelCard();
  }, []);

  const columns = [
    {
      title: 'Card Vendor',
      key: 'cardVendor',
      onHeaderCell: {className: classes.onHeaderCell},
      render: cardVendor => <div className={classes.textName}>{cardVendor}</div>
    },
    {
      title: 'Code',
      key: 'code',
      onHeaderCell: {className: classes.onHeaderCell},
      render: code => <div className={classes.textEmail}>{code}</div>
    },
    {
      title: 'Bill Group',
      key: 'billGroup',
      onHeaderCell: {className: classes.onHeaderCell},
      render: billGroup => <div className={classes.textEmail}>{billGroup}</div>
    },
    {
      title: 'Email',
      key: 'email',
      onHeaderCell: {className: classes.onHeaderCell},
      render: email => <div className={classes.textEmail}>{email}</div>
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
    props.getFuelCard({page, pageSize});
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getFuelCard({page, pageSize});
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
  console.log(settingFleet.fuelCards)
  return {
    data: settingFleet.fuelCards.data,
    page: settingFleet.fuelCards.page,
    total: settingFleet.fuelCards.total,
    pageSize: settingFleet.fuelCards.pageSize
  };
};

const mapDispatchToProps = {
  getFuelCard
};

export default connect(mapStateToProps, mapDispatchToProps)(FuelCards);
