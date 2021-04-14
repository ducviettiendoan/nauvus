import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import complianceStyle from "../style/complianceStyle";
import CardHeader from "@material-ui/core/CardHeader";
import {Grid} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import CardContent from "@material-ui/core/CardContent";
import RadioButton from "../../../../Components/RadioButton";
import Card from "@material-ui/core/Card";
import PieChart from "components/CustomPieChart/PieChart";

const useStyles = makeStyles(complianceStyle);


export default function PieChartCard(props) {
  const {title, data, radio} = props
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardContent className={classes.chartTop}>
        <Grid container>
          <Grid item xs={6} className={classes.cardBodyTitle1}>
            <RadioButton checked={true} />
            {radio[0]}
          </Grid>

          {radio[1] && <Grid item xs={6} className={classes.cardBodyTitle2}>
            <RadioButton radioColor="default" disabled={true}/>
            {radio[1]}
          </Grid>}
        </Grid>
        <PieChart
          title={title}
          data={data}
          style={{paddingTop: "20px"}}
        />
      </CardContent>

      <CardHeader
          title={
          <Grid container>
              <Grid item xs={8} sm={12} md={8} className={classes.cardHeaderTitle}>
                  {title}
              </Grid>
              <Grid item xs={4} sm={12} md={4} className={classes.cardHeaderSubTitle}>
                  <Link>View Details</Link>
              </Grid>
          </Grid>}

        className={classes.cardHeader}
      />

    </Card>
  )
}
