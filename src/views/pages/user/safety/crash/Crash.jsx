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
import { setShowCrash } from "reducers/safety";
import crashImage from "assets/img/crashImage.png";
import LineChartCard from "../components/LineChart";
import GenPaginationV1 from 'components/Pagination/GenPaginationV1';
import Button from "components/CustomButtons/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from 'components/Icons/ExpandMoreIcon';


const useStyles = makeStyles({
  txtInfoMain: {
    fontSize: 14,
    fontWeight: 400,
    color: "#25345C",
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
  selectForm: {
    width: "100%",
    height: "44px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "20px",
    padding: "0x !important",
    border: "1px solid #ECEEF0 !important",
    "&::before": {
      borderBottom: "0px",
    },
    "& > select:focus": {
      backgroundColor: "#FFFFFF !important",
    },
    "&:hover": {
      borderBottom: "0px",
    },
    marginRight: 15,
  },
  select: {
    color: "#25345C",
    fontWeight: 400,
    fontSize: 14,
    borderStyle: "none",
    borderWidth: 2,
    marginRight: 15,
    paddingTop: 14,
    paddingBottom: 15,
    "&:focus": {
      borderRadius: 12,
      backgroundColor: "white",
      borderColor: "#B4B4B4",
    },
  },
});

function Crash(props) {
  const classes = useStyles();
  useEffect(() => { props.setShowCrash(true) }, []);

  const listValues = [
    "test"
  ]
  const menuProps = {
    classes: {
      paper: classes.paper,
      list: classes.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };



  return (
    <div>
      <GridContainer className={classes.topHeader} justify="space-between">
        <GridItem className={classes.topHeaderTitle}>
          <p>Crash: Jun 24, 4:06 AM EDT</p>
        </GridItem>
        <GridItem >
          <Select
            fullWidth
            disableUnderline
            MenuProps={menuProps}
            className={classes.selectForm}
            classes={{ root: classes.select }}
            IconComponent={() => (<ExpandMoreIcon className={classes.dropDownIcon} />)}
          // value={selectValue1}
          // onChange={handleChange} 
          >
            {listValues.map((value, i) => (
              <MenuItem key={i} value={i}>
                {value}
              </MenuItem>
            ))}
          </Select>
          <Button
            color="white"
            aria-label="edit"
            justIcon
            round
            className={`btn-36 ${classes.moreAction} m-0`}
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
  setShowCrash
};

export default connect(mapStateToProps, mapDispatchToProps)(Crash);