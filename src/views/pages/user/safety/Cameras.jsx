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
import GenPaginationV1 from "components/Pagination/GenPaginationV1";
import {getCamerasData} from "reducers/safety";
import {connect} from "react-redux";

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

  chips: {
    fontWeight: 400,
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8
  },

  gridTitle: {
    padding: "20px"
  },

  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
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

  time: {
    color: "#C4C4C4",
  },
  pagination: {
    marginTop: "20px",
    padding: "0px !important",
    "&>div":{
      padding: '0px !important',
    }
  },
  card: {
    borderRadius: "12px",
  },
  container: {
    paddingTop: "16px"
  }
}));

export function Cameras(props) {
  const classes = useStyles();

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

  React.useEffect(() => {
    props.getCamerasData()
  }, []);

  return (
    <div>
      
      <GridContainer className={classes.container}>
        <GridItem xs={12} sm={12} md={12}>
          <Card className={classes.card}>
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
              { props.data && props.data.length > 0 &&
                <>
                  <CameraCard id = {props.data[0].id} series={100} place={props.data[0].place} name={props.data[0].name} img = {props.data[0].img} status={props.data[0].status}/>
                  <CameraCard id = {props.data[1].id} series={props.data[1].series} place={props.data[1].place} name={props.data[1].name} img = {props.data[1].img} status={props.data[1].status}/>
                  <CameraCard id = {props.data[2].id} series={props.data[2].series} place={props.data[2].place} name={props.data[2].name} img = {props.data[2].img} status={props.data[2].status}/>
                  <CameraCard id = {props.data[3].id} series={props.data[3].series} place={props.data[3].place} name={props.data[3].name} img = {props.data[3].img} status={props.data[3].status}/>
                  <CameraCard id = {props.data[0].id} series={props.data[0].series} place={props.data[0].place} name={props.data[0].name} img = {props.data[0].img} status={props.data[0].status}/>
                  <CameraCard id = {props.data[1].id} series={props.data[1].series} place={props.data[1].place} name={props.data[1].name} img = {props.data[1].img} status={props.data[1].status}/>
                  <CameraCard id = {props.data[2].id} series={props.data[2].series} place={props.data[2].place} name={props.data[2].name} img = {props.data[2].img} status={props.data[2].status}/>
                  <CameraCard id = {props.data[3].id} series={props.data[3].series} place={props.data[3].place} name={props.data[3].name} img = {props.data[3].img} status={props.data[3].status}/>
                </>
              }
            </Grid>

          </Card>
          <Grid item xs={12} sm={12} md={12} className={classes.pagination}>
            <GenPaginationV1
              total={50}
              current={1}
              pageSize={6}
              showSizeChanger
              onChange={null}
              onShowSizeChange={null}
              pageSizeOptions={[6, 12, 18, 24]}
            />
          </Grid>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = ({safety}) => {
  console.log(safety.cameras);
  return {
    data: safety.cameras.data,
  };
};

const mapDispatchToProps = {
  getCamerasData
};

export default connect(mapStateToProps, mapDispatchToProps)(Cameras);

