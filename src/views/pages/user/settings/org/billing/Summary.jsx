import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import {Col, Row} from "reactstrap";
import avatar from "assets/img/faces/avatar.jpg";
import VerifiedIcon from "components/Icons/VerifiedIcon"
import CardIcon from "components/Icons/CardIcon"
import HelpIcon from "components/Icons/HelpIcon"
import {connect} from "react-redux";
import {IRootState} from "reducers";
import {getInvoiceSummary} from "reducers/setting-org";
import Table from "components/Table/TableV1";
import DiaLog from "components/CustomDialog/Dialog";
import HelpForm from "./HelpForm";

const styles = {
    textSub: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        color: "#25345C",
    },
    textStatus: {
        fontSize: '14px',
        lineHeight: '24px',
        padding: "12px 14px",
        color: "#FFFFFF",
        background: "rgba(229,57,53,0.85)",
        borderRadius: 23,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        width: 87,
        height: 41
    },
    userHeader: {
        paddingTop: "27px"
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        marginTop: "-20px",
        marginRight: "20px"
    },
    status: {
        padding: "0px 0px 0px 0px !important",
        textAlign: "left",
        display: 'inline-block'
    },
    avatar: {
        padding: "0px 0px 0px 0px !important",
        textAlign: "center",
        display: 'inline-block'
    },
    statusName: {
        color: "#25345C",
        fontWeight: "700",
        padding: "0px 0px 0px 0px !important",
    },
    statusVerify: {
        color: "#B4B4B4",
        fontWeight: "400",
        fontSize: "14px",
        padding: "0px 0px 0px 0px !important",
    },

    paymentData: {
        marginTop: "50px"
    },
    paymentTitle: {
        fontSize: "18px",
        fontWeight: "700",
        color: "#25345C"
    },
    paymentType: {
        fontSize: "14px",
        fontWeight: "700",
        color: "#B4B4B4"
    },
    paymentAmount: {
        fontSize: "18px",
        fontWeight: "700",
        color: "#25345C",
        lineHeight: "21px"
    },
    paymentView: {
        fontSize: "12px",
        fontWeight: "700",
        color: "#25345C",
        marginTop: "40px",
        marginBottom: "20px",
        marginLeft: "11px"
    },
    paymentInfo: {
        padding: "0 !important",
        marginTop: "20px"
    },
    card: {
        paddingRight: "0 !important",
        marginTop: "25px",
        marginRight: "11px",
        marginLeft: "11px"
    },
    cardInfo: {
        paddingRight: "0 !important",
        marginTop: "25px",
        marginLeft: "11px"
    },
    paymentSection: {
        border: "1px solid #ECEEF0",
        borderRadius: "12px",
        margin: "15px",
    },
    helpBtn: {
        textAlign: "right"
    },
    onHeaderCell: {
        fontWeight: "bold",
        color: "#25345C"
    },
    tableTitle: {
        fontSize: "18px",
        fontWeight: 700,
        color: "#25345C",
        display: "flex",
        alignItems: "center",
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
    gridTitle: {
        padding: "20px",
    },
    tableRow: {
        '&:nth-of-type(even)': {
            backgroundColor: "#fbfbfb",
        },
    },
    onHeaderRow: {
        background: "#ECEEF0",
    },
    dialogTitle: {
        fontWeight: "bold",
        fontSize: "22px",
        lineHeight: "26px",
        color: "#25345C",
        margin: "24px",
        textAlign: "center"
    },
};

const useStyles = makeStyles(styles);

export function Summary(props) {
    const classes = useStyles();
    const [openAdd, setOpenAdd] = React.useState(false);

    React.useEffect(() => {
        // Get list data
        props.getInvoiceSummary();
    }, []);

    const columns = [
        {
            title: 'Due Date',
            key: 'dueDate',
            onHeaderCell: {className: classes.onHeaderCell},
            render: dueDate => (
                <div className={classes.textSub}>{dueDate}</div>
            ),
        },
        {
            title: 'PO',
            key: 'po',
            onHeaderCell: {className: classes.onHeaderCell},
            render: po => (
                <div className={classes.textSub}>{po}</div>
            )
        },
        {
            title: 'Invoice',
            key: 'invoice',
            onHeaderCell: {className: classes.onHeaderCell},
            render: invoice => (
                <div className={classes.textSub}>{invoice}</div>
            )
        },
        {
            title: 'Amount',
            key: 'amount',
            onHeaderCell: {className: classes.onHeaderCell},
            render: amount => (
                <div className={classes.textSub}>{amount}</div>
            )
        },
        {
            title: 'Remaining Balance',
            key: 'remainingBalance',
            onHeaderCell: {className: classes.onHeaderCell},
            render: remainingBalance => (
                <div className={classes.textSub}>{remainingBalance}</div>
            )
        },
        {
            title: 'Status',
            key: 'status',
            onHeaderCell: {className: classes.onHeaderCell},
            render: status => (
                <div className={classes.textStatus}>{status}</div>
            )
        },
    ];
    return (
        <div>
            <GridContainer>
                <DiaLog
                    renderTitle={<h3 className={classes.dialogTitle}>Help</h3>}
                    handleClose={() => {
                        setOpenAdd(false)
                    }
                    }
                    open={openAdd}
                >
                    <HelpForm handleClose={() => {
                        setOpenAdd(false)
                    }}/>
                </DiaLog>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardBody>
                            <Row className={classes.userHeader}>
                                <Col>
                                    <div className={classes.avatar}>
                                        <img src={avatar} alt="user-avatar" className={classes.avatarImage}/>
                                    </div>
                                    <div className={classes.status}>
                                        <div className={classes.statusName}>
                                            Account status, Johnny Bowers
                                        </div>
                                        <div className={classes.statusVerify}>
                                            <VerifiedIcon style={{
                                                color: "#FFFFFF",
                                                width: '16px',
                                                height: '16px',
                                                marginRight: '11px'
                                            }}/>
                                            Your account is current
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className={classes.helpBtn}>
                                        <Button
                                            round
                                            className="btn-round-white w-88"
                                            onClick={() => {setOpenAdd(true)}}
                                            startIcon={<HelpIcon
                                                style={{
                                                    color: "#FFFFFF",
                                                    width: '16px',
                                                    height: '16px',
                                                    top: "2px",
                                                    marginRight: 0
                                                }}/>}
                                        >
                                            Help
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            <GridItem xs={12} sm={12} md={12}>
                                <GridContainer className={classes.paymentData}>
                                    <GridItem xs={6} sm={6} md={6} className={classes.paymentTitle}>
                                        Your Account
                                        <GridContainer>
                                            <GridItem xs={10} sm={10} md={10} lg={5} className={classes.paymentSection}>
                                                <GridContainer>
                                                    <GridItem xs={1} sm={1} md={1} className={classes.card}>
                                                        <CardIcon
                                                            style={{color: "#FFFFFF", width: '18px', height: '21px'}}/>
                                                    </GridItem>
                                                    <GridItem xs={9} sm={9} md={9} className={classes.paymentInfo}>
                                                        <GridItem xs={12} sm={12} md={12}
                                                                  className={classes.paymentType}>
                                                            Upcoming payment
                                                        </GridItem>
                                                        <GridItem xs={12} sm={12} md={12}
                                                                  className={classes.paymentAmount}>
                                                            $30,659,45
                                                        </GridItem>
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={12} className={classes.paymentView}>
                                                        View All
                                                    </GridItem>
                                                </GridContainer>
                                            </GridItem>
                                            <GridItem xs={3} sm={3} md={5} className={classes.paymentSection}>
                                                <GridContainer>
                                                    <GridItem xs={1} sm={1} md={1} className={classes.card}>
                                                        <CardIcon
                                                            style={{color: "#FFFFFF", width: '18px', height: '21px'}}/>
                                                    </GridItem>
                                                    <GridItem xs={9} sm={9} md={9} className={classes.paymentInfo}>
                                                        <GridItem xs={12} sm={12} md={12}
                                                                  className={classes.paymentType}>
                                                            Last payment
                                                        </GridItem>
                                                        <GridItem xs={12} sm={12} md={12}
                                                                  className={classes.paymentAmount}>
                                                            $28,750,00
                                                        </GridItem>
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={12} className={classes.paymentView}>
                                                        View All
                                                    </GridItem>
                                                </GridContainer>
                                            </GridItem>
                                        </GridContainer>
                                    </GridItem>
                                    <GridItem xs={6} sm={6} md={6} className={classes.paymentTitle}>
                                        Payment Method
                                        <GridContainer>
                                            <GridItem xs={7} sm={7} md={7} className={classes.paymentSection}>
                                                <GridContainer>
                                                    <GridItem xs={1} sm={1} md={1} className={classes.cardInfo}>
                                                        <CardIcon
                                                            style={{color: "#FFFFFF", width: '18px', height: '21px'}}/>
                                                    </GridItem>
                                                    <GridItem xs={10} sm={10} md={10} className={classes.paymentInfo}>
                                                        <GridItem xs={12} sm={12} md={12}
                                                                  className={classes.paymentType}>
                                                            Exp 1/2025
                                                        </GridItem>
                                                        <GridItem xs={12} sm={12} md={12}
                                                                  className={classes.paymentAmount}>
                                                            MASTERCARD ••••1887
                                                        </GridItem>
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={12} className={classes.paymentView}>
                                                        Change payment method
                                                    </GridItem>
                                                </GridContainer>
                                            </GridItem>
                                        </GridContainer>
                                    </GridItem>
                                </GridContainer>
                            </GridItem>
                        </CardBody>
                        <Table
                            renderTitle={
                                <GridContainer justify="space-between" className={classes.gridTitle}>
                                    <GridItem className={classes.tableTitle}>
                                        Open Invoices
                                    </GridItem>
                                </GridContainer>
                            }
                            columns={columns}
                            dataSource={props.data}
                            onHeaderRow={{className: classes.onHeaderRow}}
                            onBodyRow={{className: classes.tableRow}}
                        />
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}

export default connect(
    ({settingOrg}: IRootState) => ({
        data: settingOrg.invoicesSummary.data,
    }),
    {
        getInvoiceSummary
    }
)(Summary);