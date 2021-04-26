import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InputLabel from "@material-ui/core/InputLabel";
import {Field, Form} from "react-final-form";
import {Select} from "final-form-material-ui";

import MenuItem from "@material-ui/core/MenuItem";
import {useHistory} from "react-router-dom";

const styles = {
  selectButton: {
    display: "flex",
    justifyContent: "flex-end"
  },
  formRow: {
    marginBottom: 24
  },
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
  label: {
    marginLeft: 16,
    fontSize: 14,
  },

};

const useStyles = makeStyles(styles);

const SelectDocumentForm = (props) => {
  const classes = useStyles()

  const history = useHistory()

  const documentTypes = [
    {id: "bill-of-lading", label: "Bill of Lading"},
    {id: "proof-of-delivery", label: "Proof of Delivery"},
  ]

  const onSubmit = async (values) => {
    console.log(values);
  }
  const validate = (values) => {
    const errors = {};
    if (!values.documentType) errors.documentType = 'There must be a document type';
    return errors;
  };


  return(
    <>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({handleSubmit, reset, submitting, pristine, values}) => {
          return (
            <form onSubmit={handleSubmit} noValidate>
              <GridContainer justify="space-between">
                <InputLabel className={classes.label}>Select Document</InputLabel>
                <GridItem xs={12} className={classes.formRow}>
                  <Field
                    formControlProps={{fullWidth: true}}
                    name="documentType"
                    component={Select}
                    style={{margin: 0}}
                  >
                    {documentTypes.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                  </Field>
                </GridItem>
              </GridContainer>
              <div className={classes.selectButton}>
                <Button
                  type="button"
                  round
                  className="btn-round-active-2 mr-2"
                  onClick={() => history.push("/u/documents")}
                > Create a new document</Button>
                <Button
                  round
                  className="btn-round-active mr-2"
                  type="submit"
                  onClick={() => history.push("/s/fleet/workflow-create")}
                  disabled={submitting}
                > Create</Button>
              </div>
            </form>
          )
        }}
      />
    </>
  )
}

export default SelectDocumentForm;