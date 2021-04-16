import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InputLabel from "@material-ui/core/InputLabel";
import {Field, Form} from "react-final-form";
import {Select, TextField} from "final-form-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "components/CustomButtons/Button";
import CustomInput from "../../../../../../components/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneIconField from "../../../../../../components/Icons/PhoneIconField";
import {Col, Row} from "reactstrap";
import Link from "@material-ui/core/Link";
import CustomSelect from "../../../../../../components/CustomSelect/CustomSelect";

const styles = {
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
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#C4C4C4'
  },
  textInputRoot: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C'
  },
  selectField: {
    paddingTop: "18px",
    paddingBottom: "10px",
    fontWeight: 700,
    fontSize: '14px',
    color: '#25345C',
  },
}
const useStyles = makeStyles(styles);

export default function AddAPIForm(props) {
  const classes = useStyles()

  const [selectValue, setSelectValue] = useState({
    role: "none",
  });

  const onSubmit = async (values) => {
    console.log(values);
  }
  const validate = (values) => {
    const errors = {};
    if (!values.name)
      errors.name = 'Name must not be empty!';
    return errors;
  };

  const handleChange = (event) => {
    setSelectValue({ ...selectValue, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({handleSubmit, reset, submitting, pristine, values}) => {
          return (
            <form onSubmit={handleSubmit} noValidate>
              <GridContainer justify="space-between" className={classes.formRow}>
                <GridItem xs={12}>
                  <Field
                    id="standard-full-width"
                    label="Name"
                    placeholder="Start typing..."
                    fullWidth
                    margin="normal"
                    name="name"
                    InputLabelProps={{
                      shrink: true,
                      classes: {root: classes.textFieldRoot}
                    }}
                    InputProps={{
                      classes: {input: classes.textInputRoot},
                    }}
                    component={TextField}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <Field
                    labelProps={{
                      shrink: true,
                      classes: {root: classes.textFieldRoot}
                    }}
                    selectProps={{
                      classes: {root: classes.selectField}
                    }}
                    labelText="Roles"
                    name="selectA"
                    listValues={["Full Admin", "Read-only Admin"]}
                    placeholder={"Select role"}
                    selectValue={selectValue.role}
                    IconComponent={{
                      classes: {root: classes.iconDropdown}
                    }}
                    onChange={handleChange}
                    component={CustomSelect}
                  />
                </GridItem>
              </GridContainer>
              <div className={classes.selectButton}>
                <Button
                  type="button"
                  round
                  className="btn-round-active-2 mr-2"
                  onClick={props.close}
                >
                  Cancel
                </Button>
                <Button
                  round
                  className="btn-round-active mr-2"
                  type="submit"
                  disabled={submitting}
                > Save
                </Button>
              </div>
            </form>
          )
        }}
      />
    </div>
  )
}