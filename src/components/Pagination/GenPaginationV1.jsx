import React from 'react';
import Select from "@material-ui/core/Select";
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpIcon from "components/Icons/ArrowUpIcon";
import ArrowRightIcon from "components/Icons/ArrowRightIcon";
import ArrowLeftIcon from "components/Icons/ArrowLeftIcon";
import ArrowDownIcon from "components/Icons/ArrowDownIcon";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0
  },
  showText: {
    paddingRight: "36px",
    fontFamily: 'Lato',
    fontWeight: 'normal',
    color: '#C4C4C4',
    fontSize: '12px'
  },
  pageText: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    paddingRight: '16px',
    fontSize: '12px'
  },
  selectPage: {
    '&:hover': {
      '&:before': {
        borderBottom: "none"
      }
    },
    '&:before': {
      borderBottom: "none!important"
    }
  },
  selected: {
    border: '1px solid #25345C!important',
    background: 'none!important'
  },
  outlined: {
    border: 'none',
    background: '#FFFFFF',
    fontSize: "12px",
    height: '40px',
    width: "40px",
    borderRadius: "50%"
  },
  iconButton: {
    height: '40px',
    width: "40px",
    margin: '0 3px'
  }
}));

export default function GenPaginationV1(props) {
  const classes = useStyles();
  // total, page, size
  return (
    <>
      <Grid container className={classes.root} justify="space-between">
        <Grid item>
          <Pagination
            variant="outlined"
            count={props.total}
            defaultPage={1}
            showFirstButton
            showLastButton
            renderItem={(item) => {
              if (item.type == "first") {
                item = { ...item, variant: "text" }
                return (
                  <IconButton className={classes.iconButton} {...item}>
                    <ArrowDownIcon />
                  </IconButton>
                )
              }

              if (item.type == "last") {
                item = { ...item, variant: "text" }
                return (
                  <IconButton className={classes.iconButton} {...item}>
                    <ArrowUpIcon />
                  </IconButton>
                )
              }

              if (item.type == "next") {
                item = { ...item, variant: "text" }
                return (
                  <IconButton className={classes.iconButton} {...item}>
                    <ArrowRightIcon />
                  </IconButton>
                )
              }

              if (item.type == "previous") {
                item = { ...item, variant: "text" }
                return (
                  <IconButton className={classes.iconButton} {...item} >
                    <ArrowLeftIcon />
                  </IconButton>
                )
              }
              return <PaginationItem
                classes={{
                  selected: classes.selected,
                  outlined: classes.outlined
                }}
                {...item}
              />
            }}
          />
        </Grid>
        <Grid item>
          <Grid container alignItems="center" >
            <Grid item className={classes.showText}> Showing 1-6 of 50</Grid>
            <Grid item>
              <span className={classes.pageText}> Items per page: </span>
              <Select className={classes.selectPage} native value="1">
                <option value={1}>5</option>
                <option value={2}>10</option>
                <option value={3}>15</option>
              </Select>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </>
  );

}
