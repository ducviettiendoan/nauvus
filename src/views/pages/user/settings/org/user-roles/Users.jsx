import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';

import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import DeleteIcon from "components/Icons/DeleteIcon";
import Table from "components/Table/TableV1";
import DotIcon from "components/Icons/DotIcon";
import EditIcon from "components/Icons/EditIcon";
import avatar from "assets/img/faces/avatar.jpg";
import ChipSelect from 'components/Chip/ChipSelect';
import { getUserRoles } from "reducers/setting-org";
import DiaLog from "components/CustomDialog/Dialog";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  selected: {
    height: 24,
    width: "auto",
    background: "#ECEEF0 !important",
    borderRadius: 28,
    color: "#25345C !important",
    display: "flex",
    alignItems: "center",
  },
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
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    marginLeft: '16px'
  },
  textEmail: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#C4C4C4"
  },
  chips: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
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
  dotIcon: {
    color: "#7CE7AC",
    marginTop: 10
  },
  textRoles: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  textAccess: {
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
    }
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: "50%"
  },
  rootSelect: {
    width: "100%"
  },
  formRow: {
    marginBottom: 16
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end"
  },
  formText: {
    fontSize: "14px",
    fontFamily: 'Lato',
    fontWeight: "400",
  },
  formTextSpan: {
    paddingLeft: "30px",
    color: "#a5a5a5",
  },
  diaglogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
}));

export function Users(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // Get list data
    props.getUserRoles();
  }, []);

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Standard Admin' },
    { key: 1, label: 'Full admin' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const columns = [
    {
      title: 'User',
      key: 'user',
      onHeaderCell: { className: classes.onHeaderCell },
      render: user => (
        <div className={classes.alignItemsCenter}>
          <div><img src={avatar} alt="user-avatar" className={classes.avatarImage} /></div>
          <div className={classes.textName}>{user}</div>
        </div>
      ),
    },
    {
      title: 'E-Mail',
      key: 'email',
      onHeaderCell: { className: classes.onHeaderCell },
      render: email => <div className={classes.textEmail}>{email}</div>
    },
    {
      title: 'Roles',
      key: 'roles',
      onHeaderCell: { className: classes.onHeaderCell },
      render: roles => (
        <div className={classes.alignItemsCenter}>
          <div><DotIcon className={classes.dotIcon} /></div>
          <div className={classes.textRoles}>{roles}</div>
        </div>
      )
    },
    {
      title: 'Access',
      key: 'access',
      onHeaderCell: { className: classes.onHeaderCell },
      render: access => <div className={classes.textAccess}>{access}</div>
    },
    {
      title: 'Actions',
      key: 'action',
      onHeaderCell: { className: classes.onHeaderCell },
      render: () => (
        <div className={classes.actionButton}>
          <Button justIcon color="twitter" simple>
            <EditIcon className={classes.iconButton} style={{ color: "#ffffff", width: '22px', height: '22px' }} />
          </Button>
          <Button justIcon color="google" simple>
            <DeleteIcon className={classes.iconButton} style={{ color: "#C4C4C4", width: '24px', height: '24px' }} />
          </Button>
        </div>
      )
    }
  ];

  const roles = [
    { id: 'full_admin', label: 'Full Admin' },
    { id: 'standard_admin', label: 'Standard Admin' },
    { id: 'read_only_admin', label: 'Read-only Admin' },
    { id: 'dispatch', label: 'Dispatch' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'standard_admin_no_dash', label: "Standard Admin (No Dash Cam Access)" }
  ]

  const access = [
    { id: "Entire", label: "Entire Organization" },
    { id: "room", label: "Room" },
    { id: "new", label: "New" }
  ]

  const onSubmit = async (values) => {
    console.log(values);
  }
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email must not be empty!';
    }
    console.log(errors);
    return errors;
  };


  return (
    <div>
      <Table
        renderTitle={
          <GridContainer justify="space-between" className={classes.gridTitle}>
            <GridItem>
              <ChipSelect
                data={chipData}
                handleDelete={handleDelete}
                handleClearAll={handleClearAll}
              />
            </GridItem>
            <GridItem className={classes.headLeft}>
              <ToolboxButton placeholder="Search for tag or email" showFilter showTrash />
            </GridItem>
          </GridContainer>
        }
        rowSelection={{}}
        columns={columns}
        dataSource={props.data}
        onHeaderRow={{
          className: classes.onHeaderRow
        }}
        onBodyRow={{
          className: classes.tableRow
        }}
      />
      <DiaLog
        renderTitle={<h3 className={classes.diaglogTitle}>Invite User</h3>}
        handleClose={props.handleClose}
        open={props.open}
      >
        <Form
          onSubmit={onSubmit}
          // initialValues={{ email: "test@gmail.com", stooge: 'larry' }}
          validate={validate}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <GridContainer justify="space-between" className={classes.formRow}>
                <GridItem md>
                  <InputLabel required>Email</InputLabel>
                  <Field
                    fullWidth
                    required
                    name="email"
                    type="text"
                    component={TextField}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer justify="space-between" className={classes.formRow}>
                <GridItem md={6}>
                  <InputLabel >Role</InputLabel>
                  <Field
                    fullWidth
                    name="role"
                    component={Select}
                    formControlProps={{ fullWidth: true }}
                    style={{ margin: 0 }}
                  >
                    {roles.map(role => <MenuItem key={role.id} value={role.id}>{role.label}</MenuItem>)}
                  </Field>
                </GridItem>
                <GridItem md={6}>
                  <InputLabel>Access</InputLabel>
                  <Field
                    fullWidth
                    name="access"
                    component={Select}
                    formControlProps={{ fullWidth: true }}
                    style={{ margin: 0 }}
                  >
                    {access.map(role => <MenuItem key={role.id} value={role.id}>{role.label}</MenuItem>)}
                  </Field>
                </GridItem>
              </GridContainer>
              <GridContainer justify="space-between" className={classes.formRow}>
                <GridItem md>
                  <InputLabel >Permissions</InputLabel>
                  <p className={classes.formText}>
                    Read-only Admin
                    <span className={classes.formTextSpan}>View access except billing and finance pages.</span>
                  </p>
                </GridItem>
              </GridContainer>
              <div className={classes.selectButton}>
                <Button
                  type="button"
                  round
                  className="btn-round-active-2 mr-2"
                  onClick={props.handleClose}
                > Cancel</Button>
                <Button
                  round
                  className="btn-round-active mr-2"
                  type="submit"
                  disabled={submitting}
                > Save</Button>
              </div>

            </form>
          )}
        />
      </DiaLog>
    </div>
  );
}

const mapStateToProps = ({ settingOrg }) => {
  return {
    data: settingOrg.userRoles
  };
};

const mapDispatchToProps = {
  getUserRoles
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
