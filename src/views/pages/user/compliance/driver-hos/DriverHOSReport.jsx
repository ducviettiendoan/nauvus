import React, {useEffect, useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "components/CustomButtons/Button";
import Calendar from "components/Calendar/Calendar";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import LegendIcon from "components/Icons/LegendIcon";
import CustomSelect from "components/CustomSelect/CustomSelect";
import Select from "components/CustomSelect/Select";
import {getReportData, getDutyStatusData, getReportData2} from "reducers/compliance"
import {connect} from 'react-redux';
import Table from "components/Table/TableV1";
import ExpandedRow from "../../overview/components/ExpandedRow"
import Avatar from '@material-ui/core/Avatar';
import {MoreHoriz} from "@material-ui/icons";
import chartDialog from "assets/img/ChartDialog.png";
import DiaLog from "components/CustomDialog/Dialog";
import {Col, Row} from "reactstrap";
import CustomInput from "components/CustomInput/CustomInput";
// @material-ui/icons
// core components
const styles = {
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
  selectForm: {
    minWidth: "150px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "20px",
    padding: "0px 0px 0px 0px !important",
  },
  dropDownIcon: {
    color: "#C4C4C4",
    cursor: "pointer",
    position: "absolute",
    right: 8,
  },
  expandButton: {
    marginRight: 8
  },
  textSub: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
  },
  details: {
    display: "flex",
    alignItems: "center",
    textAlign: "left"
  },
  legendIcon: {
    color: "#E53935"
  },
  textDetails: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    marginLeft: '8px',
    color: '#25345C',
  },
  gridTitle: {
    padding: "20px"
  },
  onHeaderCell: {
    fontWeight: "bold"
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  greenAvatarSelect: {
    background: "#27AE60 !important",
    marginRight: 8,
    fontSize: 12,
    fontWeight: 700,
    width: "24px !important",
    height: "24px !important",
  },
  orangeAvatarSelect: {
    background: "#E29468 !important",
    marginRight: 8,
    fontSize: 12,
    fontWeight: 700,
    width: "24px !important",
    height: "24px !important",
  },
  blackAvatarSelect: {
    background: "#26252A !important",
    marginRight: 8,
    fontSize: 12,
    fontWeight: 700,
    width: "24px !important",
    height: "24px !important",
  },
  greenAvatar: {
    background: "#27AE60 !important",
    marginRight: 8,
    fontSize: 14,
    fontWeight: 700,
  },
  orangeAvatar: {
    background: "#E29468 !important",
    marginRight: 8,
    fontSize: 14,
    fontWeight: 700,
  },
  blackAvatar: {
    background: "#26252A !important",
    marginRight: 8,
    fontSize: 14,
    fontWeight: 700,
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "25px 0px 26px 0px"
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important",
    display: "flex",
    alignItems: "center"
  },
  topHeaderButton: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  tableHeader: {
    "&>:last-child": {
      "&>:first-child": {
        border: "none",
        boxShadow: "none",
        margin: 0,
        padding: 0,
      }
    }
  },
  textID: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#C4C4C4',
  },
  textEmail: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
  },
  dialogTitle: {
    fontWeight: 700,
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    textAlign: "center",
  },
  dialogSubTitle: {
    fontWeight: 700,
    fontSize: "14px",
    color: "#B4B4B4",
    textAlign: "center",
  },
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#C4C4C4',
    marginBottom: "0px !important"
  },
  textInputRoot: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C',
    padding: "6px 0 17px"
  },
  sidebarInput: {
    width: "100%",
    paddingTop: "18px",
    marginBottom: "2px",
  },
  textSelect: {
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '12px',
    color: '#25345C',
  },
  selectButton: {
    textAlign: "right",
    marginRight: -10,
    marginTop: 13,
  }
};

const useStyles = makeStyles(styles);

function DriverHOSReport(props) {
  const classes = useStyles();

  // table data
  useEffect(() => {
    props.getReportData()
    props.getDutyStatusData()
    props.getReportData2()
  }, [])

  const [openDialog, setOpenDialog] = React.useState(false)

  const dutyColumns = [
    {
      title: 'Duty Status',
      key: 'dutyStatus',
      onHeaderCell: {className: classes.onHeaderCell},
      render: dutyStatus => (
        <div className={classes.alignItemsCenter}>
          <Avatar className={classes.greenAvatar}>D</Avatar>
          <div className={classes.textName}>{dutyStatus}</div>
        </div>
      ),
    },
    {
      title: 'Time in current status',
      key: 'currentTime',
      onHeaderCell: {className: classes.onHeaderCell},
      render: currentTime => <div className={classes.textSub}>{currentTime}</div>
    },
    {
      title: 'Vehicle name',
      key: 'vehicleName',
      onHeaderCell: {className: classes.onHeaderCell},
      render: vehicleName => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{vehicleName}</div>
        </div>
      )
    },
    {
      title: 'Time until break',
      key: 'timeUntilBreak',
      onHeaderCell: {className: classes.onHeaderCell},
      render: timeUntilBreak => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{timeUntilBreak}</div>
        </div>
      )
    },
    {
      title: 'Drive remaining',
      key: 'driveRemaining',
      onHeaderCell: {className: classes.onHeaderCell},
      render: driveRemaining => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{driveRemaining}</div>
        </div>
      )
    },
    {
      title: 'Cycle Remaining',
      key: 'cycleRemaining',
      onHeaderCell: {className: classes.onHeaderCell},
      render: cycleRemaining =>
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{cycleRemaining}</div>
        </div>
    },
    {
      title: 'Cycle Tomorrow',
      key: 'cycleTomorrow',
      showExpandable: true,
      onHeaderCell: {className: classes.onHeaderCell},
      render: cycleTomorrow => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{cycleTomorrow}</div>
        </div>
      )
    }
  ]

  const reportColumns = [
    {
      title: 'Shift',
      key: 'shift',
      onHeaderCell: {className: classes.onHeaderCell},
      render: shift => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{shift}</div>
        </div>
      ),
    },
    {
      title: 'Driving',
      key: 'driving',
      onHeaderCell: {className: classes.onHeaderCell},
      render: driving => <div className={classes.alignItemsCenter}>
        <div className={classes.textSub}>{driving}</div>
      </div>
    },
    {
      title: 'In Violation',
      key: 'inViolation',
      onHeaderCell: {className: classes.onHeaderCell},
      render: inViolation => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{inViolation}</div>
        </div>
      )
    },
    {
      title: 'From',
      key: 'from',
      onHeaderCell: {className: classes.onHeaderCell},
      render: from => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{from}</div>
        </div>
      )
    },
    {
      title: 'To',
      key: 'to',
      onHeaderCell: {className: classes.onHeaderCell},
      render: to => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{to}</div>
        </div>
      )
    },
    {
      title: 'Details',
      key: 'details',
      onHeaderCell: {className: classes.onHeaderCell},
      render: details => <div className={classes.details}>
        <LegendIcon className={classes.legendIcon}/>
        <div className={classes.textDetails}>{details}</div>
      </div>

    },
    {
      title: 'Date (EDT)',
      key: 'date',
      showExpandable: true,
      onHeaderCell: {className: classes.onHeaderCell},
      render: date => (
        <div className={classes.details}>
          <div className={classes.textSub}>{date}</div>
        </div>
      )
    }
  ]

  const reportColumns2 = [
    {
      title: 'Time',
      key: 'time',
      onHeaderCell: {className: classes.onHeaderCell},
      render: time => (
        <div>
          <div className={classes.textSub}>{time.start}</div>
          <div className={classes.textID}>ID: {time.end}</div>
        </div>
      ),
    },
    {
      title: 'Duration',
      key: 'duration',
      onHeaderCell: {className: classes.onHeaderCell},
      render: duration => <div className={classes.textSub}>{duration}</div>
    },
    {
      title: 'Status',
      key: 'status',
      onHeaderCell: {className: classes.onHeaderCell},
      render: status => (
        <div className={classes.alignItemsCenter}>
          <Avatar className={classes.greenAvatar}>D</Avatar>
          <div className={classes.textName}>{status}</div>
        </div>
      ),
    },
    {
      title: 'Remark',
      key: 'remark',
      onHeaderCell: {className: classes.onHeaderCell},
      render: remark => <div className={classes.textSub}>{remark}</div>
    },
    {
      title: 'Vehicle',
      key: 'vehicle',
      onHeaderCell: {className: classes.onHeaderCell},
      render: vehicle => <div className={classes.textSub}>{vehicle}</div>
    },
    {
      title: 'Location',
      key: 'location',
      onHeaderCell: {className: classes.onHeaderCell},
      render: location => <div className={classes.textSub}>{location}</div>
    },
    {
      title: 'Action',
      key: 'action',
      onHeaderCell: {className: classes.onHeaderCell},
      render: () => (
        <div className={classes.actionButton}>
          <Button
            round
            className="btn-round-gray"
            onClick={() => setOpenDialog(true)}
          >
            Queue Edit
          </Button>
        </div>
      )
    }
  ]

  const [selection, setSelection] = React.useState({
    selectStatus: "none",
    selectRemark: "none",
  });

  const handleChange = (event) => {
    setSelection(event.target.value)
  }

  const listSelectValue = ["Email to custom recipient", "FMCSA Audit Transfer", "Email to FMCSA"]
  const [selectValue, setSelectValue] = useState("none");

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value)
  }

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getReportData({page, pageSize});
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getReportData({page, pageSize});
    console.log(page, pageSize)
  }

  const [inputValue, setInputValue] = useState({
    vehicle: "",
    status: ""
  })

  const handleInputChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    })
  }

  const remarkOptions = [
    {
      label: (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSelect}>Break</div>
        </div>
      ),
      value: "Value1",
    },
    {
      label: (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSelect}>Pre-Trip Inspection</div>
        </div>
      ),
      value: "Value2",
    },
    {
      label: (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSelect}>Post-Trip Inspection</div>
        </div>
      ),
      value: "Value3",
    },
    {
      label: (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSelect}>Waiting</div>
        </div>
      ),
      value: "Value4",
    },
    {
      label: (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSelect}>Loading</div>
        </div>
      ),
      value: "Value5",
    },
    {
      label: (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSelect}>Unloading</div>
        </div>
      ),
      value: "Value6",
    }
  ];

  const statusOptions = [
    {
      label: (
        <div className={classes.alignItemsCenter}>
          <Avatar className={classes.greenAvatarSelect}>D</Avatar>
          <div className={classes.textSelect}>Driving</div>
        </div>
      ),
      value: "Value1",
    },
    {
      label: (
        <div className={classes.alignItemsCenter}>
          <Avatar className={classes.orangeAvatarSelect}>O</Avatar>
          <div className={classes.textSelect}>On Duty</div>
        </div>
      ),
      value: "Value2",
    },
    {
      label: (
        <div className={classes.alignItemsCenter}>
          <Avatar className={classes.blackAvatarSelect}>S</Avatar>
          <div className={classes.textSelect}>Sleep</div>
        </div>
      ),
      value: "Value3",
    }
  ]

  const listContent = [
    {
      value: "driving",
      content: <div className={classes.alignItemsCenter}>
        <Avatar className={classes.greenAvatarSelect}>D</Avatar>
        <div className={classes.textSelect}>Driving</div>
      </div>
    },
    {
      value: "onDuty",
      content: <div className={classes.alignItemsCenter}>
        <Avatar className={classes.orangeAvatarSelect}>O</Avatar>
        <div className={classes.textSelect}>On Duty</div>
      </div>
    },
    {
      value: "sleep",
      content: <div className={classes.alignItemsCenter}>
        <Avatar className={classes.blackAvatarSelect}>S</Avatar>
        <div className={classes.textSelect}>Sleep</div>
      </div>
    },
  ]

  return (
    <div>
      <GridContainer className={classes.topHeader}>
        <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
          55 Activity
        </GridItem>
        <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
          <Calendar/>
          <Button
            color="white"
            aria-label="edit"
            justIcon
            round
            className={`btn-36 ${classes.moreAction} mr-2`}
          >
            <MoreHoriz/>
          </Button>
        </GridItem>
      </GridContainer>

      <Table
        columns={dutyColumns}
        dataSource={props.dutyData}
        onHeaderRow={{
          className: classes.onHeaderRow
        }}
        onBodyRow={{
          className: classes.tableRow
        }}
      />

      <Table
        renderTitle={
          <div className={classes.tableHeader}>
            <div className={classes.gridTitle}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <GridContainer className={classes.headContainer}>
                    <GridItem>
                      <Calendar/>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={12} md={6} className={classes.headLeft}>
                  <FormControl variant="outlined" className={classes.selectForm}>
                    <CustomSelect
                      selectProps={{
                        disableUnderline: true,
                      }}
                      listValues={listSelectValue}
                      selectValue={selectValue}
                      onChange={handleSelectChange}
                      placeholder={"Transfer Logs"}
                      customStyle={"logsSelect"}
                    />
                  </FormControl>
                  <Button
                    round
                    className={`btn-round-white w-101 h-41 ${classes.expandButton}`}
                  >
                    Expand All </Button>
                  <Button
                    round
                    className="btn-round-white w-101 h-41"
                  > Collapse All </Button>
                </GridItem>
              </GridContainer>
            </div>
            <Table
              columns={reportColumns}
              dataSource={props.reportData}
              expandedRowRender={(record) => {
                return (
                  <div>
                    <ExpandedRow details={record}/>
                  </div>
                )
              }}
              onHeaderRow={{
                className: classes.onHeaderRow
              }}
              onBodyRow={{
                className: classes.tableRow
              }}
            />
          </div>

        }
        pagination={{
          total: props.reportTotal,
          current: props.reportPage,
          pageSize: props.reportPageSize,
          onChange: onPageChange,
          onShowSizeChange: onShowSizeChange
        }}
        columns={reportColumns2}
        dataSource={props.reportData2}
        onHeaderRow={{
          className: classes.onHeaderRow
        }}
        onBodyRow={{
          className: classes.tableRow
        }}
      />
      <DiaLog
        renderTitle={
          <>
            <h3 className={classes.dialogTitle}>Queue an edit to an uncertified log</h3>
            <h4 className={classes.dialogSubTitle}>This log has not been certified.</h4>
          </>
        }
        open={openDialog}
      >
        <img src={chartDialog} style={{width: 532}}/>
        <Row className={classes.alignItemsCenter}>
          <Col>
            <Select
              label="Status"
              fullWidth={true}
              defaultValue={null}
              options={statusOptions}
              placeholder="Start typing..."
              SelectProps={{isClearable: false}}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </Col>
          <Col>
            <CustomInput
              labelText="Search for assets near"
              name="asset"
              formControlProps={{
                className: classes.sidebarInput
              }}
              inputProps={{
                placeholder: "Enter assets",
                onChange: handleInputChange,
                defaultValue: "Title",
                classes: {input: classes.textInputRoot},
              }}
              labelProps={{
                shrink: true,
                classes: {root: classes.textFieldRoot}
              }}
            />
          </Col>
        </Row>
        <Row className={classes.alignItemsCenter}>
          <Col>
            <Select
              label="Remark"
              fullWidth={true}
              defaultValue={null}
              options={remarkOptions}
              placeholder="Start typing..."
              SelectProps={{isClearable: false}}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </Col>
        </Row>
        <div className={classes.selectButton}>
          <Button
            type="button"
            round
            className="btn-round-active-2 mr-2"
            onClick={() => setOpenDialog(false)}
          >
            Close
          </Button>
          <Button
            round
            className="btn-round-active mr-2"
            type="submit"
          >
            Save
          </Button>
        </div>
      </DiaLog>
    </div>
  );
}

const mapStateToProps = ({compliance}) => {
    return {
      reportData: compliance.reportData.data,
      reportPage: compliance.reportData.page,
      reportTotal: compliance.reportData.total,
      reportPageSize: compliance.reportData.pageSize,

      reportData2: compliance.reportData2.data,
      reportPage2: compliance.reportData2.page,
      reportTotal2: compliance.reportData2.total,
      reportPageSize2: compliance.reportData2.pageSize,

      dutyData: compliance.dutyStatusData.data,
      dutyPage: compliance.dutyStatusData.page,
      dutyTotal: compliance.dutyStatusData.total,
      dutyPageSize: compliance.dutyStatusData.pageSize,
    };
  }
;

const mapDispatchToProps =
  {
    getReportData,
    getDutyStatusData,
    getReportData2
  }
;

export default connect(mapStateToProps, mapDispatchToProps)(DriverHOSReport);