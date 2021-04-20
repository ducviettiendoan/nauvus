import React from "react";
// @material-ui/core components
// @material-ui/icons
import Chip from "@material-ui/core/Chip";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import SafetyCard from "./Card";
import "./Safety.css";
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import { Link } from 'react-router-dom';
import { cardTitle, roseColor } from "assets/jss/material-dashboard-pro-react.js";
import CloseIcon from "components/Icons/CloseIcon";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";


const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0"
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem"
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px"
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    // fontStyle: italics
    color: "#999999"
  },
  topHeaderTitle: {
    textAlign: "left",
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderButton: {

    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px"
  },
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "0px !important",
    paddingLeft: "23px !important",

  },
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
  },
  chips: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8
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
  headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: 8
    }
  },
  chipRow: {
    marginLeft: "8px",
  },
  cardMargin: {
    margin: "16px !important",
  },
  subTitleposition: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0px 30px 0px 0px !important",

  },
  secondPage: {
    backgroundColor: "#ECEEF0",
  },

};

const useStyles = makeStyles(styles);

export default function InboxList() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Standard Admin' },
    { key: 1, label: 'Full admin' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            {/* Main Card */}
            <Card testimonial className={classes.cardMargin}>
              <CardBody className="body">

                {/* Nav Bar */}
                <GridContainer className={classes.gridTitle}>
                  <GridItem xs={12} sm={12} md={6}>
                    <GridContainer className={classes.headContainer}>
                      <GridItem xl={2} className={classes.userRolesTitle}> {chipData.length} selected for </GridItem>
                      <GridItem xl={10} className={classes.chipSelected}>
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
                      </GridItem>
                    </GridContainer>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6} className={classes.headLeft}>
                    <ToolboxButton placeholder="Search for tag or email" showFilter />
                  </GridItem>

                </GridContainer>

                {/* 3 Cards */}
                <Link to="/safety/inbox/crash/12345"><SafetyCard /></Link>
                <Link to="/safety/inbox/crash/12345"><SafetyCard background="#ECEEF0" /></Link>
                <Link to="/safety/inbox/crash/12345"><SafetyCard /></Link>
              </CardBody>
            </Card>

            <div className="w-100">
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

          </GridContainer>

        </GridItem>
      </GridContainer>
    </div>
  );
}