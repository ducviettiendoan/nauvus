import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button";
import { Card, Grid } from "@material-ui/core";
import CarImg from "assets/img/car.png"
import ImageUploadV1 from "components/CustomUpload/ImageUploadV1";
import CustomInput from "components/CustomInput/CustomInput";
import { InfoOutlined } from "@material-ui/icons";
import DownloadIcon from "components/Icons/DownloadIcon"
import PenIcon from "components/Icons/PenIcon";
import ArchiveIcon from "components/Icons/ArchiveIcon";
import DeleteIcon2 from "components/Icons/DeleteIcon2";
import DiaLog from "components/CustomDialog/Dialog";
import DeleteIcon from "components/Icons/DeleteIcon";
// map
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import { GOOGLE_MAP_API_KEY } from "config/constants";


const useStyles = makeStyles((theme) => ({
  cardContainer: {
    marginTop: "16px",
    borderRadius: "12px",
    boxShadow: "none !important",
    padding: "16px 0px 16px 0px",
    display: "flex"
  },
  textHeader: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: "32px",
    color: "#25345C",
  },
  textPhotos: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "21px",
    color: "#B4B4B4",
    padding: "5px 0px 10px 0px"
  },
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#C4C4C4',
    marginBottom: "0px !important"
  },
  textInputRoot: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C',
    padding: "6px 0 17px"
  },
  sidebarInput: {
    width: "100%",
    paddingTop: "18px",
    marginBottom: "15px",
  },
  warningCard: {
    border: "1px solid #ECEEF0",
    borderRadius: "12px",
    padding: "16px !important",
    background: "#ECEEF0",
    display: "flex",
    flexDirection: "row",
    boxShadow: "none"
  },
  warningContent: {
    color: "#25345C",
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: "normal",
    textAlign: "left"
  },
  detailContainer: {
    display: "flex",
    marginBottom: "4px",
  },
  detailTitle: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "18px",
    color: "#25345C",
  },
  detailContent: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "18px",
    color: "#25345C",
  },
  textTitle: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "21px",
    color: "#C4C4C4",
  },
  textContent: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "21px",
    color: "#25345C",
  },
  textContainer: {
    marginBottom: "12px"
  },
  toolButton: {
    background: "#FFFFFF",
    "&:hover": {
      background: "#C4C4C4",
    },
    "&:focus": {
      background: "#FFFFFF",
    },
  },
  btnText: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: 12,
    lineHeight: "14px",
    color: "#25345C",
  },
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center",
    marginBottom: "8px"
  },
  dialogSubTitle: {
    color: "#B4B4B4",
    fontWeight: 400,
    fontSize: 16,
    margin: "24px",
    textAlign: "center",
    marginTop: 0
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end"
  },
  dialogContent: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "18px",
    color: "#25345C",
    marginBottom: "16px",
  },
}));

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

export default function CardDetail() {
  const classes = useStyles();

  const [openDelete, setOpenDelete] = useState(false);


  const handleDelete = () => {
    setOpenDelete(true)
  }

  const renderMap = () => {
    return (
      <div style={{ position: 'relative' }}>
        <RegularMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`}
          loadingElement={<div style={{ height: 280 }} />}
          containerElement={<div />}
          mapElement={<div style={{ height: 280, borderRadius: 12 }} />}
          isMarkerShown
          center={{ lat: 40.748817, lng: -73.985428 }}
        />
      </div>
    )
  }

  return (
    <>
      <DiaLog
        renderTitle={
          <>
            <h3 className={classes.dialogTitle}>Confirmation</h3>
            <div className={classes.dialogSubTitle}>Documents</div>
          </>
        }
        handleClose={() => {
          setOpenDelete(false)
        }}
        open={openDelete}
      >
        <div className={classes.dialogContent}>Are you sure you want to delete the selected Document? Once removed, it will no longer be accessible.</div>
        <div className={classes.selectButton}>
          <Button
            type="button"
            round
            className="btn-round-active-2 mr-2"
            onClick={() => setOpenDelete(false)}
          > Cancel</Button>
          <Button
            round
            className="btn-round-active mr-2"
            type="submit"
            startIcon={<DeleteIcon style={{ top: "3px" }} />}
          >Delete</Button>
        </div>
      </DiaLog>
      <Card className={classes.cardContainer}>
        <GridItem xs={12} sm={12} md={8}>
          <>
            <Grid className={classes.textHeader}>Driver Form Details</Grid>
            <Grid className={classes.textPhotos}>Photos</Grid>
            <div style={{ display: "flex", columnGap: "16px", paddingBottom: "25px" }}>
              <Grid xs={12} sm={4} md={4}>
                <img src={CarImg} alt="Car Image" />
              </Grid>
              <Grid xs={12} sm={4} md={4}>
                <img src={CarImg} alt="Car Image" />
              </Grid>
              <Grid xs={12} sm={4} md={4}>
                <ImageUploadV1 />
              </Grid>
            </div>
            <CustomInput
              labelText="Order Number or Shipping Id"
              name="asset"
              formControlProps={{
                className: classes.sidebarInput
              }}
              inputProps={{
                placeholder: "Enter assets",
                // onChange: handleInputChange,
                defaultValue: "12345",
                classes: { input: classes.textInputRoot },
              }}
              labelProps={{
                shrink: true,
                classes: { root: classes.textFieldRoot }
              }}
            />
          </>
          <>
            <Grid className={classes.textHeader}>Signature</Grid>
            <Grid className={classes.textPhotos}>Signed Mar 23, 2021 4:18 AM</Grid>
            <Card className={classes.warningCard}>
              <InfoOutlined />
              <GridItem className={classes.warningContent}>
                I consent on behalf of myself and my employer to using electronic signatures in this transaction.
                I understand that I can request a copy of the signed documentation from the party requesting my signature.
          </GridItem>
            </Card>
          </>
          <>
            <Grid className={classes.textHeader}>Scan document</Grid>
            <Grid className={classes.textPhotos}>Scan document - 1</Grid>
            <div style={{ display: "flex", columnGap: "16px", paddingBottom: "25px" }}>
              <Grid xs={12} sm={4} md={4}>
                <img src={CarImg} alt="Car Image" />
              </Grid>
              <Grid xs={12} sm={4} md={4}>
                <img src={CarImg} alt="Car Image" />
              </Grid>
              <Grid xs={12} sm={4} md={4}>
                <ImageUploadV1 />
              </Grid>
            </div>
          </>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Grid className={classes.textHeader}>Submission Details</Grid>
          <Grid className={classes.textPhotos}>Updated On Apr 5, 2021 2:38 PM</Grid>
          <hr className="my-2" />

          <Grid className={classes.detailContainer}>
            <div className={classes.detailTitle}>Driver:</div> &nbsp;
          <div className={classes.detailContent}>Ali Singh (alisingh)</div>
          </Grid>
          <Grid className={classes.detailContainer} style={{ marginBottom: "16px" }}>
            <div className={classes.detailTitle}>Vehicle:</div> &nbsp;
          <div className={classes.detailContent}>Vehicle 101</div>
          </Grid>

          <div>{renderMap()}</div>


          <div style={{ marginTop: "10px", marginBottom: "16px" }}>
            <Grid style={{ display: "flex", justifyContent: "space-between", }}>
              <Grid className={classes.textContainer}>
                <Grid className={classes.textTitle}>Updated On</Grid>
                <Grid className={classes.textContent}>Apr 5, 2021 2:38 PM</Grid>
              </Grid>
              <Grid className={classes.textContainer}>
                <Grid className={classes.textTitle}>Received On</Grid>
                <Grid className={classes.textContent}>Mar 23, 2021 4:18 AM</Grid>
              </Grid>
            </Grid>
            <Grid className={classes.textContainer}>
              <Grid className={classes.textTitle}>Driver Submitted On</Grid>
              <Grid className={classes.textContent}>Apr 5, 2021 2:38 PM</Grid>
            </Grid>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <Grid className={classes.textHeader}>Notes</Grid>
            <Grid className={classes.textPhotos}>None</Grid>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Button
                round
                justIcon
                className={classes.toolButton}
              >
                <DownloadIcon />
              </Button>
              <div className={classes.btnText}>Get PDF</div>
            </div>
            <div>
              <Button
                round
                justIcon
                className={classes.toolButton}
              >
                <PenIcon />
              </Button>
              <div className={classes.btnText}>Edit</div>
            </div>
            <div>
              <Button
                round
                justIcon
                className={classes.toolButton}
              >
                <ArchiveIcon />
              </Button>
              <div className={classes.btnText}>Archive</div>
            </div>
            <div>
              <Button
                round
                justIcon
                className={classes.toolButton}
                onClick={handleDelete}
              >
                <DeleteIcon2 />
              </Button>
              <div className={classes.btnText}>Delete</div>
            </div>
          </div>
        </GridItem>
      </Card>
    </>
  );
}