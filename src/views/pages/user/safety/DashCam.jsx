import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {getDashCamData} from "reducers/compliance";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Calendar from "../../../../components/Calendar/Calendar";
import classNames from "classnames";
import LiveIconWhite from "../../../../components/Icons/LiveIconWhite";
import Table from "components/Table/TableV1";
import ToolboxButton from "components/CustomButtons/ToolboxButton";

const useStyles = makeStyles((theme) => ({
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
    paddingLeft: "12px"
  },
  textBold: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontWeight: 700,
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
  onHeaderCellFirst: {
    fontWeight: 700,
    color: "#25345C",
    paddingLeft: "28px"
  },
  onHeaderCellNext: {
    fontWeight: 700,
    color: "#25345C",
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
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
    textAlign: "right !important",
    display: "flex",
    alignItems: "center"
  },

  tableTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Lato",
    fontSize: "16px",
    fontWeight: 700,
  },
  centerTitle: {
    display: "flex",
    alignItems: "center",
  },
  headerTile: {
    display: "flex",
    alignItem: "center",
    justifyContent: "flex-start",
    fontSize: "18px",
    fontWeight: 700,
  }
}));

export function DashCam(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

  React.useEffect(() => {
    // Get list data
    props.getDashCamData();
  }, []);

  const columns = [
    {
      title: 'Rank',
      key: 'rank',
      onHeaderCell: {className: classes.onHeaderCellFirst},
      render: rank => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{rank}</div>
        </div>
      ),
    },
    {
      title: 'Name',
      key: 'name',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: name => <div className={classes.textEmail}>{name}</div>
    },

    {
      title: 'Score',
      key: 'score',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: score => <div className={classes.textEmail}>{score}</div>
    },

    {
      title: 'Events',
      key: 'events',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: events => <div className={classes.textEmail}>{events}</div>
    },
    {
      title: '%Over Speed Limit',
      key: 'overSpeedLimit',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: overSpeedLimit => <div className={classes.textEmail}>{overSpeedLimit}</div>
    },
    {
      title: 'Distracted Rate',
      key: 'distractedRate',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: distractedRate => <div className={classes.textEmail}>{distractedRate}</div>
    },
    {
      title: 'Following Distance Rate',
      key: 'followingDistanceRate',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: followingDistanceRate => <div className={classes.textEmail}>{followingDistanceRate}</div>
    },
    {
      title: "Total Distance",
      key: 'totalDistance',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: totalDistance => <div className={classes.textEmail}>{totalDistance}</div>
    },
  ]

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getDashCamData({page, pageSize});
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getDashCamData({page, pageSize});
    console.log(page, pageSize)
  }

  return (
    <div>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  <span className={classes.headerTile}>Dash Cam List</span>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Calendar placeholder="Day"/>
                  <Button round className="btn-round-green w-84">
                    <LiveIconWhite/>
                    Live
                  </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          <Table
            renderTitle={
              <Grid container className={classes.gridTitle}>
                <Grid item xs={12} sm={12} md={6} className={classes.centerTitle}>
                  <span className={classes.tableTitle}>153 drivers</span>
                </Grid>
                <Grid xs={12} sm={12} md={6} className={classes.headLeft}>
                  <ToolboxButton placeholder="Search driver" showFilter/>
                </Grid>
              </Grid>
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
    </div>
  );
}

const mapStateToProps = ({compliance}) => {
  return {
    data: compliance.dashCam.data,
    page: compliance.dashCam.page,
    total: compliance.dashCam.total,
    pageSize: compliance.dashCam.pageSize,
  };
};

const mapDispatchToProps = {
  getDashCamData
};

export default connect(mapStateToProps, mapDispatchToProps)(DashCam);
