import React, {useState, useEffect} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import AddOutlined from "@material-ui/icons/AddOutlined";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import './maintenaceStyle.css'
import Button from "components/CustomButtons/Button";
import Calendar from "components/Calendar/Calendar";
import Defects from "../maintenance/components/Defects";
import Dvirs from "../maintenance/components/Dvirs";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import Users from "../settings/org/user-roles/Users";


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

};

const useStyles = makeStyles(styles);

export default function Maintenance() {
  const classes = useStyles();

  const [tab, setTab] = useState(0);

  const handleChange = (event) => {
    setSelectValue({...selectValue, [event.target.name]: event.target.value});

  };

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
                          "Defects",
                          "Dvirs"
                        ]}
                        tabValue={handleChangeTab}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4} md={6} xl={6} className={classes.topHeaderButton}>
                      <Calendar placeholder="Day"/>
                      <Button
                        color="white"
                        aria-label="edit"
                        justIcon
                        round
                        className={`btn-36 ${classes.moreAction} mr-2`}
                      >
                        <MoreHorizontalIcon/>
                      </Button>
                      <Button round className="btn-round-green w-84">
                        <LiveIconWhite/>
                        Live
                      </Button>
                      {tab === 1 &&
                      <Button
                        round
                        className={classes.addButton}
                        startIcon={<AddOutlined className={classes.startIcon}/>}
                        onClick={() => setOpen(true)}
                      >
                        Add Vehicle DVIR
                      </Button>
                      }
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>

          {tab === 0 && <Defects/>}
          {tab === 1 && <Dvirs open={open} openUpload={openUpload} handleClose={handleClose}/>}
        </GridItem>
      </GridContainer>
    </div>
  );
}
