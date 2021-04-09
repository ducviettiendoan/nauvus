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
import {getGateway} from "reducers/setting-device";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import {connect} from 'react-redux';
import DiaLog from "../../../../../../components/CustomDialog/Dialog";
import OrganizationUpload from "../../../../../../components/CustomUpload/OrganizationUpload";
import InviteUserForm from "../../org/user-roles/InviteUserForm";
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

export function Gateway(props) {

  const classes = useStyles();

  React.useEffect(() => {
    props.getGateway();
  }, []);

  const columns = [
    {
      title: 'Gateway Serial',
      key: 'gatewaySerial',
      onHeaderCell: {className: classes.onHeaderCell},
      render: gatewaySerial => <div className={classes.textName}>{gatewaySerial}</div>
    },
    {
      title: 'Gateway',
      key: 'gateway',
      onHeaderCell: {className: classes.onHeaderCell},
      render: gateway => <div className={classes.textEmail}>{gateway}</div>
    },
    {
      title: 'Name',
      key: 'name',
      onHeaderCell: {className: classes.onHeaderCell},
      render: name => <div className={classes.textEmail}>{name}</div>
    },
    {
      title: 'Data Used (This Month)',
      key: 'dataUsed',
      onHeaderCell: {className: classes.onHeaderCell},
      render: dataUsed => <div className={classes.textEmail}>{dataUsed}</div>
    },
    {
      title: 'Connectivity',
      key: 'connectivity',
      onHeaderCell: {className: classes.onHeaderConnectCell},
      render: roles => (
        <div className={classes.alignItemsCenter}>
          <div><DotIcon className={classes.dotIcon}/></div>
          <div className={classes.textRoles}>{roles}</div>
        </div>
      )
    },
    {
      title: 'Battery',
      key: 'battery',
      onHeaderCell: {className: classes.onHeaderCell},
      render: battery => <div className={classes.textEmail}>{battery}</div>
    },
    {
      title: 'Power State',
      key: 'powerState',
      onHeaderCell: {className: classes.onHeaderCell},
      render: powerState => <div className={classes.textEmail}>{powerState}</div>
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
    props.getGateway({page, pageSize});
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getGateway({page, pageSize});
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

      <DiaLog
          renderTitle={<h3 className={classes.dialogTitle}>Upload CSV File</h3>}
          handleClose={props.handleClose}
          open={props.openUpload}
      >
        <p>Manage your gateways</p>
        <p>
          Manage your gateways via spreadsheet (.CSV file). You can choose to download your existing Gateways List or start from a Sample Template. Please refer to our Knowledge Base to learn more.
        </p>
        <OrganizationUpload />
        <div className={classes.selectButton}>
          <Button
              type="button"
              round
              className="btn-round-active-2 mr-2"
              onClick={props.handleClose}
          > Cancel</Button>
          <Button
              round
              className="btn-round-active mr-2"
              type="submit"
          > Preview</Button>
        </div>
      </DiaLog>
    </div>
  );
}

const mapStateToProps = ({settingDevice}) => {
  return {
    data: settingDevice.gateways.data,
    page: settingDevice.gateways.page,
    total: settingDevice.gateways.total,
    pageSize: settingDevice.gateways.pageSize
  };
};

const mapDispatchToProps = {
  getGateway
};

export default connect(mapStateToProps, mapDispatchToProps)(Gateway);
