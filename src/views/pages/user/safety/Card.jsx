import { Grid } from "@material-ui/core";
import React , {useState} from "react";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NightTime from '../../../../assets/img/images.png'
import Button from "@material-ui/core/Button"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import StarIcon from '@material-ui/icons/Star';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from "@material-ui/core/Select";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

const styles = {
    selectForm: {
        width: "108px",
        height: "44px",
        background: "#FFFFFF",
        boxSizing: "border-box",
        borderRadius: "20px",
        "&::before": {
          borderBottom: "0px"
        },
        "& > select:focus": {
          backgroundColor: "#FFFFFF"
        },
        "&:hover": {
          borderBottom: "0px"
        },
        marginRight: 8
      }
}

const Card = () => {
    const preventDefault = (event) => event.preventDefault();
    const [isFavorite, setIsFavorite] = useState(false);
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    let star = isFavorite ? 
    <StarIcon color="disabled" 
    onClick={()=>{
        setIsFavorite(prev => !prev)}
    }
    style={{cursor: "pointer"}}
    />
    : 
    <StarBorderIcon color="disabled"
     onClick={()=>{
        setIsFavorite(prev => !prev)}
    }
    style={{cursor: "pointer"}}
    />  
  return (
    <div className="safety-card">
      <Grid container spacing={3}>
        <Grid item xs={3} >
            <Grid container spacing ={3}>
                <Grid item xs={1}>
                    {star}
                </Grid>

                <Grid item xs={11}>
                    <img style={{width: "100%"}} src={NightTime} alt="picture"/>
                </Grid>

            </Grid>
        </Grid>
        <Grid item xs={5} style={{textAlign: "left", paddingTop: "12px"}}>
            <div>
                <FiberManualRecordIcon style={{color: "#F4BE5E", fontSize: 17}} /> 
                <b><span style={{color: "#25345C", fontSize: "18px"}}> Crash</span> <span style={{color: "#C4C4C4", fontSize: "18px"}}>2.10G</span></b>
            </div>
            <div className = "content">
                <div>Jun 24, 2020 4:06 Am EOT</div>
                <div>229  Alexandr Fedyachkin</div>
            </div>

            <Button variant="contained" size="large" className="driverButton safety-button">
                Drivers, Own
            </Button>

        </Grid>
        <Grid item xs={4}>
            <Grid container>
                <Grid item xs={12} className="sideButton">
                    <Link href="#" onClick={preventDefault} className="dismissButton">
                        Dismiss
                    </Link>
                    <span style={{paddingLeft: "40px"}}></span>
                    <FormControl variant="outlined">
                        <Select style={{color: "#C4C4C4"}}
                        native
                        value={"1"}
                        // onChange={handleChange}
                        // label="Age"
                        className={classes.selectForm}
                        >
                        <option value={1}>Review</option>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
