import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import defaultImage from "assets/img/Upload.png";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";
import Grid from '@material-ui/core/Grid';
import CustomTextArea from "components/CustomTextArea/CustomTextArea";
import InputLabel from "@material-ui/core/InputLabel";

const styles = {
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
const useStyle = makeStyles(styles)
export default function FormFeedBack(props) {
    const classes = useStyle();
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
                render={({ handleSubmit, reset, submitting, pristine, values })=>{
                    return(
                        <form>
                            <GridContainer justify="space-between">
                                <GridItem xs={12} className={classes.formRow}>
                                    <div className={classes.text}>
                                        Feedback
                                    </div>
                                    <Field
                                        className={classes.textarea}
                                        fullWidth={true}
                                        required
                                        name="serialNumbers"
                                        placeholder="Start typing..."
                                        component={CustomTextArea}
                                    />
                                </GridItem>
                                <GridItem xs={12}>
                                    <div className={classes.text}>
                                        Attachments      
                                    </div>
                                </GridItem>
                                <GridItem xs={12}>
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
                                <GridItem xs={12}>
                                    <p>This feedback goes directly to Samsara's product team. For technical support,visit our support page.</p>
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