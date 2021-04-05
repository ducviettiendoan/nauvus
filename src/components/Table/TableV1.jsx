import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { hexToRgb, blackColor, primaryColor, roseColor } from "assets/jss/material-dashboard-pro-react.js";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Checkbox from '@material-ui/core/Checkbox';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import TableRow from '@material-ui/core/TableRow';
import CheckSquareOutlined from 'components/Icons/CheckSquareOutlined';
import MinusSquareOutlined from 'components/Icons/MinusSquareOutlined';
import GenPaginationV1 from 'components/Pagination/GenPaginationV1';

const useStyles2 = makeStyles((theme) => ({
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
    overflow: "auto",
    overflowY: "hidden"
  },
  checkbox: {
    textAlign: 'center'
  }
}));

const CustomTable = (props) => {

  const classes = useStyles2();
  const [data, setData] = useState([]);
  const [dataSource, setDataSource] = useState(props.dataSource || []);
  const [columns, setColumns] = useState(props.columns || []);
  const [current, setCurrent] = useState(props.current || 1);
  const [pageSize, setPageSize] = useState(props.pageSize || 10);
  const [rowSelection, setRowSelection] = useState(props.rowSelection || false);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [selectedKeyRows, setSelectedKeyRows] = React.useState([]);

  useEffect(() => {
    setDataSource(props.dataSource)
  }, [props.dataSource]);

  useEffect(() => {
    filterData();
  }, []);

  useEffect(() => {
    filterData();
  }, [current, pageSize, dataSource]);


  const filterData = () => {
    const startPage = pageSize * current - pageSize;
    const endPage = pageSize * current > dataSource.length ? dataSource.length : pageSize * current;
    let data = dataSource.filter((record, index) => startPage <= index && index < endPage);
    setData(data)
  }

  const onSelectAll = () => {
    if (selectedKeyRows.length == dataSource.length) {
      setSelectedRows(() => []);
      setSelectedKeyRows(() => []);
    } else {
      let selectedRows = [];
      let selectedKeyRows = [];
      dataSource.forEach((record, index) => {
        if (record.key) {
          selectedRows.push(record);
          selectedKeyRows.push(record.key);
        } else {
          selectedRows.push(record);
          selectedKeyRows.push(index);
        }
      })
      setSelectedRows(() => [...selectedRows]);
      setSelectedKeyRows(() => [...selectedKeyRows])
    }
  }

  const onSelectChange = (record, index) => {
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
    setSelectedRows(() => [...selectedRows]);
    setSelectedKeyRows(() => [...selectedKeyRows])
  }

  const onSelect = () => {

  }
  const onChangePagination = (event, page) => {
    setCurrent(page);
  }
  const onShowSizeChange = (value) => {
    if (Math.ceil(dataSource.length / value) < current) {
      setCurrent(Math.ceil(dataSource.length / value))
    }
    setPageSize(value)
  }
  return (

    <div>
      <Card testimonial className={classes.cardTable}>
        {props.renderTitle && props.renderTitle}
        <Table >
          <TableHead {...props.onHeaderRow}>
            <TableRow>
              {rowSelection && (
                <TableCell className={classes.checkbox}>
                  <Checkbox
                    tabIndex={-1}
                    checked={selectedKeyRows.length > 0 ? true : false}
                    checkedIcon={dataSource.length == selectedKeyRows.length ? <CheckSquareOutlined /> : <MinusSquareOutlined />}
                    onChange={() => onSelectAll()}
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
            {data.map((record, index) => {
              let checked = false;
              if (rowSelection) {
                if (record.key) checked = selectedKeyRows.includes(record.key);
                else checked = selectedKeyRows.includes(index);
              }
              return (
                <TableRow key={index} {...props.onBodyRow}>
                  {rowSelection && (
                    <TableCell className={classes.checkbox}>
                      <Checkbox
                        tabIndex={-1}
                        checked={checked}
                        onChange={() => onSelectChange(record, index)}
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
                      return <TableCell {...column.onCell} >{column.render(record[column.key], record, index)}</TableCell>
                    }
                    return <TableCell {...column.onCell}>{record[column.key]}</TableCell>
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Card>

      <GenPaginationV1
        total={dataSource.length}
        current={current}
        pageSize={pageSize}
        showSizeChanger
        onChange={onChangePagination}
        onShowSizeChange={onShowSizeChange}
        pageSizeOptions={[10, 20, 30, 40]}
      />
    </div>
  );
}

export default CustomTable;

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onChangePage: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };