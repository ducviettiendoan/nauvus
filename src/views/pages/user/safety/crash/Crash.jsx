import React, { useEffect, useState } from "react";
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
import MultipleSearchBox from "components/SearchBox/MultipleSearchBox";
import CustomTimeline from "components/CustomTimeline/CustomTimeline";
import ShareIcon from '@material-ui/icons/Share';
import DiaLog from "components/CustomDialog/Dialog";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import { GOOGLE_MAP_API_KEY } from "config/constants";
import avatar from "assets/img/faces/avatar.jpg";
import StarYellowIcon from "components/Icons/StarYellowIcon";
import StarGreyIcon from "components/Icons/StarGreyIcon";
import LocationIcon from "components/Icons/LocationIcon";


const RegularMap = withScriptjs(
  withGoogleMap((props) => {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={props.center}
        defaultOptions={{
          scrollwheel: false,
          mapTypeControl: false,
          streetViewControl: false
        }}
      />
    )
  })
);

const styles = theme => (
  {
    txtInfoMain: {
      fontSize: 14,
      fontWeight: 400,
      color: "#25345C",
      marginBottom: 0,
      marginLeft: 8
    },
    alert: {
      background: "#ECEEF0",
      margin: "20px 0px !important",
    },
    alertFooter: {
      background: "#ECEEF0",
      margin: "20px 0px !important",
      width: "100%",
      [theme.breakpoints.up('md')]: {
        width: "50%",
      },
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
      color: "#25345C",
      "&> span": {
        color: "#c7c7c7"
      }
    },
    headerTitle: {
      display: "flex",
      alignItems: "center"
    },
    viewDetail: {
      padding: 16
    },
    activity: {
      fontSize: 18,
      fontWeight: 700,
      margin: "16px 0",
      color: "#25345c"
    },
    avatar: {
      padding: 24,
      textAlign: "center",
      "& > h3": {
        fontSize: 18,
        fontWeight: 700,
        margin: "16px 0 0",
      },
      "& > img": {
        padding: "0 24px",
        borderRadius: "50%"
      },
      "& > p": {
        fontSize: 14,
        fontWeight: 400,
        marginBottom: 16
      }
    },
    dialogTitle: {
      fontSize: 18,
      fontWeight: 700,
      margin: "16px 0 0",
    },
    cardInfo: {
      padding: 16
    },
    viewHeader: {
      display: "flex",
      alignItems: "center"
    },
    alertFooterContent: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    txtInfoMainFooter: {
      fontWeight: 700,
      fontSize: 14,
      color: "#B4B4B4",
      lineHeight: "16.8px",
      marginBottom: 0,
    },
    chipSelected: {
      display: "flex",
      alignItems: "center",
      paddingLeft: "0px !important",
      paddingTop: "23px"
    },
    chips: {
      background: "#ECEEF0",
      color: "#25345C",
      fontSize: "12px",
      marginRight: 8,
      fontWeight: 400
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
    cardMargin: {
      margin: "16px",
      display: "flex",
      flexDirection: "row",
      padding: 16,
      flexWrap: "wrap"
    },
    tripContent: {
      paddingLeft: "5px",
      minWidth: "237px !important"
    },
    dest: {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#25345C",
      fontWeight: "400",
      display: "flex"
    },
    time: {
      fontSize: "12px",
      lineHeight: "18px",
      color: "#B4B4B4",
      fontWeight: "400",
      marginBottom: 4,
      textAlign: "left"
    },
    tripContainer: {
      marginBottom: "12px !important",
      width: "100%",
      paddingTop: "4px",
      [theme.breakpoints.up('md')]: {
        width: "306px",
      },
    },
    timeline: {
      maxWidth: "306px",
      margin: "auto"
    },
    mapWrapper: {
      padding: 0,
      width: "100%",
      [theme.breakpoints.up('md')]: {
        width: "calc(100% - 306px)",
      },
    },
    buttonPaddingLeft: {
      padding: "12px 16px!important",
      marginRight: 8
    },
    buttonPadding: {
      padding: "12px 16px!important",
    },
    location: {
      width: 270,
      margin: "auto",
      marginTop: "16px",
      marginBottom: "16px",
      textAlign: "left",
      display: "flex",
      alignItems: "center"
    },
    subText: {
      color: "#25345C",
      fontWeight: 700,
      fontSize: 16
    },
    icon: {
      marginRight: 10,
      fontSize: 18
    },
    mapContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    },
    buttons: {
      textAlign: "center"
    }
  }
)

const useStyles = makeStyles(styles);

function Crash(props) {
  const classes = useStyles();
  const [view, setView] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    props.setShowButtonBack(true)
  }, []);

  const [favoriteState, setFavoriteState] = useState(false)

  const handleFavorite = () => {
    setFavoriteState(favoriteState => !favoriteState)
  }

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Crash automated' },
    { key: 1, label: 'Crash Incident' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const listValues = [
    { label: "Request minute of video", value: 1 },
    { label: "Add star", value: 2 },
    { label: "Dismiss", value: 3 },
    { label: "Needs Review", value: 4 },
  ]

  const listValueCoach = [
    {
      label: <div>
        <span style={{ color: "#B4B4B4" }}>Coach: </span>&nbsp;<span style={{ color: "#25345C" }}>Unassigned</span>
      </div>,
      value: 1
    }
  ]

  const renderMap = () => {
    return (
      <RegularMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`}
        loadingElement={<div style={{ height: 280 }} />}
        containerElement={<div className={classes.mapWrapper} />}
        mapElement={<div style={{ height: 280, borderRadius: 12 }} />}
        isMarkerShown
        center={{ lat: 40.748817, lng: -73.985428 }}
      />
    )
  }

  const data = [
    {
      label: "Collision Risk",
      options: [
        { label: "Defensive Driving", value: "value1" },
        { label: "Following Distance", value: "value2" },
        { label: "Forward Collision Warning", value: "value5" },
        { label: "Late Response", value: "value6" },
        { label: "Following of 0-2s", value: "value3" },
        { label: "Following of 2-4s", value: "value4" },
      ],
    },
    {
      label: "Distracted Driving",
      options: [
        { label: "Near Collision", value: "value7" },
        { label: "Distracted Driving", value: "value8" },
      ],
    },
  ];
  const timelineContent = [
    {
      title: "B",
      content: <div className={classes.tripContent}>
        <div className={classes.dest}> Highway 401Express, Mississauga, ON</div>
        <div className={classes.time}> 11:38 AM EDT</div>
      </div>,
      color: "green",
    },
    {
      title: "A",
      content: <div className={classes.tripContent}>
        <div className={classes.dest}> Highway 401Express, Mississauga, ON</div>
        <div className={classes.time}>Mar 22, 11:37 AM EDT</div>
      </div>,
      color: "red",
    }
  ]
  const [openDialog, setOpenDialog] = React.useState(false)
  const handleClose = () => {
    setOpenDialog(false)
  }

  return (
    <div>

      <GridContainer className={classes.topHeader} justify="space-between">
        <GridItem className={classes.headerTitle}>
          <p className={classes.selectTitle}>Crash: <span>Jun 24, 4:06 AM EDT</span></p>
          <MultipleSearchBox className="ml-3" data={data} />
        </GridItem>
        <GridItem>
          <GridContainer>
            <GridItem className={classes.headerTitle}>
              <p className={classes.selectTitle}><span>Driver:</span> Alexandr Fedyachkin</p>
            </GridItem>
            <GridItem className={classes.headerTitle}>
              <Select
                options={listValueCoach}
                variant="outlined"
                value={1}
                autoComplete
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </GridItem>
            <GridItem className={classes.headerTitle}>
              <Select
                options={listValues}
                variant="outlined"
                value={4}
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </GridItem>
            <GridItem className={classes.headerTitle}>
              <Button
                color="white"
                aria-label="edit"
                justIcon
                round
                className={`btn-36 ${classes.moreAction} m-0 `}
              >
                <MoreHoriz />
              </Button>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>

      {view ? (
        <Card className={classes.viewDetail}>
          <GridContainer style={{ justifyContent: "center" }}>
            <GridItem xs={12} lg={9}>
              <div className={classes.viewHeader}>
                {favoriteState ? <StarYellowIcon style={{ fontSize: 18, marginRight: 10, marginBottom: 3 }} onClick={handleFavorite} /> :
                  <StarGreyIcon style={{ fontSize: 18, marginRight: 10, marginBottom: 3 }} onClick={handleFavorite} />}
                <h3 className={classes.selectTitle}>Jun 24, 4:06 AM EDT</h3>
              </div>
              <div className={classes.chipSelected}>
                <Select
                  multiple
                  autoComplete
                  options={listValues}
                  value={[4]}
                  onChange={(value) => {
                    console.log(value);
                  }}
                />
                {/* {chipData.map(data => (
                  <Chip
                    deleteIcon={<CloseIcon />}
                    label={data.label}
                    onDelete={handleDelete(data)}
                    className={classes.chips}
                  />
                ))}
                <Button
                  className="btn-transparent w-84 h-41"
                  startIcon={<AddOutlined />}
                >
                  Add
                  </Button> */}
              </div>
              <Card className={classes.cardInfo}>
                <GridContainer justify="space-between">
                  <GridItem>
                    <h3 className={classes.selectTitle}>Vehicle</h3>
                    <p className={classes.txtInfoMain}>229 </p>
                  </GridItem>
                  <GridItem md={4}>
                    <h3 className={classes.selectTitle}>Drive</h3>
                    <Select
                      fullWidth
                      options={listValues}
                      placeholder="Start typing ..."
                      onChange={(value) => {
                        console.log(value);
                      }}
                    />
                  </GridItem>
                  <GridItem>
                    <h3 className={classes.selectTitle}>Max G-force</h3>
                    <p className={classes.txtInfoMain}>2.10 G </p>
                  </GridItem>
                  <GridItem>
                    <h3 className={classes.selectTitle}>Vehicle Sensitivity</h3>
                    <p className={classes.txtInfoMain}>Heavy Duty</p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card className={classes.alert}>
                <CardBody>
                  <div className="d-flex" style={{ textAlign: "left", marginBottom: 16 }}>
                    <div>
                      <InfoOutlined />
                    </div>
                    <h3 className={classes.selectTitle}>Safety Tip</h3>
                  </div>
                  <p className={classes.txtInfoMain}> Amet minim Amet minim mollit non deserunt ullamco est sit aliqua
                  dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                  sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                      officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </CardBody>
              </Card>

              <div className={classes.mapContainer}>
                {renderMap()}
                <div className={classes.tripContainer}>
                  <div className={classes.timeline}>
                    <CustomTimeline
                      timelineContent={timelineContent}
                      classes={{
                        root: classes.timelineContent
                      }}
                    />
                  </div>
                  <div className={classes.location}>
                    <LocationIcon className={classes.icon} />
                    <span className={classes.subText}>Highway 401Express, Mississauga, ON</span>
                  </div>
                  <div className={classes.buttons}>
                    <Button
                      round
                      className={`btn-round-white h-41 ` + classes.buttonPaddingLeft}
                    >
                      View Trip
                      </Button>
                    <Button
                      round
                      className={`btn-round-active h-41 ` + classes.buttonPadding}
                    >
                      View Incident Report
                      </Button>
                  </div>
                </div>
              </div>
              <h3 className={classes.activity}>Activity</h3>
              <Card className={classes.alertFooter}>
                <CardBody>
                  <div className={classes.alertFooterContent}>
                    <p className={classes.txtInfoMainFooter}> Add comment or @ mention a coworker </p>
                    <Button round className={`btn-round-active h-41`}>Send</Button>
                  </div>
                </CardBody>
              </Card>

            </GridItem>
            <GridItem xs={12} sm={6} lg={3}>
              <Card className={classes.avatar}>
                <img className="w-100" src={avatar} alt="..." />
                <h3>Alexandr Fedyachkin</h3>
                <p>Drivers, Own</p>
                <div>
                  <Button
                    round
                    className={`btn-round-active h-41 ` + classes.buttonPadding}
                    startIcon={<ShareIcon />}
                    onClick={() => setOpen(true)}
                  >
                    Share with driver
                    </Button>
                </div>
              </Card>
            </GridItem>
          </GridContainer>
        </Card>
      ) : (
        <div>
          <Card className={classes.alert}>
            <CardBody>
              <div className="d-flex" style={{ textAlign: "left" }}>
                <div>
                  <InfoOutlined />
                </div>
                <p className={classes.txtInfoMain}> We’re making improvements to Event Review! Learn more about the new
                  features or submit feedback. If you prefer, switch back to classic view.</p>
              </div>
            </CardBody>
          </Card>
          <h3 className={classes.title}>31 km/h - Limit 100</h3>
          <GridContainer>
            <GridItem md={6}>
              <img className={classes.crashImage} onClick={() => setView(true)} src={crashImage} />
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
      )}
      <DiaLog
        renderTitle={
          <div className="text-center">
            <h3 className={classes.dialogTitle}>Share with driver</h3>
            <p>Driver</p>
          </div>
        }
        open={open}
      >
        <p style={{ fontWeight: 500 }}>Sharing an event with a driver will allow them to view this safety event within the
          driver portal at cloud.nauvus.com/driver.</p>
        <div className="text-right">
          <Button
            round
            className="btn-round-gray w-116 h-41 mr-2"
            onClick={() => setOpen(false)}
          > Cancel </Button>
          <Button
            round
            className={`btn-round-active h-41`}
            startIcon={<ShareIcon />}
            onClick={() => setOpen(false)}
          >
            Share
          </Button>
        </div>
      </DiaLog>
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