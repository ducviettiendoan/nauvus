import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import DotIcon from "components/Icons/DotIcon";
import EditIcon from "components/Icons/EditIcon";
import avatar from "assets/img/faces/avatar.jpg";
import {connect} from "react-redux";
import {IRootState} from "reducers";
import {getUserRoles} from "reducers/setting-org";

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
    marginLeft: '16px'
  },
  textEmail: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#C4C4C4"
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
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: "50%"
  },
}));


export function PendingInvitations(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getUserRoles();
  }, []);

  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Read-only'},
    {key: 1, label: 'Maintenance'},
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const columns = [
    {
      title: 'User',
      key: 'user',
      onHeaderCell: {className: classes.onHeaderCell},
      render: user => (
        <div className={classes.alignItemsCenter}>
          <div><img src={avatar} alt="user-avatar" className={classes.avatarImage}/></div>
          <div className={classes.textName}>{user}</div>
        </div>
      ),
    },
    {
      title: 'E-Mail',
      key: 'email',
      onHeaderCell: {className: classes.onHeaderCell},
      render: email => <div className={classes.textEmail}>{email}</div>
    },
    {
      title: 'Roles',
      key: 'roles',
      onHeaderCell: {className: classes.onHeaderCell},
      render: roles => (
        <div className={classes.alignItemsCenter}>
          <div><DotIcon className={classes.dotIcon}/></div>
          <div className={classes.textRoles}>{roles}</div>
        </div>
      )
    },
    {
      title: 'Access',
      key: 'access',
      onHeaderCell: {className: classes.onHeaderCell},
      render: access => <div className={classes.textAccess}>{access}</div>
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
  ]

  const onPageChange = (page, pageSize) => {
    props.getUserRoles({ page, pageSize });
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getUserRoles({ page, pageSize });
  }

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
                      deleteIcon={<CloseIcon/>}
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
              <ToolboxButton placeholder="Search for pending invitations" showFilter showTrash/>
            </Grid>
          </Grid>
        }
        rowSelection={{}}
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
    data: settingOrg.userRoles.data,
    page: settingOrg.userRoles.page,
    total: settingOrg.userRoles.total,
    pageSize: settingOrg.userRoles.pageSize
  };
};

const mapDispatchToProps = {
  getUserRoles
};

export default connect(mapStateToProps, mapDispatchToProps)(PendingInvitations);