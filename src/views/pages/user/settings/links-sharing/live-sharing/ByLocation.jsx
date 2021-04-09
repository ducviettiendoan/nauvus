import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import AddOutlined from "@material-ui/icons/AddOutlined";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import EditIcon from "components/Icons/EditIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import { connect } from "react-redux";
import { getByLocation } from "reducers/setting-link-sharing";
import Table from "components/Table/TableV1";
import CopyIcon from "components/Icons/CopyIcon";

const styles = {
  liveSharingHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  liveSharingTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    color: "#25345C",
    marginTop: 10

  },
  liveSharingButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: 8
    }
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
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
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important"
  },
  topHeaderButton: {
    textAlign: "right",
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
  },
  textSub: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    },
  },
  actionIcon: {
    marginTop: "10px"
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  onHeaderCell: {
    fontWeight: "bold"
  },

  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  gridTitle: {
    padding: "20px"
  },
};

const useStyles = makeStyles(styles);

function ByLocation(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getByLocation();
  }, []);

  const onShowSizeChange = (page, pageSize) => {
    props.getByLocation({ page, pageSize });
    console.log(page, pageSize)
  }

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getByLocation({ page, pageSize });
  }

  const columns = [
    {
      title: 'Location',
      key: 'location',
      onHeaderCell: { className: classes.onHeaderCell },
      render: location => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{location}</div>
        </div>
      ),
    },
    {
      title: 'Name',
      key: 'name',
      onHeaderCell: { className: classes.onHeaderCell },
      render: name => <div className={classes.textSub}>{name}</div>
    },
    {
      title: 'Description',
      key: 'description',
      onHeaderCell: { className: classes.onHeaderCell },
      render: description => <div className={classes.textSub}>{description}</div>
    },
    {
      title: 'Link Expires',
      key: 'linkExpires',
      onHeaderCell: { className: classes.onHeaderCell },
      render: linkExpires => <div className={classes.textSub}>{linkExpires}</div>
    },
    {
      title: 'Actions',
      key: 'action',
      onHeaderCell: { className: classes.onHeaderCell },
      render: () => (
        <div className={classes.actionButton}>
          <Button justIcon color="twitter" simple>
            <EditIcon className={classes.iconButton} style={{ color: "#ffffff", width: '22px', height: '22px' }} />
          </Button>
          <Button justIcon color="google" simple>
            <DeleteIcon className={classes.iconButton} style={{ color: "#C4C4C4", width: '24px', height: '24px' }} />
          </Button>
          <Button justIcon color="google" simple>
            <CopyIcon className={classes.iconButton} style={{ color: "#ffffff", width: '22px', height: '22px' }} />
          </Button>
        </div>
      )
    }
  ]

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Table
                renderTitle={
                  <GridContainer justify="space-between" className={classes.gridTitle}>
                    <GridItem className={classes.liveSharingTitle}>
                      22 locations
                    </GridItem>
                    <GridItem className={classes.liveSharingButton}>
                      <ToolboxButton placeholder={"Search locations"} />
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
                onHeaderRow={{
                  className: classes.onHeaderRow
                }}
                onBodyRow={{
                  className: classes.tableRow
                }}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = ({ settingLinkSharing }) => {
  return {
    data: settingLinkSharing.byLocations.data,
    page: settingLinkSharing.byLocations.page,
    total: settingLinkSharing.byLocations.total,
    pageSize: settingLinkSharing.byLocations.pageSize
  };
};

const mapDispatchToProps = {
  getByLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(ByLocation);
