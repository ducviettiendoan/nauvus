import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
import AddOutlined from "@material-ui/icons/AddOutlined";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import EditIcon from "components/Icons/EditIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import DotIcon from "components/Icons/DotIcon.jsx";
import {connect} from "react-redux";
import {getApiToken} from "reducers/setting-developer";
import Table from "components/Table/TableV1";
import DiaLog from "components/CustomDialog/Dialog";
import AddAPIForm from "./api-tokens/AddAPIForm";

const styles = {
  apiTokensHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  apiTokensTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important"
  },
  apiTokensBtn: {
    textAlign: "right",
  },
  apiTokensGuide: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
  },
  apiTokensList: {
    margin: "15px"

  },
  apiTokensDoc: {
    fontWeight: 700,
    fontSize: 15,
    textAlign: "left"
  },
  apiTokensRead: {
    textAlign: "right",
    fontSize: 15,
    fontWeight: 400
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
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
  },
  textSub: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  textScope: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',

  },
  textStatus: {
    display: "inline-block",
    fontSize: '14px',
    lineHeight: '17px',
    padding: "12px 16px",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    fontWeight: "bold",
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    },
  },
  actionIcon: {
    marginTop: "10px"
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  onHeaderCell: {
    fontWeight: "bold"
  },
  dotIcon: {
    color: "#7CE7AC",
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

export function APITokens(props) {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false)

  const handleClose = () => {
    setOpenDialog(false)
  }


  React.useEffect(() => {
    // Get list data
    props.getApiToken();
  }, []);

  const onShowSizeChange = (page, pageSize) => {
    props.getApiToken({page, pageSize});
    console.log(page, pageSize)
  }

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getApiToken({page, pageSize});
  }
  const columns = [
    {
      title: 'Name',
      key: 'name',
      onHeaderCell: {className: classes.onHeaderCell},
      render: name => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{name}</div>
        </div>
      ),
    },
    {
      title: 'Access Token',
      key: 'accessTokens',
      onHeaderCell: {className: classes.onHeaderCell},
      render: accessTokens => <div className={classes.textSub}>{accessTokens}</div>
    },
    {
      title: 'Scope',
      key: 'scope',
      onHeaderCell: {className: classes.onHeaderCell},
      render: scope => <div className={classes.alignItemsCenter}>
        <div><DotIcon className={classes.dotIcon}/></div>
        <div className={classes.textSub}>{scope}</div>
      </div>
    },
    {
      title: 'Version',
      key: 'version',
      onHeaderCell: {className: classes.onHeaderCell},
      render: version => <div className={classes.textSub}>{version}</div>
    },
    {
      title: 'Status',
      key: 'status',
      onHeaderCell: {className: classes.onHeaderCell},
      render: status => <div className={classes.textStatus}>{status}</div>
    },
    {
      title: 'Actions',
      key: 'action',
      onHeaderCell: {className: classes.onHeaderCell},
      render: () => (
        <div className={classes.actionButton}>
          <Button justIcon color="twitter" simple>
            <EditIcon className={classes.iconButton} style={{color: "#ffffff", width: '22px', height: '22px'}}/>
          </Button>
          <Button justIcon color="google" simple>
            <DeleteIcon className={classes.iconButton} style={{color: "#C4C4C4", width: '24px', height: '24px'}}/>
          </Button>
        </div>
      )
    }
  ]

  return (
    <div>
      <Table
        renderTitle={
          <CardBody>
            <GridContainer className={classes.apiTokensHeader}>
              <GridItem xs={12} sm={11} md={8} xl={6} className={classes.apiTokensTitle}>
                6 Tokens
              </GridItem>
              <GridItem xs={12} sm={4} md={4} xl={6} className={classes.apiTokensBtn}>
                <Button
                  round
                  className="btn-round-active mr-2"
                  startIcon={<AddOutlined/>}
                  onClick={() => setOpenDialog(!openDialog)}
                >
                  Add an API Token
                </Button>
              </GridItem>
            </GridContainer>
          </CardBody>

        }
        pagination={{
          total: props.total,
          current: props.page,
          pageSize: props.pageSize,
          onChange: onPageChange,
          onShowSizeChange: onShowSizeChange
        }}
        columns={columns}
        dataSource={props.data}
        onHeaderRow={{
          className: classes.onHeaderRow
        }}
        onBodyRow={{
          className: classes.tableRow
        }}
      />
      <Card testimonial>
        <CardBody>
          <GridContainer className={classes.apiTokensHeader}>
            <GridItem className={classes.apiTokensGuide}>
              Developer Documentation and Guides

            </GridItem>
            <GridContainer className={classes.apiTokensList}>
              <GridItem xs={3} sm={3} md={3} className={classes.apiTokensDoc}>
                API Documentation
              </GridItem>
              <GridItem xs={9} sm={9} md={9} className={classes.apiTokensRead}>
                read through details on how all our APIs work
              </GridItem>
            </GridContainer>
            <GridContainer className={classes.apiTokensList}>
              <GridItem xs={3} sm={3} md={3} className={classes.apiTokensDoc}>
                API Documentation
              </GridItem>
              <GridItem xs={9} sm={9} md={9} className={classes.apiTokensRead}>
                read through details on how all our APIs work
              </GridItem>
            </GridContainer>
            <GridContainer className={classes.apiTokensList}>
              <GridItem xs={3} sm={3} md={3} className={classes.apiTokensDoc}>
                API Documentation
              </GridItem>
              <GridItem xs={9} sm={9} md={9} className={classes.apiTokensRead}>
                read through details on how all our APIs work
              </GridItem>
            </GridContainer>
          </GridContainer>
        </CardBody>
      </Card>
      <DiaLog
        renderTitle={<h3 className={classes.dialogTitle}>Add API Token</h3>}
        handleClose={handleClose}
        open={openDialog}
      >
        <AddAPIForm close={handleClose}/>
      </DiaLog>
    </div>
  );
}

const mapStateToProps = ({settingDeveloper}) => {
  return {
    data: settingDeveloper.apiTokens.data,
    page: settingDeveloper.apiTokens.page,
    total: settingDeveloper.apiTokens.total,
    pageSize: settingDeveloper.apiTokens.pageSize
  };
};

const mapDispatchToProps = {
  getApiToken
};

export default connect(mapStateToProps, mapDispatchToProps)(APITokens);
