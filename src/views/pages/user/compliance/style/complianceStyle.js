import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";

const complianceStyle = {
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
  gridCardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "10px"
  },
  searchBar: {
    textAlign: "left",
    height: "45px",
    border: "1px solid #C4C4C4",
    boxSizing: "border-box",
    borderRadius: "32px",
    maxWidth: "300px"
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "0!important"
  },
  filterButton: {
    height: "45px",
    border: "1px solid #C4C4C4",
    boxSizing: "border-box",
    borderRadius: "32px",
    maxWidth: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  filterButtonText: {
    textTransform: "none",
    fontSize: "14px",
    color: "#25345C"
  },
  table: {
    minWidth: "100%",
  },
  tableHead: {
    backgroundColor: "#ECEEF0"
  },
  filterIcon: {
    marginTop: 13
  },
  btnSearchOnMap: {
    background: "white",
    padding: "0px 20px 0px 20px",
    borderRadius: "36px",
    height: "40px",
    border: "1px solid #C4C4C4",
  },
  inputAdornmentIcon: {
    color: "#8181A5",
    fontSize: "18px",
    marginLeft: "0 !important;"
  },
  cardHeaderTitle: {
    textAlign: "left",
    height: "45px",
    display: "flex",
    alignItems: "center",
    fontSize: "17px",
  },
  cardHeaderSubTitle: {
    textAlign: "right",
    fontSize: "14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  cardHeader: {
    backgroundColor: "#ECEEF0",
    padding: "20px 35px 20px 35px",
  },
  cardBodyTitle1: {
    textAlign: "left",
    paddingLeft: 9
  },
  cardBodyTitle2: {
    textAlign: "right",
    paddingRight: 22
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    marginLeft: '16px'
  },
  textHour: {
    fontSize: '16px',
    lineHeight: '21px',
    color: '#25345C',
  },
  onHeaderCell: {
    fontWeight: "bold",
    color: '#25345C',
  },
}

export default complianceStyle
