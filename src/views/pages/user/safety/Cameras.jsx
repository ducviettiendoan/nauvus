import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from '@material-ui/core/Card';
import CameraCard from "./cameras/CameraCard";
import GenPaginationV1 from "../../../../components/Pagination/GenPaginationV1";


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
  button:{
    background: "#25345C !important",
    borderRadius: "28px !important",
    padding: "14px 32px !important",
    textTransform: "initial !important",
    fontSize: "14px !important",
    lineHeight: "17px !important",
    fontStyle: "normal!important",
    fontWeight: "bold!important",
    width: "100%",
  },
  userOnline: {
    color: "green",
    fontWeight: 700,
  },
  userOffline: {
    color: "red",
    fontWeight: 700,
  },
  time: {
    color: "#C4C4C4",
  },
  liveButton: {
    background: '#ECEEF0!important',
    borderRadius: "22px !important",
    textTransform: "initial !important",
    lineHeight: "17px !important",
    fontStyle: "normal!important",
    fontWeight: "bold!important",
    color: "#25345C!important",
    height: "30px",
    border: "none !important",
    marginLeft: "0px !important",
    width: "60px",
    position: "absolute",
    top: "-5px",
  },

}));

export default function Cameras(props) {
  const classes = useStyles();

  // const showTime = (time) => {
  //   if (time<60){
  //     return time;
  //   }
  //   else{
  //     return
  //   }
  // }

  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Cycle Tomorrow'},
    {key: 1, label: 'Cycle Remaining'},
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const usersData = {
    user1: {
      series: 154,
      place: "West Carolina IIL",
      name: 'John Ursul',
      status: {
        name: "Update",
        online: true,
        time: 5,
      }
    },

    user2: {
      series: 112,
      place: "Florida, L2",
      name: 'Markus Hennry',
      status: {
        name: "Update",
        online: false,
        time: 21,
      }
    },

    user3: {
      series: 234,
      place: "New York, B1 LL",
      name: 'Erick Danko',
      status: {
        name: "Update",
        online: false,
        time: 11,
      }
    },

    user4: {
      series: 323,
      place: "San Francisco, K1",
      name: 'Ricardo Santaro',
      status: {
        name: "Update",
        online: false,
        time: 11,
      }
    },
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
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
                <ToolboxButton placeholder="Search driver" showFilter/>
              </Grid>
            </Grid>

            <Grid container>
              {/*1st column*/}
              <GridItem xs={12} sm={12} sm={12} style={{display: 'flex'}}>
                <CameraCard series={usersData.user1.series} place={usersData.user1.place} name={usersData.user1.name} status={usersData.user1.status}/>
                <CameraCard series={usersData.user2.series} place={usersData.user2.place} name={usersData.user2.name} status={usersData.user2.status}/>
                <CameraCard series={usersData.user3.series} place={usersData.user3.place} name={usersData.user3.name} status={usersData.user3.status}/>
                <CameraCard series={usersData.user4.series} place={usersData.user4.place} name={usersData.user4.name} status={usersData.user4.status}/>
              </GridItem>

              {/*2nd column*/}
              <GridItem xs={12} sm={12} sm={12} style={{display: 'flex', marginTop: "30px"}}>
                <CameraCard series={usersData.user1.series} place={usersData.user1.place} name={usersData.user1.name} status={usersData.user1.status}/>
                <CameraCard series={usersData.user2.series} place={usersData.user2.place} name={usersData.user2.name} status={usersData.user2.status}/>
                <CameraCard series={usersData.user3.series} place={usersData.user3.place} name={usersData.user3.name} status={usersData.user3.status}/>
                <CameraCard series={usersData.user4.series} place={usersData.user4.place} name={usersData.user4.name} status={usersData.user4.status}/>
              </GridItem>
            </Grid>

          </Card>
          <GenPaginationV1 pageSize={1} total={3}/>
        </GridItem>
      </GridContainer>
    </div>
  );
}

