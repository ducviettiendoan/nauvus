import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import NightTime from "assets/img/images.png";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";
import StarIcon from "@material-ui/icons/Star";
import NativeSelect from "@material-ui/core/NativeSelect";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import CustomSelect from "components/CustomSelect/CustomSelect";
import MenuItem from "@material-ui/core/MenuItem";
import DropDownIcon from "components/Icons/DropDownIcon";
import "./Safety.css";

const styles = {
  selectForm: {
    width: "100%",
    height: "44px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "20px",
    padding: "0x !important",
    border: "1px solid #ECEEF0 !important",
    "&::before": {
      borderBottom: "0px",
    },
    "& > select:focus": {
      backgroundColor: "#FFFFFF !important",
    },
    "&:hover": {
      borderBottom: "0px",
    },
    marginRight: 15,
  },
  select: {
    color: "#25345C",
    fontWeight: 400,
    fontSize: 14,
    borderStyle: "none",
    borderWidth: 2,
    marginRight: 15,
    paddingTop: 14,
    paddingBottom: 15,
    "&:focus": {
      borderRadius: 12,
      backgroundColor: "white",
      borderColor: "#B4B4B4",
    },
  },
  vehicleHeader: {
    width: "78px",
    height: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#C4C4C4",
    padding: "0px 0px 0px 0px !important",
  },
  dropDownIcon: {
    color: "#C4C4C4",
    cursor: "pointer",
    position: "absolute",
    right: 5,
  },
  dismissButton: {
    borderRadius: "20px",
    border: "1px solid #ECEEF0 !important",
    backgroundColor: "white",
    color: "#25345C",
    fontSize: "14px",
    fontWeight: 700,
    boxShadow: "none !important",
    textTransform: "none",
  },
};

const Card = (props) => {
  const { background } = props;
  console.log({ background });
  const preventDefault = (event) => event.preventDefault();
  const [isFavorite, setIsFavorite] = useState(false);
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  let star = isFavorite ? (
    <StarIcon
      color="disabled"
      onClick={() => {
        setIsFavorite((prev) => !prev);
      }}
      style={{ cursor: "pointer" }}
    />
  ) : (
    <StarBorderIcon
      color="disabled"
      onClick={() => {
        setIsFavorite((prev) => !prev);
      }}
      style={{ cursor: "pointer" }}
    />
  );

  const handleChange = (event) => {
    setSelectValue({ ...selectValue, [event.target.name]: event.target.value });
  };

  const [selectValue, setSelectValue] = useState({
    selectA: "none",
  });

  const name = "selectA";
  const listValues = ["Needs Coaching", "Needs Review", "Needs Recognition", "Coached", "Reviewed", "Regconized", "Dismissed"];
  const placeholder = "Need Review";
  const selectValue1 = selectValue.selectA;

  const menuProps = {
    classes: {
      paper: classes.paper,
      list: classes.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  return (
    <div className="safety-card" style={{ backgroundColor: background }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4} xl={3}>
          <Grid container spacing={3}>
            <Grid item xs={1}>
              {star}
            </Grid>

            <Grid item xs={12} lg={11}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={NightTime}
                alt="picture"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          xl={5}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingTop: "12px",
          }}
        >
          <div>
            <FiberManualRecordIcon style={{ color: "#F4BE5E", fontSize: 17 }} />
            <b>
              <span className="card-title"> Crash</span>{" "}
              <span className="card-sub-title">2.10G</span>
            </b>
          </div>
          <div className="content">
            <div>Jun 24, 2020 4:06 Am EOT</div>
            <div>229/ Alexandr Fedyachkin</div>
          </div>

          <Button
            variant="contained"
            size="large"
            className="driverButton safety-button"
          >
            Drivers, Own
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={4}>
          <Grid container className="sideButton" justify="flex-end" spacing={1}>
            <Grid item xs={12} sm={6} lg={6} xl={8} className="sideButtonChild">
              <Button
                variant="contained"
                size="large"
                className={classes.dismissButton}
              >
                Dismiss
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} lg={6} xl={4} className="sideButtonChild">
              <FormControl variant="outlined">
                <Select
                  className={classes.selectForm}
                  fullWidth
                  disableUnderline
                  classes={{ root: classes.select }}
                  MenuProps={menuProps}
                  IconComponent={() => (
                    <DropDownIcon className={classes.dropDownIcon} />
                  )}
                  value={selectValue1}
                  onChange={handleChange}
                  name={name}
                >
                  {selectValue1 === "none" && (
                    <option value="none" disabled style={{ display: "none" }}>
                      {placeholder}
                    </option>
                  )}
                  {listValues.map((value, i) => (
                    <MenuItem key={i} value={i}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
