import {Field, Form} from "react-final-form";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InputLabel from "@material-ui/core/InputLabel";
import {TextField} from "final-form-material-ui";
import Button from "components/CustomButtons/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CustomColorPicker from "components/CustomColorPicker/CustomColorPicker";

const styles = {
  formRow: {
    marginBottom: 16
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end"
  },
  label: {
    color: "#b4b4b4",
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Lato"
  },
  blueLabel: {
    color: "#25345C",
    fontSize: 18,
    fontWeight: 700,
  }

}
const useStyles = makeStyles(styles);


const AddCustomTileForm = (props) => {
  const classes = useStyles()
  const {data} = props
  const initData = data


  const onSubmit = async (values) => {
    console.log(values);
  }
  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Tile Name must not be empty!';
    if (!values.link) errors.link = 'Deep Link or URL must not be empty!';
    return errors;
  };
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={initData}
        validate={validate}
        render={({handleSubmit, reset, submitting, pristine, values}) => {
          return (
            <form onSubmit={handleSubmit} noValidate>
              <GridContainer justify="space-between">
                <GridItem xs={12} className={classes.formRow}>
                  <InputLabel className={classes.label}>Tile Name</InputLabel>
                  <Field
                    fullWidth
                    required
                    placeholder="Start typing…"
                    name="name"
                    component={TextField}
                  />
                </GridItem>
                <GridItem xs={12} className={classes.formRow}>
                  <InputLabel className={classes.label}>Deep Link or URL
                  </InputLabel>
                  <Field
                    fullWidth
                    required
                    placeholder="Start typing…"
                    name="link"
                    component={TextField}
                  />
                </GridItem>
                <GridItem xs={12} className={classes.formRow}>
                  <InputLabel className={classes.blueLabel}>Color</InputLabel>
                  <Field
                    name="color">
                  {props => {
                    return <CustomColorPicker name={props.input.name} value={props.input.value} onChange={props.input.onChange}/>
                  }}
                  </Field>
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
          )
        }}
      />
    </div>
  )
}

export default AddCustomTileForm;