import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js"; 
import Button from "components/CustomButtons/Button";
import CloseIcon from "components/Icons/CloseIcon";
import DeleteIcon from "components/Icons/DeleteIcon"; 
import Chip from "@material-ui/core/Chip";
import MoreIcon from "components/Icons/MoreIcon";
import Table from "components/Table/TableV1";

import ToolboxButton from "components/CustomButtons/ToolboxButton";
import { connect } from "react-redux"; 
import { getActiveDrivers } from "reducers/setting-org";

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
    textTransform: 'none',
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
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
  },
  textSub: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px',
    paddingTop: '12px !important',
    color: '#25345C',
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
  actionButton: {
    paddingTop: '12px !important',
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    }
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
    fontWeight: "bold"
  },
};

const useStyles = makeStyles(styles);


export function ActiveDrivers(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getActiveDrivers();
  }, []);

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Standard Admin' },
    { key: 1, label: 'Full admin' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }
  const columns = [
    {
      title: 'Name',
      key: 'name',
      onHeaderCell: { className: classes.onHeaderCell },
      render: name => <div className={classes.textName}>{name}</div>,
    },
    {
      title: 'Username',
      key: 'username',
      onHeaderCell: { className: classes.onHeaderCell },
      render: cell => <div className={classes.textEmail}>{cell}</div>
    },
    {
      title: 'Tags',
      key: 'tags',
      onHeaderCell: { className: classes.onHeaderCell },
      render: tags => (<div className={classes.textTags}>{tags}</div>)
    },
    {
      title: 'Peer Group',
      key: 'peerGroup',
      onHeaderCell: { className: classes.onHeaderCell },
      render: cell => <div>{cell}</div>
    },
    {
      title: 'Phone',
      key: 'phone',
      onHeaderCell: { className: classes.onHeaderCell },
      render: cell => <div>{cell}</div>
    },
    {
      title: 'DL State',
      key: 'dlState',
      onHeaderCell: { className: classes.onHeaderCell },
      render: cell => <div>{cell}</div>
    },
    {
      title: 'DL Number',
      key: 'dlNumber',
      onHeaderCell: { className: classes.onHeaderCell },
      render: cell => <div>{cell}</div>
    },
    {
      title: 'Actions',
      key: 'action',
      onHeaderCell: { className: classes.onHeaderCell },
      render: () => (
        <div className={classes.actionButton}>
          <Button justIcon color="google" simple>
            <DeleteIcon className={classes.iconButton} style={{ color: "#C4C4C4", width: '24px', height: '24px' }} />
          </Button>
          <Button justIcon color="google" simple>
            <MoreIcon className={classes.iconButton} style={{ color: "#C4C4C4", width: '24px', height: '24px' }} />
          </Button>
        </div>
      )
    }
  ];
  const onPageChange = (page, pageSize) => { 
    props.getActiveDrivers({ page, pageSize });
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getActiveDrivers({ page, pageSize }); 
  }


  return (
    <div> 
      <Table
        renderTitle={
          <GridContainer justify="space-between" className={classes.gridTitle}>
            <GridItem>
              <GridContainer className={classes.headContainer}>
                <GridItem xl={4} className={classes.userRolesTitle}> {chipData.length} selected for </GridItem>
                <GridItem xl={8} className={classes.chipSelected}>
                  {chipData.map(data => (
                    <Chip
                      deleteIcon={<CloseIcon />}
                      label={data.label}
                      onDelete={handleDelete(data)}
                      className={classes.chip}
                    />
                  ))}
                  {chipData.length > 0 &&
                    (
                      <Button onClick={handleClearAll} className={classes.clearAll}>
                        Clear All
                      </Button>
                    )}
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem>
              <ToolboxButton placeholder="Search gateways" showFilter showTrash />
            </GridItem>
          </GridContainer>

        }
        rowSelection={{
          // selectedRowKeys,
          // onChange: onSelectChange,
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
    </div>
  );
}

const mapStateToProps = ({ settingOrg }) => {
  return {
    data: settingOrg.activeDrivers.data,
    page: settingOrg.activeDrivers.page,
    total: settingOrg.activeDrivers.total,
    pageSize: settingOrg.activeDrivers.pageSize
  };
};

const mapDispatchToProps = {
  getActiveDrivers
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveDrivers);