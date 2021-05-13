import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import Select from "components/CustomSelect/Select";
import CustomInput from "components/CustomInput/CustomInput";
import defaultImage from "assets/img/Upload.png";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";
import CustomTextArea from "components/CustomTextArea/CustomTextArea";

const styles ={
    text: {
        color: "#25345C",
        fontSize: 15,
        fontWeight: 600,
        marginTop:"20px"
    },
    selectButton: {
        display: "flex",
        justifyContent: "flex-end"
    },
    upLoadFile:{
        color: "#B4B4B4",
        fontSize: "14px",
        lineHeight: "17px",
        opacity: 0.9,
        marginTop:"20px",
        padding:"-15px" 
    },
    pictureSrc:{
        color: "#B4B4B4",
        opacity: 0.9,
        width: "22px",
        height: "22px",
        marginTop:"20px",
        padding:"-15px" 
    }
   
}
const useStyles = makeStyles(styles);

export default function TicketDialog(props) {
    const classes = useStyles();
    const [imagePreviewUrl, setImagePreviewUrl] = React.useState(defaultImage);
    const handleImageChange = e => {
        e.preventDefault();
        let reader = new FileReader();
        let newFile = e.target.files[0];
        reader.onloadend = () => {
          setFile(newFile);
          setImagePreviewUrl(reader.result);
        };
        if (newFile) {
          reader.readAsDataURL(newFile);
        }
      };
    const [openDialog, setOpenDialog] = React.useState(false)
    const statusOptions = [
        {
          label: (
            <div className={classes.alignItemsCenter}>           
              <div className={classes.textSelect}>Driving</div>
            </div>
          ),
          value: "Value1",
        },
        {
          label: (
            <div className={classes.alignItemsCenter}>            
              <div className={classes.textSelect}>On Duty</div>
            </div>
          ),
          value: "Value2",
        },
        {
          label: (
            <div className={classes.alignItemsCenter}>
              <div className={classes.textSelect}>Sleep</div>
            </div>
          ),
          value: "Value3",
        }
      ]

    const onSubmit = async (values) => {
        console.log(values);
    }
    const validate = (values) => {
        const errors = {};
        if (!values.serialNumbers) errors.serialNumbers = 'Please enter at least 1 serial number!';
        return errors;
    };
    
    return (
        <div>
            
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, reset, submitting, pristine, values }) => {
                    return (
                        <form onSubmit={handleSubmit} noValidate>
                            <GridContainer justify="space-between" className={classes.formRow}> 
                                <GridItem xs={12}>   
                                    <div className={classes.text}>
                                        What can we help you with?
                                    </div>
                                    <Select
                                        label="Status"
                                        fullWidth={true}
                                        defaultValue={null}
                                        options={statusOptions}
                                        placeholder="Start typing..."
                                        SelectProps={{ isClearable: false }}
                                        onChange={(value) => {
                                            console.log(value);
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12}>
                                    <div className={classes.text}>
                                       Subject
                                    </div>
                                    <Field
                                        id="standard-full-width"
                                        placeholder="Start typing..."
                                        fullWidth
                                        margin="normal"
                                        name="subject"
                                        InputLabelProps={{
                                            shrink: true,
                                            classes: {root: classes.textFieldRoot}
                                        }}
                                        InputProps={{
                                            classes: {input: classes.textInputRoot}
                                        }}
                                        component={TextField}
                                    />
                                </GridItem>
                                <GridItem xs={12}>
                                    <div className={classes.text}>
                                        Please describe your issue
                                    </div>
                                    <Field
                                            className={classes.textarea}
                                            fullWidth
                                            required
                                            name="serialNumbers"
                                            placeholder="Start typing..."
                                            component={CustomTextArea}
                                        />
                                </GridItem>
                                <GridItem xs={12}>   
                                    <div className={classes.text}>
                                        Ticket Priority
                                    </div>
                                    <Select
                                        fullWidth={true}
                                        placeholder="Start typing..."
                                        defaultValue={null}
                                        options={statusOptions}
                                    />
                                </GridItem>
                                <GridItem xs={6}>
                                    <div className={classes.text}>
                                        Ticket Priority
                                    </div>
                                </GridItem>
                                
                                    <GridItem xs={4}>
                                        <div className={classes.upLoadFile}>Upload your attachment</div>  
                                    </GridItem>
                                    <GridItem xs={2} className={`picture ${ classes.pictureContainer }`}  onChange={e => handleImageChange(e)}>
                                    <img src={imagePreviewUrl} className={classes.pictureSrc} alt="..." />
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
                                > Submit</Button>
                            </div>
                        </form>
                    )
                }}
            />
        </div>
    )
}