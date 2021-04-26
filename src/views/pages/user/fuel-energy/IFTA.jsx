import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import {connect} from "react-redux";
import {getIFTAData} from "reducers/fuel-energy";
import Table from "components/Table/TableV1";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Calendar from "components/Calendar/Calendar";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import AddOutlined from "@material-ui/icons/AddOutlined";
import FilterButton from "components/CustomButtons/FilterButton";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";

const styles = {
  colorBlue: {
    color: "#25345C"
  },
  colorGrey: {
    color: "#C4C4C4"
  },
  boldBlueLeft: {
    color: "#25345C",
    fontWeight: "700",
    textAlign: "left"
  },
  fontSize16: {
    fontSize: "1rem!important"
  },
  bigCard: {
    marginTop: "0px!important",
    marginBottom: "20px!important",
    height: "90%",
  },
  bigCardGridItem: {
    padding: "16px 8px!important",

  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px"
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    // marginTop: '14px',
    color: '#25345C',
    paddingLeft: "12px"
  },
  textSub: {
    fontWeight: '400',
    color: '#25345C',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
    '&:hover': {
      cursor: "pointer"
    }
  },
  onHeaderCell: {
    fontWeight: "bold",
    color: '#25345C'
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
  selected: {
    height: 24,
    width: "auto",
    background: "#ECEEF0 !important",
    borderRadius: 28,
    color: "#25345C !important",
    display: "flex",
    alignItems: "center",
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
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
  },
  headRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  chips: {
    background: "#ECEEF0",
    color: "rgba(180, 180, 180, 1)",
    fontSize: "12px",
    marginRight: 8,
    fontWeight: 400,
  },
  textEmail: {
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    fontWeight: 400,
  },

  onHeaderCellFirst: {
    fontWeight: 700,
    color: "#25345C",
    paddingLeft: "28px"
  },
  onHeaderCellNext: {
    fontWeight: 700,
    color: "#25345C",
  },
  title: {
    color: "#25345C",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "bold",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    marginBottom: "20px"
  },

  cardHeaderTitle: {
    color: "#25345C",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "bold",
    textAlign: "center",
    paddingRight: "25px"
  },
  cardHeaderSubTitle: {
    color: "#C4C4C4",
    fontSize: "14px",
    lineHeight: "21px",
    fontWeight: "normal",
    textAlign: "center",
    paddingRight: "25px"
  },
  cardHeader: {
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px"
  },
  noPadding: {
    padding: "0!important",
    margin: "0!important"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important",
    height: "38px",
    width: "91px"
  },
  topHeaderButton: {
    textAlign: "right !important",
    display: "flex",
    alignItems: "center"
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
  },
  headerRight: {
    textAlign: "right",
  },
  textTitle: {
    fontWeight: 700,
    color: "rgba(37, 52, 92, 1)",
    fontSize: "16px",
    margin: "0px 16px",
  },
  pagination: {
    marginTop: "20px",
    padding: "0px !important",
    "&>div": {
      padding: '0px !important',
    }
  },
  headerButton: {
    background: "#25345C !important",
    borderRadius: "28px !important",
    padding: "0px 32px !important",
    textTransform: "initial !important",
    fontSize: "14px !important",
    lineHeight: "17px !important",
    /* font-family: Lato!important; */
    fontStyle: "normal!important",
    fontWeight: "bold!important",
  },
  tableHeader: {
    marginBottom: "8px"
  },
  tableHeadButton: {
    marginTop: "14px",
    marginBottom: "30px"
  },
  tableSubHeader: {
    display: "flex",
    justifyContent: "space-around"
  },
  tableSubHeaderField: {
    borderRight: "1px solid #ECECF2"
  }
};

const useStyles = makeStyles(styles);

export function IFTA(props) {
  const classes = useStyles();

  React.useEffect(() => {
    props.getIFTAData();
  }, []);

  const [value, setValue] = useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  const columns = [
    {
      key: "jurisdiction",
      title: "Jurisdiction",
      onHeaderCell: {className: classes.onHeaderCellFirst},
      render: (jurisdiction) => (
        jurisdiction.id % 2 === 0 ?
          <div className={classes.alignItemsCenter}>
            <div className={classes.textName}>{jurisdiction.jurisdictionEven}</div>
          </div>
          :
          <div className={classes.alignItemsCenter}>
            <div className={classes.textName}>{jurisdiction.jurisdictionOdd}</div>
          </div>
      ),
    },
    {
      key: "taxableMiles",
      title: "Taxable Miles",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: taxableMiles => taxableMiles.id % 2 === 0 ?
        <div className={classes.textEmail}>{taxableMiles.taxableMilesEven}</div> :
        <div className={classes.textEmail}>{taxableMiles.taxableMilesOdd}</div>
    },
    {
      key: "totalMiles",
      title: "Total Miles",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: totalMiles => totalMiles.id % 2 === 0 ?
        <div className={classes.textEmail}>{totalMiles.totalMilesEven}</div> :
        <div className={classes.textEmail}>{totalMiles.totalMilesOdd}</div>
    },
    {
      key: "taxPaidGallons",
      title: "Tax Paid Gallons",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: taxPaidGallons => <div className={classes.textEmail}>{taxPaidGallons}</div>
    },
  ]

  return (
    <GridContainer className="developer-metric-wrapper">
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer className={classes.topHeader}>
              <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                <RoundedTabs tabs={["Jurisdiction", "Vehicles", "TroubleShooting(2)"]} tabValue={handleChangeTab}/>
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

            <Table
              renderTitle={
                <div className={classes.tableHeader}>
                  <Grid container className={classes.tableHeadButton}>
                    <Grid item xs={6} sm={6} md={6} className={classes.headerLeft}>
                      <div className={classes.textTitle}>Fleet IFTA MPG</div>
                      <Chip
                        label={"February 2021, All Fuel Types"}
                        className={classes.chips}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} className={classes.headerRight}>
                      <Button
                        round
                        className="btn-round-active mr-2"
                        startIcon={<AddOutlined/>}
                        // onClick={() => setOpen(true)}
                      >
                        Add purchase
                      </Button>
                      <FilterButton/>
                    </Grid>
                  </Grid>

                  <Grid container className={classes.tableSubHeader}>
                    <Grid xs={12} sm={2} md={2} className={classes.tableSubHeaderField}>
                      <div className={classes.cardHeaderTitle}>105.2 mi</div>
                      <div className={classes.cardHeaderSubTitle}>IFTA Miles</div>
                    </Grid>
                    <Grid xs={12} sm={2} md={2} className={classes.tableSubHeaderField}>
                      <Grid className={classes.cardHeaderTitle}>12.2 mi</Grid>
                      <Grid className={classes.cardHeaderSubTitle}>Non-IFTA Miles</Grid>
                    </Grid>
                    <Grid xs={12} sm={2} md={2} className={classes.tableSubHeaderField}>
                      <Grid className={classes.cardHeaderTitle}>117.4 mi</Grid>
                      <Grid className={classes.cardHeaderSubTitle}>Total Miles</Grid>
                    </Grid>
                    <Grid xs={12} sm={2} md={2} className={classes.tableSubHeaderField}>
                      <Grid className={classes.cardHeaderTitle}>125.4 mi</Grid>
                      <Grid className={classes.cardHeaderSubTitle}>IFTA MPG</Grid>
                    </Grid>
                    <Grid xs={12} sm={2} md={2}>
                      <Grid className={classes.cardHeaderTitle}>Tax Paid Gallons</Grid>
                      <Grid className={classes.cardHeaderSubTitle}>IFTA MPG</Grid>
                    </Grid>
                  </Grid>
                </div>
              }
              columns={columns}
              dataSource={props.data}
              onHeaderRow={{
                className: classes.onHeaderRow
              }}
              onBodyRow={{
                className: classes.tableRow,
                onClick: props.onShowDetail,
              }}
            />

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
      </GridItem>
      <GridItem>
      </GridItem>
    </GridContainer>
  );
}

const mapStateToProps = ({fuelEnergy}) => {
  return {
    data: fuelEnergy.iftaData.data,
    page: fuelEnergy.iftaData.page,
    total: fuelEnergy.iftaData.total,
    pageSize: fuelEnergy.iftaData.pageSize,
  };
};

const mapDispatchToProps = {
  getIFTAData,
};

export default connect(mapStateToProps, mapDispatchToProps)(IFTA);
