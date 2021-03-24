import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "assets/jss/material-dashboard-pro-react/components/paginationStyle.js";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import './paginationStyle.css'
import {pagination} from "../../../utils/common-utils";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(styles);

export default function Pagination(props) {
  const classes = useStyles();
  const { pages, color } = props;
  return (
    <GridContainer className="paginationBg">
      <GridItem xs={12}>
        <GridContainer>
          <GridItem xs={6}>
            <ul className={classes.pagination} style={{display:"flex",alignItems: "center",marginLeft:16}}>
              {pages.map((prop, key) => {
                const paginationLink = cx({
                  ["paginationLink"]: !prop.active,
                  ["paginationLinkActive"]: prop.active,
                  ["paginationDisabled"]: prop.disabled,
                  ['paginationArrow']: prop.arrow,
                  ['paginationNumber']: !prop.arrow
                });
                return (
                  <li className={prop.arrow ? "paginationArrowLi" : "paginationLi"} style={{display:"inline"}} key={key}>
                    {prop.onClick !== undefined ? (
                      <Button onClick={prop.onClick} className={paginationLink}>
                        {prop.text}
                      </Button>
                    ) : (
                      <Button
                        onClick={() => alert("you've clicked " + prop.text)}
                        className={paginationLink}
                      >
                        {prop.text}
                      </Button>
                    )}
                  </li>
                );
              })}
            </ul>
          </GridItem>
          <GridItem xs={6} className="paginationPage">
            <ul className="paginationRow">
              <li className="paginationShowing">
                Showing 1-6 of 50
              </li>
              <li className="paginationItemsPerPage">
                <span>
                  Items per page:
                </span>
                <Select
                  native
                  value={"1"}
                  className="paginationSelectPage"
                >
                  <option value={1}>5</option>
                  <option value={2}>10</option>
                  <option value={3}>15</option>
                </Select>
              </li>
            </ul>
          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
  );
}

Pagination.defaultProps = {
  color: "primary"
};

Pagination.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      text: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["PREV", "NEXT", "..."])
      ]).isRequired,
      onClick: PropTypes.func
    })
  ).isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};
