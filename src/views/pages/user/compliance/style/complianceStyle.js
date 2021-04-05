const complianceStyle = {
  gridCardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "10px"
  },
  filterButtonText1: {
    fontWeight: "700",
    textTransform: "none",
    fontSize: "14px",
    color: "#25345C",
    border: "1px solid #C4C4C4 !important",
    borderRadius: "32px !important",
    width: "97px !important",
    minWidth: '100px !important',
    height: "42px",
    alignItems: "center !important",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",

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
    alignItems: "center !important",
    boxSizing: "border-box",
    display: "flex",
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
  onHeaderCellFirst: {
    fontWeight: 700,
    color: "#25345C",
    paddingLeft: "28px"
  },
  onHeaderCellNext: {
    fontWeight: 700,
    color: "#25345C",
  },
  chips: {
    fontWeight: 400,
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8
  },
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
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
  selected: {
    height: 24,
    width: "auto",
    background: "#ECEEF0 !important",
    borderRadius: 28,
    color: "#25345C !important",
    display: "flex",
    alignItems: "center",
  },
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
  gridTitle: {
    padding: "20px"
  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px"
  },
  headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: 8
    }
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
}

export default complianceStyle
