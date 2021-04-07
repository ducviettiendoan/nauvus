import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import Button from "components/CustomButtons/Button";

const useStyles2 = makeStyles((theme) => ({
  table: {
    minWidth: 500,
  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px"
  },
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
  },
  chips: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8
  },
  clearAll: {
    textTransform: "none",
    color: "#0d6ede",
    background: "unset !important",
    boxShadow: "unset !important",
    fontSize: 16,
    fontWeight: 700,
    padding: 0,
    "&:hover": {
      color: "#25345C"
    }
  },
}));

const ChipSelect = (props) => {

  const classes = useStyles2();
  const data = props.data || [];
  return (
    <React.Fragment>
      {data.length > 0 && (
        <Grid container className={classes.headContainer}>
          <Grid item className={classes.userRolesTitle}> {data.length} selected </Grid>
          <Grid item className={classes.chipSelected}>
            {/* {data.map(item => (
              <Chip
                key={item.key}
                label={item.label}
                className={classes.chips}
                deleteIcon={<CloseIcon />}
                onDelete={props.handleDelete(item)}
              />
            ))} */}
            <Button onClick={props.handleClearAll} className={classes.clearAll}> Clear</Button>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  )
}

export default ChipSelect;