import React, {useState, useEffect} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import AddOutlined from "@material-ui/icons/AddOutlined";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import './maintenaceStyle.css'
import Button from "components/CustomButtons/Button";
import Calendar from "components/Calendar/Calendar";
import Defects from "../maintenance/components/Defects";
import Dvirs from "../maintenance/components/Dvirs";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import Users from "../settings/org/user-roles/Users";
import AllReport from "./custom-report/AllReport";
import MyReport from "./custom-report/MyReport";
import { getAllReport } from "reducers/report";
import { connect } from "react-redux";

const styles = {
  marginTop30: {
    marginTop: "30px"
  },
  select: {
    background: "#FFFFFF",
    border: "1px solid #C4C4C4",
    boxSizing: "border-box",
    borderRadius: "20px",
  },

  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important",
  },
  topHeaderButton: {
    textAlign: "right !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
    borderRadius: "30px",
  },
  addButton: {
    background: "#25345C !important",
    borderRadius: "28px !important",
    padding: "14px 16px",
    textTransform: "initial",
    fontSize: '14px !important',
    lineHeight: '17px !important',
    fontStyle: 'normal!important',
    fontWeight: 'bold!important',
    marginLeft: "7px",
    height: "41px !important",
  },
  startIcon: {
    height: "12px",
    width: "12px",
    marginRight: "0px !important",
  },
  button: {
    background: '#25345C !important',
    borderRadius: '28px !important',
    padding: '10px 20px !important',
    textTransform: 'initial !important',
    fontSize:' 14px !important',
    /* font-family: Lato!important; */
    fontStyle: 'normal!important',
    fontWeight: 700,
  }

};

const useStyles = makeStyles(styles);

function CustomReport(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getAllReport();
  }, []);

  const [tab, setTab] = useState(0);

  const handleChangeTab = (newTab) => {
    setTab(newTab);
  };

  const [open, setOpen] = React.useState(false);
  const [openMore, setOpenMore] = React.useState(false);
  const [openUpload, setOpenUpload] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleCloseMore = () => setOpenMore(false)

  const handleOpen = (event) => {
    setOpen(true);
  }
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setOpen(false)
    setOpenMore(false)
    setOpenUpload(false)
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <GridContainer className={classes.topHeader}>
                    <GridItem xs={12} sm={11} md={6} xl={6} className={classes.topHeaderTitle}>
                      <RoundedTabs
                        tabs={[
                          `All Report (${props.pageSize})`,
                          `My Report (${props.pageSize})`
                        ]}
                        tabValue={handleChangeTab}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4} md={6} xl={6} className={classes.topHeaderButton}>
                        <Button
                        round
                        className= {classes.button}
                        startIcon={<AddOutlined />}
                        // onClick={openAssignHOS}
                    >
                        Create Custom Report
                    </Button>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          {tab === 0 && <AllReport/>}
          {tab === 1 && <MyReport/>}
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = ({ report }) => {
    return {
      data: report.allReport.data,
      page: report.allReport.page,
      total: report.allReport.total,
      pageSize: report.allReport.pageSize,
    };
  };
  
const mapDispatchToProps = {
    getAllReport,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomReport);
