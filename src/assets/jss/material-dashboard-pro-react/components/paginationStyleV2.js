
const paginationStyle = {
  pagination: {
    paddingLeft: "0",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    margin: "0px 0px 0px 30px"
  },
  paginationArrowLi: {
    display: "inline",
    height: 25
  },
  paginationLi: {
    display: "inline",
    marginRight: 8,
    "&:last-child": {
      marginRight: 21
    }
  },
  paginationItem: {
    display: "inline"
  },
  paginationLink: {
    minWidth: "40px",
    height: 40,
    borderRadius: "50%",
    background: "#ffffff",
    color: "#25345C"
  },
  paginationLinkActive: {
    minWidth: "40px",
    height: 40,
    borderRadius: "50%",
    border: "1px solid #25345C",
    boxSizing: "border-box ",
    background: "#F5F5FA",
    color: "#25345C"
  },
  paginationDisabled: {
    color: "#C4C4C4",
    "&:hover": {
      color: "#C4C4C4",
      cursor: "not-allowed",
    }
  },
  paginationArrow: {
    minWidth: "30px",
    height: "35px",
    padding: "0px",
    border: "0px",
    background: "unset"
  },
  paginationNumber: {},
  paginationPage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  paginationRow: {
    marginBottom: "0px",
    display: "flex",
    alignItems: "center",
    marginRight: 30,
    "& > li ": {
      listStyleType: "none",
      float: "left"
    }
  },
  paginationShowing: {
    color: "#C4C4C4",
    marginRight: 36,
    fontSize: 14
  },
  paginationItemsPerPage: {
    color: "#25345C",
    fontSize: "14px"
  },
  paginationSelectPage: {
    marginLeft:15,
    width: 50,
    "&:before" : {
      borderBottom: "0px"
    },
    "& > fieldset" : {
      border: "0px"
    },
    "&:hover" : {
      borderBottom: "0px"
    }
  }
};

export default paginationStyle;
