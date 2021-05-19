import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import EditIcon from "components/Icons/EditIcon";

import { getRoles } from "reducers/setting-org";
import { connect } from 'react-redux';
import { IRootState } from "reducers";

const useStyles = makeStyles((theme) => ({
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
    color: '#25345C',
    // marginLeft: '16px'
  },
  textEmail: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C"
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
    fontWeight: "bold"
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  dotIcon: {
    color: "#7CE7AC",
    marginTop: 10
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
}));


function Roles(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getRoles();
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

  // const columns = [
  //   {
  //     title: 'Roles',
  //     key: 'roles',
  //     onHeaderCell: { className: classes.onHeaderCell },
  //     render: role => (
  //       <div className={classes.alignItemsCenter}>
  //         <div className={classes.textName}>{role}</div>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: 'Permission',
  //     key: 'permissions',
  //     onHeaderCell: { className: classes.onHeaderCell },
  //     render: permission => <div className={classes.textEmail}>{permission}</div>
  //   },
  //   {
  //     title: 'Actions',
  //     key: 'action',
  //     onHeaderCell: { className: classes.onHeaderCell },
  //     render: () => (
  //       <div className={classes.actionButton}>
  //         <Button justIcon color="twitter" simple>
  //           <EditIcon className={classes.iconButton} style={{ color: "#ffffff", width: '22px', height: '22px' }} />
  //         </Button>
  //         <Button justIcon color="google" simple>
  //           <DeleteIcon className={classes.iconButton} style={{ color: "#C4C4C4", width: '24px', height: '24px' }} />
  //         </Button>
  //       </div>
  //     )
  //   }
  // ]

  const columns = [
    {
      title: 'Roles',
      key: 'name',
      onHeaderCell: { className: classes.onHeaderCell },
      render: name => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{name}</div>
        </div>
      ),
    },
    {
      title: 'Permission',
      key: 'description',
      onHeaderCell: { className: classes.onHeaderCell },
      render: description => <div className={classes.textEmail}>{description}</div>
    },
    {
      title: 'Actions',
      key: 'id',
      onHeaderCell: { className: classes.onHeaderCell },
      render: () => (
        <div className={classes.actionButton}>
          <Button justIcon color="twitter" simple>
            <EditIcon className={classes.iconButton} style={{ color: "#ffffff", width: '22px', height: '22px' }} />
          </Button>
          <Button justIcon color="google" simple>
            <DeleteIcon className={classes.iconButton} style={{ color: "#C4C4C4", width: '24px', height: '24px' }} />
          </Button>
        </div>
      )
    }
  ]

  const onPageChange = (page, pageSize) => {
    props.getUserRoles({ page, pageSize });
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getUserRoles({ page, pageSize });
  }

  console.log(props.data);
  return (
    <div>
      <Table
        renderTitle={
          <Grid container className={classes.gridTitle}>
            <Grid item xs={12} sm={12} md={6}>
              <Grid container className={classes.headContainer}>
                <Grid item xl={2} className={classes.userRolesTitle}> {chipData.length} selected for </Grid>
                <Grid item xl={10} className={classes.chipSelected}>
                  {chipData.map(data => (
                    <Chip
                      deleteIcon={<CloseIcon />}
                      label={data.label}
                      onDelete={handleDelete(data)}
                      className={classes.chips}
                    />
                  ))}
                  {chipData.length > 0 ?
                    (
                      <Button onClick={handleClearAll} className={classes.clearAll}>
                        Clear All
                      </Button>
                    ) : ""}
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} sm={12} md={6} className={classes.headLeft}>
              <ToolboxButton placeholder="Search for role" showFilter showTrash />
            </Grid>
          </Grid>
        }
        // rowSelection={{}}
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
    data: settingOrg.roles.data,
    page: settingOrg.roles.page,
    total: settingOrg.roles.total,
    pageSize: settingOrg.roles.pageSize
  };
};

const mapDispatchToProps = {
  getRoles
};

export default connect(mapStateToProps, mapDispatchToProps)(Roles);