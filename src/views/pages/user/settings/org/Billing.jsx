import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Summary from "./billing/Summary";
import Invoice from "./billing/Invoice";

const styles = {
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
};

const useStyles = makeStyles(styles);

export default function Billing() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer className={classes.topHeader}>
            <GridItem xs={12} sm={12} md={12} className={classes.topHeaderTitle}>
              <RoundedTabs tabs={["Summary", "Invoice"]} tabValue={handleChangeTab}/>
              { value === 0 && <Summary />}
              { value === 1 && <Invoice />}
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
