import React, { useEffect } from "react";
// @material-ui/core components
// @material-ui/icons
// core components
import { connect } from "react-redux";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { InfoOutlined, MoreHoriz } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import { setShowButtonBack } from "reducers/safety";
import crashImage from "assets/img/crashImage.png";
import LineChartCard from "../components/LineChart";
import GenPaginationV1 from 'components/Pagination/GenPaginationV1';
import Button from "components/CustomButtons/Button";
import Select from "components/CustomSelect/Select";


const useStyles = makeStyles({
  txtInfoMain: {
    fontSize: 14,
    fontWeight: 400,
    color: "#25345C",
    marginBottom: 0,
    marginLeft: 8
  },
  alert: {
    background: "#ECEEF0",
    margin: "20px 0px !important"
  },
  crashImage: {
    width: "100%",
    borderRadius: 12
  },
  title: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
  },
  chart: {
    marginTop: 16
  },
  pagination: {
    marginTop: 16
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  topHeader: {
    marginTop: 16
  },
  selectTitle: {
    fontSize: 18,
    fontWeight: 700,
    margin: 0,
    "&> span": {
      color: "#c7c7c7"
    }
  },
  headerTitle: {
    display: "flex", alignItems: "center"
  }
});

function Crash(props) {
  const classes = useStyles();
  useEffect(() => { props.setShowButtonBack(true) }, []);

  const listValues = [
    { label: "Request minute of video", value: 1 },
    { label: "Add star", value: 2 },
    { label: "Dismiss", value: 3 },
    { label: "Needs Review", value: 4 },
  ]
  return (
    <div>
      <GridContainer className={classes.topHeader} justify="space-between">
        <GridItem className={classes.headerTitle}>
          <p className={classes.selectTitle}>Crash: <span>Jun 24, 4:06 AM EDT</span></p>
          <Select
            defaultValue={null}
            options={listValues}
            variant="outlined"
            defaultValue={1}
            className="ml-3"
            onChange={(value) => {
              console.log(value);
            }}
          />
        </GridItem>
        <GridItem className={classes.headerTitle}>
          <p className={classes.selectTitle}><span>Driver:</span> Alexandr Fedyachkin</p>
          <Select
            defaultValue={null}
            options={listValues}
            variant="outlined"
            defaultValue={1}
            className="ml-3"
            autoComplete
            onChange={(value) => {
              console.log(value);
            }}
          />
          <Select
            defaultValue={null}
            options={listValues}
            variant="outlined"
            defaultValue={2}
            onChange={(value) => {
              console.log(value);
            }}
            className="ml-3"
          />
          <Button
            color="white"
            aria-label="edit"
            justIcon
            round
            className={`btn-36 ${classes.moreAction} m-0 ml-3`}
          // onClick={handleOpenMore}
          >
            <MoreHoriz />
          </Button>
        </GridItem>
      </GridContainer>

      <Card className={classes.alert}>
        <CardBody>
          <div className="d-flex" style={{ textAlign: "left" }}>
            <div>
              <InfoOutlined />
            </div>
            <p className={classes.txtInfoMain}> We’re making improvements to Event Review! Learn more about the new features or submit feedback. If you prefer, switch back to classic view.</p>
          </div>
        </CardBody>
      </Card>
      <h3 className={classes.title}>31 km/h - Limit 100</h3>
      <GridContainer>
        <GridItem md={6}>
          <img className={classes.crashImage} src={crashImage} />
        </GridItem>
        <GridItem md={6}>
          <img className={classes.crashImage} src={crashImage} />
        </GridItem>
      </GridContainer>
      <div className={classes.chart}>
        <LineChartCard />
      </div>
      <div className={classes.pagination}>
        <GenPaginationV1
          total={50}
          current={1}
          pageSize={10}
          showSizeChanger
          // onChange={this.onChangePagination}
          // onShowSizeChange={this.onShowSizeChange}
          pageSizeOptions={[10, 20, 30, 40]}
        />
      </div>
    </div>
  );
}

const mapStateToProps = ({ safety }) => {
  return {
    showCrash: safety.showCrash
  };
};

const mapDispatchToProps = {
  setShowButtonBack
};

export default connect(mapStateToProps, mapDispatchToProps)(Crash);