import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import {connect} from 'react-redux';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import {getCoachingDriverQueueData} from "reducers/compliance";

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
  chips: {
    fontWeight: 400,
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
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  tableTitle: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Lato",
    fontSize: "16px",
    fontWeight: 700,
  },
  centerTitle: {
    display: "flex",
    alignItems: "center",
  },
}));

export function DriverQueue(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getCoachingDriverQueueData();
  }, []);

  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Cycle Tomorrow'},
    {key: 1, label: 'Cycle Remaining'},
  ]);

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
    props.getCoachingDriverQueueData({page, pageSize});
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getCoachingDriverQueueData({page, pageSize});
    console.log(page, pageSize)
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div>
            <Table
              renderTitle={
                <Grid container className={classes.gridTitle}>
                  <Grid item xs={12} sm={12} md={6} className={classes.centerTitle}>
                    <span className={classes.tableTitle}>148 drivers</span>
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
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = ({compliance}) => {
  return {
    data: compliance.coachingDriverQueue.data,
    page: compliance.coachingDriverQueue.page,
    total: compliance.coachingDriverQueue.total,
    pageSize: compliance.coachingDriverQueue.pageSize
  };
};

const mapDispatchToProps = {
  getCoachingDriverQueueData
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverQueue);
