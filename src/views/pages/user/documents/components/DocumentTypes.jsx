import React from "react";
import {connect} from 'react-redux';
import {getTypes} from "reducers/document";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import {primaryColor} from "assets/jss/material-dashboard-pro-react";
import EditIcon from "components/Icons/EditIcon";
import DeleteIcon from "components/Icons/DeleteIcon";

const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
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
  clearButton: {
    textTransform: "none",
    color: "#8CA2EE",
    background: "unset !important",
    boxShadow: "unset !important",
    fontSize: 12,
    fontWeight: 700,
    padding: 0,
    margin: "0px !important",
    "&:hover": {
      color: "#25345C"
    },
    "&:focus": {
      color: "#8CA2EE"
    }
  },
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
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
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    paddingLeft: "12px"
  },
  textEmail: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontWeight: 400
  },
  chips: {
    fontWeight: 400,
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  gridTitle: {
    padding: "20px"
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
  grayAvatar: {
    background: "#ECEEF0 !important",
    color: "#B4B4B4",
    marginRight: 8,
    fontSize: 12,
    fontWeight: 700,
  },
  popperHeaderContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 5px 20px 5px !important"
  },
  popperHeader: {
    color: "#25345C",
    fontSize: "24px",
    lineHeight: "29px",
    fontWeight: "bold",
  },
  dropdownVehicle: {
    borderRadius: "12px",
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
    width: "300px",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
  popperInput: {
    paddingBottom: "8px",
    paddingTop: "8px",
  },
  dropdownItemVehicle: {
    marginLeft: "8px",
    fontWeight: 700,
    fontSize: '14px',
    color: '#25345C',
  },
  checked: {
    color: primaryColor[0] + "!important"
  },
  checkRoot: {
    padding: "10px",
    paddingLeft: "0px !important",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  // accordion style
  expansionClasses: {
    padding: "0px 15px 0px 8px !important",
    borderBottom: "0px !important",
    minHeight: "20px !important",
    background: "#FAFAFA",
    "&:hover": {
      background: "#FAFAFA",
    },
    "&:focus": {
      background: "#FAFAFA",
    }
  },
  expansionContentClasses: {
    margin: "0px !important"
  },
  expansionPanelClasses: {
    marginBottom: "4px !important",
    background: "#FAFAFA",
  },
  expansionPanelClassesRounded: {
    background: "#FAFAFA",
    border: "1px solid #ECEEF0",
    boxShadow: "inherit",
    marginBottom: "8px !important",
  },
  itemContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px !important"
  },
  tagTitle: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "19px"
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  onHeaderCell: {
    textAlign: "right",
    paddingRight: "43px",
    fontWeight: 700,
    color: "#25345C",
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    }
  },
  actionButton: {
    textAlign: "right",
  }
}));

export function DocumentTypes(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getTypes();
  }, []);

  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Cycle Tomorrow'},
    {key: 1, label: 'Cycle Remaining'},
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const columns = [
    {
      title: 'Document Type Name',
      key: 'typeName',
      onHeaderCell: {className: classes.onHeaderCellFirst},
      render: typeName => <div className={classes.textName}>{typeName}</div>
    },
    {
      title: 'Actions',
      key: 'action',
      onHeaderCell: { className: classes.onHeaderCell },
      render: () => (
        <div className={classes.actionButton}>
          <Button justIcon color="twitter" simple>
            <EditIcon className={classes.iconButton} style={{color: "#ffffff", width: '22px', height: '22px'}}/>
          </Button>
          <Button justIcon color="google" simple>
            <DeleteIcon className={classes.iconButton} style={{color: "#C4C4C4", width: '24px', height: '24px' }} />
          </Button>
        </div>
      )
    }
  ]

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getTypes({page, pageSize});
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getTypes({page, pageSize});
    console.log(page, pageSize)
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div>
            <Table
              renderTitle={
                <Grid container className={classes.gridTitle}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Grid container className={classes.headContainer}>
                      <Grid item xl={2} className={classes.userRolesTitle}> {chipData.length} selected for </Grid>
                      <Grid item xl={10} className={classes.chipSelected}>
                        {chipData.map(data => (
                          <Chip
                            deleteIcon={<CloseIcon/>}
                            label={data.label}
                            onDelete={handleDelete(data)}
                            className={classes.chips}
                          />
                        ))}
                        {chipData.length > 0 ?
                          (
                            <Button onClick={handleClearAll} className={classes.clearAll}>
                              Clear All
                            </Button>
                          ) : ""}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12} sm={12} md={6} className={classes.headLeft}>
                    <ToolboxButton placeholder="Search document type" showFilter/>
                  </Grid>
                </Grid>
              }
              pagination={{
                total: props.total,
                current: props.page,
                pageSize: props.pageSize,
                onChange: onPageChange,
                onShowSizeChange: onShowSizeChange
              }}
              columns={columns}
              dataSource={props.data}
              onHeaderRow={{
                className: classes.onHeaderRow
              }}
              onBodyRow={{
                className: classes.tableRow
              }}
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = ({documents}) => {
  return {
    data: documents.types.data,
    page: documents.types.page,
    total: documents.types.total,
    pageSize: documents.types.pageSize
  };
};

const mapDispatchToProps = {
  getTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentTypes);