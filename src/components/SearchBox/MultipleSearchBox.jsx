import React from "react";
import classNames from "classnames";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
// import Search from "@material-ui/icons/Search";
import SearchIconRight from "components/Icons/SearchIconRight.jsx"
import { makeStyles } from "@material-ui/core";
import { primaryColor } from "assets/jss/material-dashboard-pro-react.js";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from 'components/Icons/ExpandMoreIcon';
import SearchBox from "components/SearchBox/SettingSearchBox";
import CheckSquareOutlined from 'components/Icons/CheckSquareOutlined';
// import Button from "components/CustomButtons/Button";

const styles = {
  searchButton: {
    background: "white",
    padding: "0px 20px 0px 20px",
    borderRadius: "22px",
    height: "42px",
    border: "1px solid #ECEEF0",
    margin: 0
  },
  inputAdornmentIconSearch: {
    color: "#25345C",
    marginTop: 10,
    marginLeft: "0 !important;"
  },
  baseInput: {
    padding: '10px 0 10px'
  },
  outlined: {
    margin: 0,
    padding: "8px 16px",
    borderRadius: 26,
    background: "#fff",
    color: "#25345C",
    textAlign: "center",
    textTransform: "unset",
    "&:hover": {
      backgroundColor: '#fff',
    },
    "&>:first-child": {
      "&>:first-child": {
        background: "blue",
        color: "#fff",
        borderRadius: "50%",
        width: 22,
        height: 22,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 4,
      }
    }
  },
  checked: {
    color: primaryColor[0] + "!important"
  },
  checkRoot: {
    padding: "0px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  label: {
    marginLeft: 8
  }
}

const useStyles = makeStyles(styles);

const RenderMenuItem = (props) => {
  const classes = useStyles();

  if (!props.data) return null;
  return props.data.map(o => {
    if (o.label && !o.value) {
      return (
        <div style={{ padding: "0 0 12px" }}>
          <MenuItem style={{ opacity: 1, fontWeight: 600 }} disabled>{o.label}</MenuItem>
          <div style={{ paddingLeft: 16 }}>
            <RenderMenuItem data={o.options} />
          </div>
        </div>
      );
    }
    if (o.label && o.value) {
      return (
        <MenuItem >
          <Checkbox
            tabIndex={-1}
            // checked={checked}
            // onChange={() => this.onSelectChange(record, index)}
            checkedIcon={<CheckSquareOutlined />}
            classes={{
              checked: classes.checked,
              root: classes.checkRoot
            }}
          />
          <span className={classes.label}>{o.label}</span>
        </MenuItem>
      )
    };
  })
}

export default function MultipleSearchBox(props) {
  const classes = useStyles();

  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

  return (
    <div className={props.className}>
      <Button
        onClick={handleOpenMore}
        endIcon={<ExpandMoreIcon />}
        variant="outlined"
        classes={{
          outlined: classes.outlined
        }}
      >
        <span>2</span> Edit Labels
      </Button>
      <Popper
        open={openMore}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement="bottom-end"
        style={{ zIndex: 1 }}
        className={classNames({
          [classes.popperClose]: !anchorEl,
          [classes.popperResponsive]: true,
          [classes.popperNav]: true,
        })}
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            id="profile-menu-list"
            style={{ transformOrigin: "0 0 0", marginTop: 8, borderRadius: "12px" }}
          >
            <Paper className={classes.dropdown}>
              <ClickAwayListener onClickAway={handleCloseMore}>
                <MenuList role="menu">
                  <div style={{ padding: "12px 12px 0" }}>
                    <SearchBox placeholder="Search options" />
                  </div>
                  <RenderMenuItem data={props.data} />
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>

  )
}