import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import APITraffic from "./developer-metrics/APITraffic";
import WebhookTraffic from "./developer-metrics/WebhookTraffic";
import RequestDetails from "./developer-metrics/RequestDetails";


const styles = {
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
  },
};

const useStyles = makeStyles(styles);

export default function DeveloperMetrics() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [isShowDetail, setIsShowDetail] = React.useState(false);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  const onShowDetail = () => {
    setIsShowDetail(true);
  }

  const onBackApiTraffic = () => {
    setValue(0);
    setIsShowDetail(false);
  }

  return (
    <GridContainer className="developer-metric-wrapper">
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            {isShowDetail ?
              <RequestDetails onBack={onBackApiTraffic}/>
              :
              <>
                <GridContainer className={classes.topHeader}>
                  <GridItem xs={12} sm={12} md={12} xl={12} className={classes.topHeaderTitle}>
                    <RoundedTabs tabs={["API Traffic", "Webhook Traffic"]} tabValue={handleChangeTab}/>
                  </GridItem>
                </GridContainer>
                {value === 0 && <APITraffic onShowDetail={onShowDetail}/>}
                {value === 1 && <WebhookTraffic/>}
              </>
            }
          </GridItem>
        </GridContainer>
      </GridItem>
      <GridItem>
      </GridItem>
    </GridContainer>
  );
}
