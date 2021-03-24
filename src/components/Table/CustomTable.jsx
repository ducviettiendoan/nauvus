import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Pagination from "../Pagination/Pagination";
import {Row} from "reactstrap";
import IconButton from "@material-ui/core/IconButton";
import PaginationV2 from "../Pagination/PaginationV2";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import ArrowLeftIcon from "../Icons/ArrowLeftIcon";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import ArrowUpIcon from "../Icons/ArrowUpIcon";
import EditIcon from "../Icons/EditIcon";
import DeleteIcon from "../Icons/DeleteIcon";
import CopyIcon from "../Icons/CopyIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    padding: 0
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  tabs : {
    border: 0
  },
  headerRight: {
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  button: {
    width: "138px",
    height: "41px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "20px",
    "&::before": {
      borderBottom: "0px"
    },
    "& > select:focus": {
      backgroundColor: "#FFFFFF"
    },
    "&:hover": {
      borderBottom: "0px"
    },
    marginRight: 8
  },
  formatterText: {
    color: "#C4C4C4",
    fontSize: 14
  },
  rowText: {
    fontSize:16,
    color: "#25345C"
  },
  headText: {
    fontWeight: "bold",
    color: "#25345C",
    fontSize:12,
    maxWidth: 150
  },
  actionIcon : {
    padding: 6
  }
}));

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort, headCells, action } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className="tableHead">
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              className={classes.headText}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        {
          action.length > 0
          ?
            (
              <TableCell
                align={'left'}
                className={classes.headText}
              >
                Actions
              </TableCell>
            )
            : ""
        }
      </TableRow>
    </TableHead>
  );
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function TableComponent(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  let { rows, headCells, action, styles} = props

  if (typeof action === 'undefined'){
    action = []
  }


  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Paper>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={headCells}
              action={action}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      className="tableRow"
                    >
                      {headCells.map((n, i) => {
                        {
                          if(i == 0) {
                            return (
                              <TableCell style={{borderBottom: 0}} key={n.id} component={"th"} align="left">
                                <b className={classes.rowText}>{row[n.id]}</b>
                                <p className={classes.formatterText}>{n.formatter}</p>
                              </TableCell>
                            )
                          }else {
                            return (
                              <TableCell style={{borderBottom: 0}} key={n.id} align="left">
                                <p className={classes.rowText}>{row[n.id]}</p>
                                <p className={classes.formatterText}>{n.formatter}</p>
                              </TableCell>)
                          }
                        }
                      })}
                      {
                        action.length > 0
                        ?
                          (
                            <TableCell style={{borderBottom: 0}} align="left">
                              {
                                action.map(item =>
                                  {
                                    {
                                      if (item == 'edit'){
                                        return (
                                          <IconButton className={classes.actionIcon} aria-label="upload picture" component="span">
                                            <EditIcon style={{color:"#ffffff"}} />
                                          </IconButton>
                                        )
                                      }else if (item == 'delete'){
                                        return (
                                          <IconButton className={classes.actionIcon} aria-label="upload picture" component="span">
                                            <DeleteIcon style={{color:"#C4C4C4"}} />
                                          </IconButton>
                                        )
                                      }else if (item == 'copy'){
                                        return (
                                          <IconButton className={classes.actionIcon} aria-label="upload picture" component="span">
                                            <CopyIcon style={{color:"#ffffff"}} />
                                          </IconButton>
                                        )
                                      }
                                    }
                                  }
                                )

                              }
                            </TableCell>
                          )
                        : ""
                      }
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/*<Row className="justify-content-center">*/}
        {/*  <Pagination*/}
        {/*    pages={[*/}
        {/*      { text: "PREV" },*/}
        {/*      { active: true, text: 1 },*/}
        {/*      { text: "NEXT" }*/}
        {/*    ]}*/}
        {/*    color="info"*/}
        {/*  />*/}
        {/*</Row>*/}
      </Paper>
    </div>
  );
}
