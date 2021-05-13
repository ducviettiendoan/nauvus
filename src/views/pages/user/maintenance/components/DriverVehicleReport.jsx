import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Calendar from "components/Calendar/Calendar";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import front from "assets/img/bg-car.png";
import back from "assets/img/bg-car-back.png"
import AddOutlined from "@material-ui/icons/AddOutlined";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Select from "components/CustomSelect/Select";
import Grid from '@material-ui/core/Grid';
import defaultImage from "assets/img/Upload.png";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";

const useStyles = makeStyles((theme) => ({
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: "0 !important"
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
  titleDetail: {
    fontSize: "14px",
    lineHeight: "17px",
    color: "#25345C",
    fontWeight: "700"
  },
  detail: {
    fontSize: "14px",
    lineHeight: "17px",
    color: "#B4B4B4",
    fontWeight: "400",

  },
  detailContainer: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid rgba(236, 238, 240, 1)",
    padding: "16px",
    borderRadius: "12px",

  },
  titleResolve: {
    fontSize: "20px",
    lineHeight: "17px",
    color: "#25345C",
    fontWeight: "700",
    marginBottom: 8,
    marginTop: 24

  },
  detailResolve: {
    fontSize: "14px",
    lineHeight: "17px",
    color: "#B4B4B4",
    fontWeight: "400",
    marginBottom: 30
  },
  titleTask: {
    fontSize: "12px",
    lineHeight: "18px",
    color: "#B4B4B4",
    fontWeight: "700",
    paddingLeft: '25px !important',
    paddingRight: "0px !important",
    marginTop: "15px",
  },
  attachment: {
    fontSize: "18px",
    lineHeight: "27px",
    color: "#25345C",
    fontWeight: "700",
    minWidth: "180px",
    paddingRight: "0px !important",
    marginTop: "15px",
  },
  dueTo: {
    fontSize: "12px",
    lineHeight: "18px",
    color: "#25345C",
    fontWeight: "700",
  },
  status: {
    fontSize: "12px",
    lineHeight: "18px",
    color: "#B4B4B4",
    fontWeight: "700",
  },
  icon: {
    color: "#fff",
    marginLeft: "-10px",
    width: "26x",
    height: "24px"
  },
  upload: {
    fontSize: "12px",
    lineHeight: "14px",
    color: "#B4B4B4",
    fontWeight: "700",
    marginLeft: "9px"
  },
  uploadSection: {
    display: "flex",
    alignItems: "center",
  },
  inspectDirectionLeft: {
    fontSize: "16px",
    lineHeight: "19.2px",
    color: "#25345C ",
    fontWeight: "700",
    textAlign: "left",
  },
  inspectDirectionRight: {
    fontSize: "16px",
    lineHeight: "19.2px",
    color: "#25345C ",
    fontWeight: "700",
    textAlign: "right",
  },
  inspection: {
    marginTop: 30,
    display: "flex",
    justifyContent: "space-between"
  },
  addBtn: {
    fontSize: "14px",
    lineHeight: "17px",
    color: "#25345C ",
    fontWeight: "700 !important",
    boxShadow: "unset",
    "&>span": {
      justifyContent: "initial !important",
    },
  },
  carImage: {
    width: "99%",
  },
  styleSelect: {
    "&>div>div>div>div:n-of-type(even)": {
      color: "red",
    },
  },
  alignButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "10px !important",
  },
  pictureContainer: {
    width: "30px !important",
    height: "32px !important",
    margin: "80px auto 0 auto !important",
    backgroundColor: "transparent !important",
    border: "none !important",
    borderRadius: "0 !important",
    "&>img": {
      width: "80% !important",
    },
  },
  txtChooseFile: {
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#B4B4B4",
    display: "flex",
    alignItems: 'center',
    cursor: "pointer !important",
  },
  organizationUpload: {
    "&>div": {
      margin: "0px !important",
    },
    display: "flex",
    cursor: "pointer !important",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  imageHeaderFront: {
    margin: "0 0 16px 16px",
  },
  imageHeaderBack: {
    margin: "0 16px 16px 0",
  },
  addIcon: {
    color: "rgba(196, 196, 196, 1)",
    cursor: "pointer",
  },
  dueHeader: {
    marginBottom: "15px"
  },
  pagination: {
    marginTop: "20px",
    padding: "0px !important",
    "&>div":{
      padding: '0px !important',
    }
  },
  addNote: {
    color: "#25345C",
    fontSize: "14px",
    fontWeight: 700,
    marginLeft: "5px",
    cursor: "pointer",
    width: "120px",
  },
  addButton: {
    display: "flex",
    alignItems: "center",
    border: "0px",
    backgroundColor: "#FFFFFF",
    marginTop: "20px",
  },
  red:{
    color: "red",
  },
  green:{
    color: "green",
  }
}));

export default function DriverVehicleReport(props) {
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const handleChangeTab = (newTab) => {
    setTab(newTab);
  };

  const listValues = [
    {
      label: <div className={classes.red}>
        Unresolved
      </div>, value: 1
    },
    {
      label: <div className={classes.green}>
        Resolved
      </div>, value: 2
    },
  ];

  const [file, setFile] = React.useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(defaultImage);
  const handleImageChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let newFile = e.target.files[0];
    reader.onloadend = () => {
      setFile(newFile);
      setImagePreviewUrl(reader.result);
    };
    if (newFile) {
      reader.readAsDataURL(newFile);
    }
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer className={classes.topHeader}>
            <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
              <RoundedTabs
                tabs={[
                  "Defects",
                  "Dvirs"
                ]}
                tabValue={handleChangeTab}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
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
            </GridItem>
          </GridContainer>
          <Card>
            <CardBody>
              <GridContainer className={classes.detailContainer}>
                <GridItem>
                  <div className={classes.titleDetail}>Inspection Type</div>
                  <div className={classes.detail}>Pre-trip</div>
                </GridItem>
                <GridItem>
                  <div className={classes.titleDetail}>Organisation/Carrier name</div>
                  <div className={classes.detail}>Singh Transport Logistics</div>
                </GridItem>
                <GridItem>
                  <div className={classes.titleDetail}>Autnor/Arent/Driver name</div>
                  <div className={classes.detail}>Ali Singh</div>
                </GridItem>
                <GridItem>
                  <div className={classes.titleDetail}>Date</div>
                  <div className={classes.detail}>Feb 20, 5:16 AM</div>
                </GridItem>
                <GridItem>
                  <div className={classes.titleDetail}>Location</div>
                  <div className={classes.detail}>1021 North street</div>
                </GridItem>
                <GridItem>
                  <div className={classes.titleDetail}>Duration</div>
                  <div className={classes.detail}>2m 53s</div>
                </GridItem>
                <GridItem>
                  <div className={classes.titleDetail}>Vehicle name</div>
                  <div className={classes.detail}>Vehicle 101</div>
                </GridItem>
                <GridItem>
                  <div className={classes.titleDetail}>Odometer</div>
                  <div className={classes.detail}>69,469 mi</div>
                </GridItem>
                <GridItem>
                  <div className={classes.titleDetail}>License Plate</div>
                  <div className={classes.detail}>QW14T3</div>
                </GridItem>
              </GridContainer>
              <GridContainer className={classes.resolveArea}>
                <GridItem xs={12} sm={12} md={12} className={classes.titleResolve}>
                  Resolve Defects
                </GridItem>
                <GridItem xs={12} sm={12} md={12} className={classes.detailResolve}>
                  Task created on 07 Jun 2019
                </GridItem>
                <GridItem xs={12} md={12} lg={2} className={classes.styleSelect}>
                  <div>Fuel System</div>
                  <Select
                    options={listValues}
                    variant="outlined"
                    value={1}
                    onChange={(value) => {
                      console.log(value);
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={4} md={4} lg={2} className={classes.alignButton}>
                  <button className={classes.addButton}>
                    <AddOutlined className={classes.addIcon}/>
                    <div className={classes.addNote}>Add mechanic note</div>
                  </button>
                </GridItem>
                <GridItem xs={6} sm={4} md={4} lg={2} className={classes.titleTask}>
                  <div className={classes.dueHeader}>Due to</div>
                  <GridContainer>
                    <GridItem xs={12} className={classes.dueTo}>
                      Feb 20, 5:13 AM
                    </GridItem>
                    <GridItem xs={12} className={classes.status}>
                      Oil pressure low
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={6} sm={4} md={4} lg={2} className={classes.attachment}>
                  <div className={classes.dueHeader}>Attachments</div>
                  <Grid item className={classes.uploadSection}>
                    <div className={`picture-container ${classes.organizationUpload}`}>
                      <div className={`picture ${classes.pictureContainer}`}>
                        <img src={imagePreviewUrl} className="picture-src" alt="..."/>
                        <input type="file" onChange={e => handleImageChange(e)}/>
                      </div>
                      <div className={`${classes.txtChooseFile}`}>Upload your attachment</div>
                    </div>
                  </Grid>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} className={classes.titleResolve}>
                  Walkaround Inspection
                </GridItem>
                <GridItem xs={12} className={classes.detail}>
                  Walkaround Inspection
                </GridItem>
              </GridContainer>
              <GridContainer className={classes.inspection}>
                <Grid item xs={6} className={classes.inspectDirectionLeft}>
                  <div className={classes.imageHeaderFront}>Front</div>
                  <img src={front} className={classes.carImage}/>
                </Grid>
                <Grid item xs={6} className={classes.inspectDirectionRight}>
                  <div className={classes.imageHeaderBack}>Back</div>
                  <img src={back} className={classes.carImage}/>
                </Grid>
              </GridContainer>
            </CardBody>
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

