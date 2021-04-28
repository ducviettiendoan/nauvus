import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import defaultImage from "assets/img/Upload.png";
import Button from "components/CustomButtons/Button"
import AddIcon from "components/Icons/AddIcon"

const styles = {
  ImageUploadV1: {
    height: "206px",
    border: "1px dashed #25345C",
    boxSizing: "border-box",
    borderRadius: "12px",
    background: "rgba(37, 52, 92, 0.05)",
  },
  pictureContainer: {
    height: "56px !important",
    margin: "66px auto 0 auto !important",
    backgroundColor: "transparent !important",
    border: "none !important",
    borderRadius: "0 !important",
  },
  txtChooseFile: {
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    textDecorationLine: "underline",
    color: "#25345C",
  },
  addIcon: {
    background: "#25345C",
    width: 42,
  },
};

const useStyles = makeStyles(styles);

export default function ImageUploadV1() {
  const classes = useStyles();

  const [file, setFile] = React.useState(null);
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
  const handleSubmit = e => {
    e.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  };
  return (
    <div className={`picture-container ${classes.ImageUploadV1}`}>
      <div className={`picture ${classes.pictureContainer}`}>
        <Button
          round
          justIcon
          className={classes.addIcon}
        >
          <AddIcon />
        </Button>
        <input type="file" onChange={e => handleImageChange(e)} />
      </div>
      <div className={`${classes.txtChooseFile}`}>Add a photo</div>
    </div>
  );
}
