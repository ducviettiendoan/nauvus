import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import {Form, Field} from 'react-final-form';
import {TextField, Checkbox, Radio, Select} from 'final-form-material-ui';

import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import DeleteIcon from "components/Icons/DeleteIcon";
import Table from "components/Table/TableV1";
import EditIcon from "components/Icons/EditIcon";
import ChipSelect from 'components/Chip/ChipSelect';
import { getSensor} from "reducers/setting-device";
import DiaLog from "components/CustomDialog/Dialog";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import {connect} from 'react-redux';
import ActivateDevicesForm from "./ActivateDevicesForm";

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
    padding: "20px"
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

export function Sensors(props) {
  console.log(props.data)

  const classes = useStyles();

  React.useEffect(() => {
    props.getSensor();
  }, []);

  const columns = [
    {
      title: 'Name',
      key: 'name',
      onHeaderCell: {className: classes.onHeaderCell},
      render: name => <div className={classes.textName}>{name}</div>
    },
    {
      title: 'Product',
      key: 'product',
      onHeaderCell: {className: classes.onHeaderCell},
      render: product => <div className={classes.textEmail}>{product}</div>
    },
    {
      title: 'Sensor ID',
      key: 'sensorID',
      onHeaderCell: {className: classes.onHeaderCell},
      render: sensorID => <div className={classes.textEmail}>{sensorID}</div>
    },
    {
      title: 'Signal',
      key: 'signal',
      onHeaderCell: {className: classes.onHeaderCell},
      render: signal => <div className={classes.textEmail}>{signal}</div>
    },
    {
      title: 'Paired Asset',
      key: 'pairedAsset',
      onHeaderCell: {className: classes.onHeaderCell},
      render: pairedAsset => <div className={classes.textEmail}>{pairedAsset}</div>
    },
    {
      title: 'Position',
      key: 'position',
      onHeaderCell: {className: classes.onHeaderCell},
      render: position => <div className={classes.textEmail}>{position}</div>
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

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleDelete = (chipToDelete) => () => setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  const handleClearAll = () => setSelectedRowKeys(() => [])
  const onSelectChange = selectedRowKeys => setSelectedRowKeys(() => [...selectedRowKeys])

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getSensor({page, pageSize});
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getSensor({page, pageSize});
    console.log(page, pageSize)
  }

  return (
    <div>

      <Table
        renderTitle={
          <GridContainer justify="space-between" className={classes.gridTitle}>
            <GridItem>
              <ChipSelect
                data={selectedRowKeys}
                handleDelete={handleDelete}
                handleClearAll={handleClearAll}
              />
            </GridItem>
            <GridItem className={classes.headLeft}>
              <ToolboxButton placeholder="Search for tag or email" showFilter showTrash/>
            </GridItem>
          </GridContainer>
        }
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
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

      <DiaLog
          renderTitle={<h3 className={classes.dialogTitle}>Activate Devices</h3>}
          handleClose={props.handleClose}
          open={props.open}
      >
        <ActivateDevicesForm handleClose={props.handleClose}/>
      </DiaLog>

    </div>
  );
}

const mapStateToProps = ({settingDevice}) => {
  return {
    data: settingDevice.sensors.data,
    page: settingDevice.sensors.page,
    total: settingDevice.sensors.total,
    pageSize: settingDevice.sensors.pageSize
  };
};

const mapDispatchToProps = {
  getSensor
};

export default connect(mapStateToProps, mapDispatchToProps)(Sensors);
