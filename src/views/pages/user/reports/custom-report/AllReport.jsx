import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Table from "components/Table/TableV1";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { useHistory } from "react-router-dom";
import Popper from "@material-ui/core/Popper";
import classNames from "classnames";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import ArrowRightBlueIcon from "components/Icons/ArrowRightBlueIcon";
import Accordion from "components/Accordion/Accordion";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import CheckSquareOutlined from "components/Icons/CheckSquareOutlined";
import Avatar from "@material-ui/core/Avatar";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import { primaryColor } from "assets/jss/material-dashboard-pro-react";
import { getAllReport } from "reducers/report";
import { connect } from "react-redux";


const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important",
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
      color: "#25345C",
    },
  },
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important",
  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px",
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important",
  },
  headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: 8,
    },
  },
  textName: {
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#25345C",
    paddingLeft: "12px",
  },
  textEmail: {
    fontSize: "16px",
    lineHeight: "21px",
    color: "#25345C",
    fontWeight: 400,
  },
  textEmail2: {
    fontSize: "16px",
    lineHeight: "21px",
    color: "#25345C",
    fontWeight: 400,
    textAlign: 'center',
  },
  chips: {
    fontWeight: 400,
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8,
  },
  tableRow: {
    "&:nth-of-type(even)": {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  gridTitle: {
    padding: "20px",
  },
  onHeaderCellFirst: {
    fontWeight: 700,
    color: "#25345C",
    paddingLeft: "28px",
  },
  onHeaderCellNext: {
    fontWeight: 700,
    color: "#25345C",
  },
  onHeaderCellLast: {
    fontWeight: 700,
    color: "#25345C",
    textAlign: "center",
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  textStatus: {
    fontSize: "14px",
    lineHeight: "24px",
    paddingLeft: "0px !important",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: "53px",
    height: "41px",
  },
  textStatus2: {
    border: "1px solid #ECEEF0 !important",
    fontSize: "14px",
    lineHeight: "24px",
    padding: "0px !important",
    color: "#25345C",
    background: "#FFFFFF",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: "95px",
    height: "40px",
  },
  dropdownVehicle: {
    borderRadius: "12px",
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
    width: "300px",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
  popperHeaderContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 5px 20px 5px !important",
  },
  popperHeader: {
    color: "#25345C",
    fontSize: "24px",
    lineHeight: "29px",
    fontWeight: "bold",
  },
  popperInput: {
    paddingBottom: "8px",
    paddingTop: "8px",
  },
  tagTitle: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "19px",
  },
  grayAvatar: {
    background: "#ECEEF0 !important",
    color: "#B4B4B4",
    marginRight: 8,
    fontSize: 12,
    fontWeight: 700,
  },
  dropdownItemVehicle: {
    marginLeft: "8px",
    fontWeight: 700,
    fontSize: "14px",
    color: "#25345C",
  },
  checked: {
    color: primaryColor[0] + "!important",
  },
  checkRoot: {
    padding: "10px",
    paddingLeft: "0px !important",
    "&:hover": {
      backgroundColor: "unset",
    },
  },
  tableContent: {
    "&>div>div": {
      height: "750px",
    }
  }

}));

function AllReport(props) {
  const classes = useStyles();
  const history = useHistory();

  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Standard Admin" },
    { key: 1, label: "Full admin" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const handleClearAll = () => {
    setChipData([]);
  };

  const viewDetail = (id) => {
    history.push(
      `/u/reports/custom-report-name/${id}`
    );
  };

  React.useEffect(() => {
    // Get list data
    props.getAllReport();
  }, []);

  const columns = [
    {
      title: "Report Name",
      key: "reportName",
      onHeaderCell: { className: classes.onHeaderCellFirst },
      render: (reportName) => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{reportName}</div>
        </div>
      ),
    },
    {
      title: "Creation Date",
      key: "creationDate",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (creationDate) => (
        <div className={classes.textEmail}>{creationDate}</div>
      ),
    },
    {
      title: "Creator",
      key: "creator",
      onHeaderCell: { className: classes.onHeaderCellLast },
      render: (creator) => (
        <div className={classes.textEmail2}>{creator}</div>
      ),
    },
  ];

  // popper
  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCloseMore = () => setOpenMore(false);
  const handleOpenMore = (event) => {
    setOpenMore(true);
    setAnchorEl(event.currentTarget);
  };

  const listTags = {
    tags: ["Room", "No road", "In City"],
    dutyStatus: [
      "Driving",
      "On Duty",
      "Off Duty",
      "Personal Conveyance",
      "Sleeper Berth",
      "Disconnected",
      "Yard Move",
    ],
    violations: ["Currently in violations", "Nearing Violation"],
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.tableContent}>
            <Table
              renderTitle={
                <Grid container className={classes.gridTitle}>
                  <Grid item xs={12} sm={6} md={6} className={classes.headContainer}>
                        {props.pageSize} selected for{" "}
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} className={classes.headLeft}>
                    <ToolboxButton
                      placeholder="Search asset"
                    />
                  </Grid>
                </Grid>
              }
              columns={columns}
              dataSource={props.data}
              pageSize={7}
              onHeaderRow={{
                className: classes.onHeaderRow,
              }}
              onBodyRow={{
                onClick: viewDetail,
                className: classes.tableRow,
              }}
            />
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllReport);
