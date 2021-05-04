import React from "react";
import { connect } from 'react-redux';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';

import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Table from "components/Table/TableV1";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { getInsidents } from "reducers/alerts";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

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
    fontSize: '14px',
    lineHeight: '24px',
    color: '#25345C'
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
  nearMeIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    color: "#fff",
    borderRadius: "50%",
    "&> svg": {
      fontSize: 16
    }
  },
  boxNearMeIcon: {
    display: "flex"
  },
  cardConfigure: {
    height: "100%"
  }
}));

export function Configure(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
  }, []);



  return (
    <Card className={classes.cardConfigure}>
      aaaa
    </Card>
  );
}

const mapStateToProps = ({ alerts }) => {
  return {
  };
};

const mapDispatchToProps = {
  getInsidents
};

export default connect(mapStateToProps, mapDispatchToProps)(Configure);
