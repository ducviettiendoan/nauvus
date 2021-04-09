import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CostIcon from "components/Icons/CostIcon";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import {connect} from "react-redux";
import {getFuelCost} from "reducers/setting-fleet";
import Table from "components/Table/TableV1";

const styles = {
  textFieldCost: {
    textAlign: "left",
    paddingLeft: "16px",
    marginTop: 14
  },
  textInputRoot: {
    fontWeight: '700',
    fontSize: '14px',
    color: "#25345C",
  },
  textFieldRoot: {
    fontWeight: '400',
    fontSize: '14px',
    color: "#C4C4C4",
    lineHeight: "21px",
  },
  fuelCostTitle: {
    fontWeight: '700',
    fontSize: '14px',
    color: "#25345C",
    textAlign: "left",
    paddingLeft: "16px",
    marginTop: 20
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    marginLeft: '16px',
  },
  textEmail: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    marginLeft: '16px',
    textAlign: "right"
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  gridTitle: {
    padding: "20px",
    justifyContent: "flex-end"
  },
  onHeaderCell: {
    fontWeight: "bold",
    paddingLeft: "30px"
  },
  onHeaderRightCell: {
    paddingRight: 56,
    textAlign: "right",
    fontWeight: "bold",
  },
};
const useStyles = makeStyles(styles);

export function FuelCost(props) {
  const classes = useStyles();

  React.useEffect(() => {
    props.getFuelCost();
  }, []);

  const columns = [
    {
      title: 'Date',
      key: 'date',
      onHeaderCell: {className: classes.onHeaderCell},
      render: nameProfiles => <div className={classes.textName}>{nameProfiles}</div>
    },
    {
      title: 'Cost',
      key: 'cost',
      onHeaderCell: {className: classes.onHeaderRightCell},
      render: vehicles => <div className={classes.textEmail}>{vehicles}</div>
    }
  ];

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getFuelCost({page, pageSize});
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getFuelCost({page, pageSize});
    console.log(page, pageSize)
  }

  return (
    <Table
      renderTitle={
        <GridContainer className={classes.gridTitle}>
          <GridItem xs={12} sm={12} md={12} className={classes.textFieldCost}>
            <TextField
              id="standard-basic"
              label="Custom Fuel Cost"
              placeholder="Start typing..."
              InputLabelProps={{
                shrink: true,
                classes: {root: classes.textFieldRoot}
              }}
              InputProps={{
                classes: {input: classes.textInputRoot},
                endAdornment: (
                  <InputAdornment position="start">
                    <CostIcon className={classes.inputAdornmentIcon}/>
                  </InputAdornment>
                ),
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12} className={classes.fuelCostTitle}>
            Custom Fuel Cost History
          </GridItem>
        </GridContainer>
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
      onHeaderRow={{className: classes.onHeaderRow}}
      onBodyRow={{className: classes.tableRow}}
    />
  );
}

const mapStateToProps = ({settingFleet}) => {
  return {
    data: settingFleet.fuelCost.data,
    page: settingFleet.fuelCost.page,
    total: settingFleet.fuelCost.total,
    pageSize: settingFleet.fuelCost.pageSize
  };
};

const mapDispatchToProps = {
  getFuelCost
};

export default connect(mapStateToProps, mapDispatchToProps)(FuelCost);