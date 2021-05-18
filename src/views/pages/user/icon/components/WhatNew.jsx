import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Grid from '@material-ui/core/Grid';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import Chip from "@material-ui/core/Chip";
import CloseIcon from "../../../../../components/Icons/CloseIcon";
import GenPaginationV1 from "../../../../../components/Pagination/GenPaginationV1";

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
    fontStyle: "italic",
    color: "#999999"
  },
  chips: {
    fontWeight: 400,
    background: "#ECEEF0",
    color: "#B4B4B4",
    fontSize: "12px",
    height: "24px",
  },
  screenBoardContainer: {
    padding: "0px 0px 18px 0 !important"
  },
  screenBoard: {
    height: "205px",
    background: "rgba(37, 52, 92, 0.05)",
    border: "1px dashed #25345C",
    boxSizing: "border-box",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  screenBoardTitle: {
    fontWeight: "bold",
  },
  contentSpace: {
    padding: "0 15px 0 15px",
  },
  chipsPosition: {
    display: 'flex',
    alignItems: "center !important",
    justifyContent: "flex-end",
  },
  centerContent: {
    display: "flex",
    alignItems: "center",
    color: "#25345C",
    fontSize: "14px",
    fontWeight: 700,
    margin: "21px 0 18px 0",
  },
  firstLineContent: {
    marginBottom: "30px",
    color: "#25345C",
    fontSize: "14px",
    fontWeight: 700,
  },
  secondLineContent: {
    marginBottom: "30px",
  },
  lastLineContent: {
    marginBottom: "16px",
  },
  boxLeft: {
    border: "1px solid #ECEEF0",
    borderRadius: "12px",
    padding: "0 15px 0 15px",
    marginBottom: "26px",
  },
  boxRight: {
    border: "1px solid #ECEEF0",
    borderRadius: "12px",
    padding: "0 15px 0 15px",
    marginBottom: "26px",
  },
  contentLeft: {
    padding: "26px 4px 0 16px !important"
  },
  contentRight: {
    padding: "26px 16px 0 4px !important"
  },
  title: {
    color: "#25345C",
    fontSize: '18px',
    fontWeight: 700,
    marginTop: "20px",
  },
  footer: {
    color: "#25345C",
    marginBottom: "30px",
    marginLeft: "20px",
    fontWeight: 700,
  },
  pagination: {
    marginTop: "20px",
    padding: "0px !important",
    "&>div":{
      padding: '0px !important',
    }
  },
};

const useStyles = makeStyles(styles);

export default function WhatNew() {
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
  return (
    <div>
      <Card>
        <GridContainer className={classes.contentSpace}>
          <GridItem xs={12} sm={12} md={12} className={classes.title}>
            The latest features, improvements, and bug fixes.
          </GridItem>
          <GridContainer className={classes.contentSpace}>
            <GridItem xs={6} xl={6} className={classes.contentLeft}>
              <div className={classes.boxLeft}>
                <GridContainer>
                  <GridItem xs={8} xl={8} className={classes.centerContent}>
                    Assign HOS segments faster with Camera ID
                  </GridItem>
                  <GridItem xs={4} xl={4} className={classes.chipsPosition}>
                    <Chip
                      label={'Apr13, 2021'}
                      className={classes.chips}
                    />
                  </GridItem>
                </GridContainer>
                <div className={classes.firstLineContent}>Quickly confirm, assign, and annotate unassigned HOS segments.</div>
                <div className={classes.secondLineContent}>Assigning the right drivers to the right driving segments can take time, especially if you’re not
                  sure
                  who is behind the wheel. Today, we’re helping you streamline the process of managing unidentified
                  drive
                  time by bringing driver photos right into the Unassigned HOS Report.
                </div>
                <div className={classes.lastLineContent}>When you enable Camera ID for your dual-facing dash cams, Samsara uses computer vision and advanced
                  algorithms to automatically suggest who the driving segment belongs to. Now, dash cam stills appear
                  alongside the suggested driver name and the trip segment, giving you all the information you need to
                  quickly confirm, assign, and annotate unassigned HOS segments.
                </div>
                <div className={classes.screenBoardContainer}>
                  <GridItem className={classes.screenBoard}>
                    <GridItem className={classes.screenBoardTitle}>THIS IS A SCREEN</GridItem>
                  </GridItem>
                </div>
                <div className={classes.footer}>Check out our KB</div>
              </div>
            </GridItem>
            <GridItem xs={6} xl={6} className={classes.contentRight}>
              <div className={classes.boxLeft}>
                <GridContainer>
                  <GridItem xs={8} xl={8} className={classes.centerContent}>
                    Assign HOS segments faster with Camera ID
                  </GridItem>
                  <GridItem xs={4} xl={4} className={classes.chipsPosition}>
                    <Chip
                      label={'Apr13, 2021'}
                      className={classes.chips}
                    />
                  </GridItem>
                </GridContainer>
                <div className={classes.firstLineContent}>Quickly confirm, assign, and annotate unassigned HOS segments.</div>
                <div className={classes.secondLineContent}>Assigning the right drivers to the right driving segments can take time, especially if you’re not
                  sure
                  who is behind the wheel. Today, we’re helping you streamline the process of managing unidentified
                  drive
                  time by bringing driver photos right into the Unassigned HOS Report.
                </div>
                <div className={classes.lastLineContent}>When you enable Camera ID for your dual-facing dash cams, Samsara uses computer vision and advanced
                  algorithms to automatically suggest who the driving segment belongs to. Now, dash cam stills appear
                  alongside the suggested driver name and the trip segment, giving you all the information you need to
                  quickly confirm, assign, and annotate unassigned HOS segments.
                </div>
                <div className={classes.screenBoardContainer}>
                  <GridItem className={classes.screenBoard}>
                    <GridItem className={classes.screenBoardTitle}>THIS IS A SCREEN</GridItem>
                  </GridItem>
                </div>
                <div className={classes.footer}>Check out our KB</div>
              </div>
            </GridItem>
          </GridContainer>
        </GridContainer>
      </Card>

      <div xs={12} sm={12} md={12} className={classes.pagination}>
        <GenPaginationV1
          total={50}
          current={1}
          pageSize={6}
          showSizeChanger
          onChange={null}
          onShowSizeChange={null}
          pageSizeOptions={[6, 12, 18, 24]}
        />
      </div>
    </div>
  );
}
