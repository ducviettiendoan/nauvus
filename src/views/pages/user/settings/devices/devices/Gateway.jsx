import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import DeleteIcon from "components/Icons/DeleteIcon";
import DotIcon from "components/Icons/DotIcon";
import MoreIcon from "components/Icons/MoreIcon";
import {connect} from "react-redux";
import {IRootState} from "reducers";
import {getGateway} from "reducers/setting-device";
import ChipSelect from 'components/Chip/ChipSelect';
import Table from "components/Table/TableV1";


const styles = {
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
  selected: {
    height: 24,
    width: "auto",
    background: "#ECEEF0 !important",
    borderRadius: 28,
    color: "#25345C !important",
    display: "flex",
    alignItems: "center",
  },
  clearAll: {
    textTransform: "none",
    color: "#8097D8",
    background: "unset !important",
    boxShadow: "unset !important",
    fontSize: 14,
    fontWeight: 700,
    padding: 0,
    "&:hover": {
      color: "#25345C"
    }
  },
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
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
    marginTop: '14px',
    color: '#25345C',
    marginLeft: '24px',
    paddingTop: '10px !important'
  },
  textRoles: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  textSub: {
    color: '#25345C',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px',
    paddingTop: '10px !important'
  },
  actionButton: {
    paddingTop: '10px !important'
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    }
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    marginLeft: '24px'
  },
  chip: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: 12,
    marginRight: 8
  },
  indeterminateIcon: {
    width: 20,
    height: 20
  },
  checkBoxIcon: {
    width: 20,
    height: 20,
    marginTop: 30,
    marginLeft: 12
  },
  gridTitle: {
    padding: "20px",
  },
  onHeaderCell: {
    fontWeight: "bold",
    color: "#25345C"
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  tableTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#25345C",
    display: "flex",
    alignItems: "center",
  }
};

const useStyles = makeStyles(styles);

export function Gateway(props) {
  const classes = useStyles();
  console.log(props.data)
  React.useEffect(() => {
    // Get list data
    props.getGateway();
  }, []);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleDelete = (chipToDelete) => () => setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  const handleClearAll = () => setSelectedRowKeys(() => [])
  const onSelectChange = selectedRowKeys => setSelectedRowKeys(() => [...selectedRowKeys])

  const onPageChange = (page, pageSize) => {
    props.getGateway({ page, pageSize });
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getGateway({ page, pageSize });
  }


  const columns = [
    {
      title: 'Gateway Serial',
      key: 'gatewaySerial',
      onHeaderCell: { className: classes.onHeaderCell },
      render: cell => (
          <div className={classes.textName}>{cell}</div>
      ),
    },
    {
      title: 'Gateway',
      key: 'gateway',
      onHeaderCell: { className: classes.onHeaderCell },
      render: cell => <div className={classes.textSub}>{cell}</div>
    },
    {
      title: 'Name',
      key: 'name',
      onHeaderCell: { className: classes.onHeaderCell },
      render: cell => (
          <div className={classes.textSub}>{cell}</div>

      )
    },
    {
      title: 'Data Used (This Month)',
      key: 'dataUsed',
      onHeaderCell: { className: classes.onHeaderCell },
      render: cell => <div className={classes.textSub}>{cell}</div>

    },
    {
      title: 'Connectivity',
      key: 'connectivity',
      onHeaderCell: { className: classes.onHeaderCell },
      render: cell => (
          <>
            <div className={classes.alignItemsCenter}>
              <div><DotIcon style={{color: "#7CE7AC", marginTop: 10}}/></div>
              <div className={classes.textRoles}>{cell}</div>
            </div>
          </>
      )
    },
    {
      title: 'Power State',
      key: 'powerState',
      onHeaderCell: { className: classes.onHeaderCell },
      render: cell => <div className={classes.textSub}>{cell}</div>
    },
    {
      title: 'Action',
      key: 'action',
      onHeaderCell: { className: classes.onHeaderCell },
      render: cell => <div className={classes.textSub}>{cell}</div>
    },
  ];

  const addActionButton = () => {
    return (
      <div className={classes.actionButton}>
        <Button justIcon color="google" simple>
          <DeleteIcon className={classes.iconButton} style={{color: "#C4C4C4", width: '24px', height: '24px'}}/>
        </Button>
        <Button justIcon color="twitter" simple>
          <MoreIcon className={classes.iconButton} style={{color: "#ffffff", width: '24px', height: '24px'}}/>
        </Button>
      </div>
    )
  }


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
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
                        <ToolboxButton placeholder={"Search gateways"} showFilter showEdit showLink showTrash/>
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
                  onHeaderRow={{ className: classes.onHeaderRow }}
                  onBodyRow={{ className: classes.tableRow }}
              />
            </GridItem>
          </GridContainer>

        </GridItem>
      </GridContainer>
    </div>
  );
}

export default connect(
  ({settingDevice}: IRootState) => ({
    data: settingDevice.gateways.data,
    page: settingDevice.gateways.page,
    total: settingDevice.gateways.total,
    pageSize: settingDevice.gateways.pageSize
  }),
  {
    getGateway
  }
)(Gateway);