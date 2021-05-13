import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import Select from "components/CustomSelect/Select";
import MenuItem from "@material-ui/core/MenuItem";
import defaultImage from "assets/img/Upload.png";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";
import Grid from '@material-ui/core/Grid';
import CustomTextArea from "components/CustomTextArea/CustomTextArea";
import InputLabel from "@material-ui/core/InputLabel";

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
        padding:"-15px",
        cursor:"pointer"
    },
    pictureSrc:{
        color: "#B4B4B4",
        opacity: 0.9,
        width: "22px",
        height: "22px",
        marginTop:"20px",
        padding:"-15px" 
    },
    uploadSection: {
        display: "flex",
        alignItems: "center",
        marginTop:"15px",
    },
    organizationUpload: {
        "&>div": {
          margin: "0px !important",
        },
        display: "flex",
        cursor: "pointer !important",
    },
    pictureContainer: {
        width: "30px !important",
        height: "32px !important",
        margin: "80px auto 0 auto !important",
        backgroundColor: "transparent !important",
        border: "none !important",
        borderRadius: "0 !important",
        "&>img": {
          width: "80% !important",
        },
    },
    txtChooseFile: {
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "14px",
        color: "#B4B4B4",
        display: "flex",
        alignItems: 'center',
    },
    alignItemsCenter: {
        display: "flex",
        alignItems: "center",
    },
    textSelect: {
        fontWeight: 700,
        fontStyle: 'normal',
        fontSize: '12px',
        color: '#25345C',
      },
    formRow: {
        marginBottom: 16
      },
}
const useStyles = makeStyles(styles);

export default function GetHelpDiaLog(props) {
    const classes = useStyles();
    const [imagePreviewUrl, setImagePreviewUrl] = React.useState(defaultImage);
    const [file, setFile] = React.useState(null);
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
    const tags = [
        {label: `Tag 1`, id: 1},
        {label: `Tag 2`, id: 2}
      ]
      const [workingDays, setWorkingDays] = useState([false, false, false, false, false, false, false])
    
      const toggleDay = (index) => {
        let newWorkingDays = workingDays.map((e, i) => {
          if (index === i) {
            return !e
          }
          return e
        })
        console.log(newWorkingDays)
        setWorkingDays(newWorkingDays)
      }
    
      const mins = []
      for (let i = 0; i <= 60; i += 5) {
        mins.push({label: `${i} mins`, id: i})
      }
    
      const initData = {timezone: "ny"}

    const onSubmit = async (values) => {
        console.log(values);
    }
    const validate = (values) => {
        const errors = {};
        if (!values.serialNumbers) errors.serialNumbers = 'Please enter at least 1 serial number!';
        return errors;
    };
    const statusOptions = [
        {
          label: "aaaaa",
          value: "Value1",
        },
        {
          label: "bbbb",
          value: "Value2",
        },
        {
          label: "ccccc",
          value: "Value3",
        }
      ]
    
    return (
        <div>
            
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, reset, submitting, pristine, values }) => {
                    return (
                        <form onSubmit={handleSubmit} noValidate>
                            <GridContainer justify="space-between"> 
                                <GridItem xs={12} className={classes.formRow}>   
                                    <InputLabel className={classes.text}>
                                        What can we help you with?
                                    </InputLabel>
                                    {/* <Field
                                        fullWidth
                                        name="tag"
                                        placeholder="Select tags..."
                                        component={Select}
                                        formControlProps={{fullWidth: true}}
                                        style={{margin: 0}}
                                    >
                                        {tags.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                                    </Field> */}
                                    <Select
                                        label="Remark"
                                        fullWidth={true}
                                        defaultValue={"Value1"}
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
                                {/* <GridItem xs={12}>   
                                    <div className={classes.text}>
                                        Ticket Priority
                                    </div>
                                    <Select
                                        fullWidth={true}
                                        placeholder="Start typing..."
                                        defaultValue={null}
                                        options={statusOptions}
                                    />
                                </GridItem> */}
                                <GridItem xs={6}>
                                    <div className={classes.text}>
                                        Ticket Priority
                                    </div>
                                </GridItem>
                                
                                <GridItem xs={6}>
                                <Grid item className={classes.uploadSection}>
                                    <div className={`picture-container ${classes.organizationUpload}`}>
                                        <div className={`${classes.txtChooseFile}`}>Upload your attachment</div>
                                        <div className={`picture ${classes.pictureContainer}`}>
                                            <img src={imagePreviewUrl} className="picture-src" alt="..."/>
                                            <input type="file" onChange={e => handleImageChange(e)}/>
                                        </div>
                                    </div>
                                </Grid>
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