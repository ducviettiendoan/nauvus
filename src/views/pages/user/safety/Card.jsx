import { Grid } from "@material-ui/core";
import React , {useState} from "react";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NightTime from '../../../../assets/img/images.png'
import Button from "@material-ui/core/Button"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import StarIcon from '@material-ui/icons/Star';


const Card = () => {
    const preventDefault = (event) => event.preventDefault();
    const [isFavorite, setIsFavorite] = useState(false);

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
        <Grid item xs={0.5}>
            {star}
        </Grid>
        <Grid item xs={4}>
          <img style={{width: "100%"}} src={NightTime} alt=""/>
        </Grid>
        <Grid item xs={4} style={{textAlign: "left"}}>
            <div>
                <FiberManualRecordIcon style={{color: "#F4BE5E", fontSize: 10}} /> 
                <b><span style={{color: "#25345C"}}> Crash</span> <span style={{color: "#C4C4C4"}}>2.10G</span></b>
            </div>
            <div className = "content" style={{color: "#C4C4C4", marginTop: "10px", marginBottom: "20px"}}>
                <div>Jun 24, 2020 4:06 Am EOT</div>
                <div>229  Alexandr Fedyachkin</div>
            </div>

           
            <Button variant="contained" size="large" className="liveButton safety-button">
                Drivers, Own
            </Button>

        </Grid>
        <Grid item xs={3}>
            <Grid container>
                <Grid item xs={12} style={{textAlign: "right"}}>
                    <Link href="#" onClick={preventDefault} className="dismissButton">
                        Dismiss
                    </Link>
                    <span style={{paddingLeft: "40px"}}></span>
                    <Button className="reviewButton safety-button"><ExpandMoreIcon/> Review</Button>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
