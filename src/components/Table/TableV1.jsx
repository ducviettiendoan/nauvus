import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import { makeStyles } from "@material-ui/core/styles";
import { hexToRgb, blackColor, primaryColor } from "assets/jss/material-dashboard-pro-react.js";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import Card from "components/Card/Card.js";
import TableRow from '@material-ui/core/TableRow';
import CheckSquareOutlined from 'components/Icons/CheckSquareOutlined';
import MinusSquareOutlined from 'components/Icons/MinusSquareOutlined';
import DropDownIcon from "components/Icons/DropDownIcon";
import GenPaginationV1 from 'components/Pagination/GenPaginationV1';

const styles = {
  table: {
    minWidth: 500,
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "3px"
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
  cardTable: {
    paddingBottom: "40px",
    overflow: "unset",
    overflowY: "unset"
  },
  checkbox: {
    textAlign: 'center'
  },
  dataEmpty: {
    border: "none",
    color: "rgba(0, 0, 0, 0.25)",
    textAlign: "center"
  },
  dropDownIconDate: {
    color: "#C4C4C4",
    cursor: "pointer",
    marginLeft: "10px"
  },
}

const useStyles = makeStyles(styles);

const TableRowExpandable = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { record, columns, rowSelection, checked, index } = props;
  return (
    <React.Fragment>
      <TableRow key={index} {...props.onBodyRow}>
        {rowSelection && (
          <TableCell className={classes.checkbox}>
            <Checkbox
              tabIndex={-1}
              checked={checked}
              onChange={() => props.onSelectChange(record, index)}
              checkedIcon={<CheckSquareOutlined />}
              classes={{
                checked: classes.checked,
                root: classes.checkRoot
              }}
            />
          </TableCell>
        )}
        {columns.map(column => {
          if (column.render) {
            if (column.showExpandable) {
              return (
                <TableCell
                  key={column.key}
                  {...column.onCell}
                >
                  <div style={{ display: "flex" }}>
                    {column.render(record[column.key], record, index)}
                    <DropDownIcon className={classes.dropDownIconDate} onClick={() => setOpen(!open)} />
                  </div>
                </TableCell>
              )
            }
            return <TableCell key={column.key} {...column.onCell} >{column.render(record[column.key], record, index)}</TableCell>
          }
          return <TableCell key={column.key} {...column.onCell}>{record[column.key]} </TableCell>
        })}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={columns.length + 1}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {props.expandedRowRender(record)}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

class TableV1 extends React.Component {

  state = {
    data: [],
    dataSource: [],
    columns: [],
    current: 1,
    pageSize: 10,
    rowSelection: false,
    showPagination: true,
    selectedRows: [],
    selectedKeyRows: []
  }

  static getDerivedStateFromProps(props, state) {
    let newState = null

    if (props.dataSource) {
      newState = { ...newState, dataSource: props.dataSource }
    }

    if (props.current) {
      newState = { ...newState, current: props.current }
    }

    if (props.pageSize) {
      newState = { ...newState, pageSize: props.pageSize }
    }

    if (props.rowSelection) {
      newState = { ...newState, rowSelection: props.rowSelection || false }
    }

    if (props.showPagination) {
      newState = { ...newState, showPagination: props.showPagination }
    }
    return newState
  }

  filterData = () => {
    const { dataSource, pageSize, current } = this.state
    const startPage = pageSize * current - pageSize;
    const endPage = pageSize * current > dataSource.length ? dataSource.length : pageSize * current;
    const data = dataSource.filter((record, index) => startPage <= index && index < endPage);
    return data;
  }

  onSelectAll = () => {
    let { selectedKeyRows, selectedRows, dataSource } = this.state;
    if (selectedKeyRows.length == dataSource.length) {
      this.setState({
        selectedRows: [],
        selectedKeyRows: []
      })
    } else {
      selectedKeyRows = [];
      selectedRows = [];
      dataSource.forEach((record, index) => {
        if (record.key) {
          selectedRows.push(record);
          selectedKeyRows.push(record.key);
        } else {
          selectedRows.push(record);
          selectedKeyRows.push(index);
        }
      })
      this.setState({
        selectedRows,
        selectedKeyRows
      })
    }
  }

  onSelectChange = (record, index) => {
    let { selectedKeyRows, selectedRows } = this.state;
    if (record.key) {
      if (selectedKeyRows.includes(record.key)) {
        let selectIndex = selectedKeyRows.findIndex(ele => ele == record.key);
        selectedRows.splice(selectIndex, 1)
        selectedKeyRows.splice(selectIndex, 1)
      } else {
        selectedRows.push(record);
        selectedKeyRows.push(record.key);
      }
    } else {
      if (selectedKeyRows.includes(record.key)) {
        let selectIndex = selectedKeyRows.findIndex(ele => ele == index);
        selectedRows.splice(selectIndex, 1)
        selectedKeyRows.splice(selectIndex, 1)
      } else {
        selectedRows.push(record);
        selectedKeyRows.push(index);
      }
    }
    this.setState({
      selectedRows,
      selectedKeyRows
    })
  }

  onSelect = () => {

  }
  onChangePagination = (event, page) => {
    this.setState({ current: page })
  }
  onShowSizeChange = (value) => {
    const { dataSource, current } = this.state
    if (Math.ceil(dataSource.length / value) < current) {
      this.setState({ current: Math.ceil(dataSource.length / value) })
    }
    this.setState({ pageSize: value })
  }


  render() {

    const { classes } = this.props;
    const { renderTitle, onHeaderRow, onBodyRow, columns, expandedRowRender } = this.props;
    const { selectedKeyRows, dataSource, current, pageSize, rowSelection } = this.state;
    const showPagination = this.props.showPagination == false ? false : true;
    const total = this.props.total || dataSource.length;
    const data = this.filterData();
    return (

      <div>
        <Card testimonial className={classes.cardTable}>
          {renderTitle && renderTitle}
          <Table >
            <TableHead {...onHeaderRow}>
              <TableRow>
                {rowSelection && (
                  <TableCell className={classes.checkbox}>
                    <Checkbox
                      tabIndex={-1}
                      checked={selectedKeyRows.length > 0 ? true : false}
                      checkedIcon={dataSource.length == selectedKeyRows.length ? <CheckSquareOutlined /> : <MinusSquareOutlined />}
                      onChange={this.onSelectAll}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  </TableCell>
                )}
                {columns.map((column) => {
                  return (
                    <TableCell key={column.key} {...column.onHeaderCell}>
                      {(column.title ? column.title : null)}
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length <= 0 ? (
                <TableRow>
                  <TableCell className={classes.dataEmpty} colSpan={columns.length + 1}>No Data</TableCell>
                </TableRow>
              ) : data.map((record, index) => {
                let checked = false;
                if (rowSelection) {
                  if (record.key) checked = selectedKeyRows.includes(record.key);
                  else checked = selectedKeyRows.includes(index);
                }
                return (

                  <React.Fragment>
                    {expandedRowRender ? (
                      <TableRowExpandable
                        index={index}
                        onBodyRow={onBodyRow}
                        checked={checked}
                        record={record}
                        columns={columns}
                        rowSelection={rowSelection}
                        onSelectChange={this.onSelectChange}
                        expandedRowRender={expandedRowRender}
                      />
                    ) : (
                      <TableRow key={index} {...onBodyRow}>
                        {rowSelection && (
                          <TableCell className={classes.checkbox}>
                            <Checkbox
                              tabIndex={-1}
                              checked={checked}
                              onChange={() => this.onSelectChange(record, index)}
                              checkedIcon={<CheckSquareOutlined />}
                              classes={{
                                checked: classes.checked,
                                root: classes.checkRoot
                              }}
                            />
                          </TableCell>
                        )}
                        { columns.map(column => {
                          if (column.render) {
                            return <TableCell key={column.key} {...column.onCell} >{column.render(record[column.key], record, index)}</TableCell>
                          }
                          return <TableCell key={column.key} {...column.onCell}>{record[column.key]} </TableCell>
                        })}
                      </TableRow>
                    )}

                  </React.Fragment>

                )
              })}
            </TableBody>
          </Table>
        </Card>

        {showPagination && total > 0 && (
          <GenPaginationV1
            total={total}
            current={current}
            pageSize={pageSize}
            showSizeChanger
            onChange={this.onChangePagination}
            onShowSizeChange={this.onShowSizeChange}
            pageSizeOptions={[10, 20, 30, 40]}
          />
        )}

      </div>
    )
  }
}

export default withStyles(styles)(TableV1);