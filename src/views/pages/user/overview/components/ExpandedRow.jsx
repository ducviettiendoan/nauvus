import { Divider, makeStyles } from "@material-ui/core"
import React, { useEffect } from "react"
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { Col, Row } from "reactstrap";
import Button from "components/CustomButtons/Button"
import TableImg from "assets/img/TableImg.jsx";
import { MoreHoriz } from "@material-ui/icons";
import Table from "components/Table/TableV1";
import { connect } from "react-redux";
import { getChartData } from "reducers/overview"
import DotIcon from "components/Icons/DotIcon";

const styles = {
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  detailsContainer: {
    padding: "0px 24px 16px 24px !important"
  },
  detailsHeader: {
    padding: "16px 0px 0px 0px !important",
  },
  detailsKey: {
    paddingRight: "0px !important",
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '18px',
    color: '#25345C',
  },
  detailsValue: {
    paddingLeft: "5px !important",
    fontWeight: "normal",
    fontSize: '12px',
    lineHeight: '18px',
    color: '#25345C',
  },
  subTableHeader: {
    padding: "16px 0px 16px 0px !important",
    fontWeight: "bold",
    fontSize: '14px',
    lineHeight: '18px',
    color: '#25345C',
  },
  subTableContainer: {
    padding: "16px 0px 16px 0px !important",
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  chart: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  subTable: {
    width: "100%"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  groupButton: {
    padding: "0px 0px 0px 0px !important",
  },
  textSub: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
  },
  onHeaderCell: {
    fontWeight: "bold"
  },
  statusContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  alignItemsCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  dotIcon: {
    color: "#7CE7AC",
  },
}

const useStyles = makeStyles(styles)

function ExpandedRow(props) {
  const { details } = props
  const classes = useStyles(styles)

  useEffect(() => {
    props.getChartData()
  }, [])

  const columns = [
    {
      title: 'Time',
      key: 'time',
      onHeaderCell: { className: classes.onHeaderCell },
      render: time => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{time}</div>
        </div>
      ),
    },
    {
      title: 'Duration',
      key: 'duration',
      onHeaderCell: { className: classes.onHeaderCell },
      render: duration => <div className={classes.alignItemsCenter}>
        <div className={classes.textSub}>{duration}</div>
      </div>
    },
    {
      title: 'Status',
      key: 'status',
      onHeaderCell: { className: classes.onHeaderCell },
      render: status => (
        <div className={classes.statusContainer}>
          <div><DotIcon className={classes.dotIcon} /></div>
          <div className={classes.textSub}>{status}</div>
        </div>
      )
    },
    {
      title: 'Remark',
      key: 'remark',
      onHeaderCell: { className: classes.onHeaderCell },
      render: remark => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{remark}</div>
        </div>
      )
    },
    {
      title: 'Vehicle',
      key: 'vehicle',
      onHeaderCell: { className: classes.onHeaderCell },
      render: vehicle => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{vehicle}</div>
        </div>
      )
    },
    {
      title: 'Location',
      key: 'location',
      onHeaderCell: { className: classes.onHeaderCell },
      render: location => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{location}</div>
        </div>
      )
    },
    {
      title: 'Action',
      key: 'action',
      onHeaderCell: { className: classes.onHeaderCell },
      render: () => (
        <div className={classes.actionButton}>
          <Button
            round
            className="btn-round-gray"
          >
            Queue Edit
          </Button>
        </div>
      )
    }
  ]

  return (
    <GridContainer className={classes.detailsContainer}>
      <GridItem className={classes.detailsHeader} xs={12} sm={12} md={12}>
        <Row className="mb-4">
          <Col>
            <Row>
              <GridItem className={classes.detailsKey}>Carrier / Principle Place of Business Name:</GridItem>
              <GridItem className={classes.detailsValue}>{details.carrierName}</GridItem>
            </Row>
          </Col>
          <Col>
            <Row style={{ float: "right" }}>
              <GridItem className={classes.detailsKey}>ELD Provider & ID:</GridItem>
              <GridItem className={classes.detailsValue}>{details.carrierId}</GridItem>
            </Row>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Row>
              <GridItem className={classes.detailsKey}>Carrier / Principle Place of Business Address:</GridItem>
              <GridItem className={classes.detailsValue}>{details.carrierAddress}</GridItem>
            </Row>
          </Col>
        </Row>
        <Row className="mb-16">
          <Col>
            <Row>
              <GridItem className={classes.detailsKey}>Carrier US DOT Number: </GridItem>
              <GridItem className={classes.detailsValue}>{details.carrierDotNumber}</GridItem>
            </Row>
          </Col>
        </Row>
        <Divider variant="fullWidth" light />
      </GridItem>
      <GridItem className={classes.detailsHeader} xs={12} sm={12} md={12}>
        <Row className="mb-4">
          <Col>
            <Row>
              <GridItem className={classes.detailsKey}>Driver:</GridItem>
              <GridItem className={classes.detailsValue}>{details.driverName}</GridItem>
            </Row>
          </Col>
          <Col xs={1.5} sm={1.5} md={1.5}>
            <Row style={{ float: "left" }}>
              <GridItem className={classes.detailsKey}>Shipping ID:</GridItem>
              <GridItem className={classes.detailsValue}>{details.shippingId}</GridItem>
            </Row>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Row>
              <GridItem className={classes.detailsKey}>Driver License </GridItem>
              <GridItem className={classes.detailsValue}>{details.driverLicense}</GridItem>
            </Row>
          </Col>
          <Col xs={1.5} sm={1.5} md={1.5}>
            <Row style={{ float: "left" }}>
              <GridItem className={classes.detailsKey}>Trailer:</GridItem>
              <GridItem className={classes.detailsValue}>{details.trailer}</GridItem>
            </Row>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Row>
              <GridItem className={classes.detailsKey}>Ruleset: </GridItem>
              <GridItem className={classes.detailsValue}>{details.ruleSet}</GridItem>
            </Row>
          </Col>
          <Col xs={1.5} sm={1.5} md={1.5}>
            <Row style={{ float: "left" }}>
              <GridItem className={classes.detailsKey}>Distance:</GridItem>
              <GridItem className={classes.detailsValue}>{details.distance} mi</GridItem>
            </Row>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Row>
              <GridItem className={classes.detailsKey}>Vehicles: </GridItem>
              <GridItem className={classes.detailsValue}>{details.vehicle}</GridItem>
            </Row>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Row>
              <GridItem className={classes.detailsKey}>Home Terminal Name: </GridItem>
              <GridItem className={classes.detailsValue}>{details.homeName}</GridItem>
            </Row>
          </Col>
        </Row>
        <Row className="mb-16">
          <Col>
            <Row>
              <GridItem className={classes.detailsKey}>Home Address Name: </GridItem>
              <GridItem className={classes.detailsValue}>{details.addressName}</GridItem>
            </Row>
          </Col>
        </Row>
        <Divider variant="fullWidth" light />
      </GridItem>
      <GridItem className={classes.subTableContainer}>
        <GridItem className={classes.subTableHeader}>{details.driverName} - {details.date}</GridItem>
        <GridItem className={classes.groupButton}>
          <Button
            round
            className="btn-round-gray mr-2"
          >
            Queue Edit
          </Button>
          <Button
            color="white"
            aria-label="edit"
            justIcon
            round
            className={`btn-36 ${classes.moreAction} mr-2`}
          >
            <MoreHoriz />
          </Button>
        </GridItem>
      </GridItem>
      <GridItem className={classes.chart}>
        <TableImg />
        <Divider variant="fullWidth" light />
      </GridItem>

      <div className={classes.subTable}>
        <Table
          columns={columns}
          dataSource={props.data}
          onHeaderRow={{
            className: classes.onHeaderRow
          }}
          onBodyRow={{
            className: classes.tableRow
          }}
        />
      </div>

    </GridContainer>
  )
}

const mapStateToProps = ({ overview }) => {
  return {
    data: overview.chartData
  }
}

const mapDispatchToProps = {
  getChartData
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpandedRow)