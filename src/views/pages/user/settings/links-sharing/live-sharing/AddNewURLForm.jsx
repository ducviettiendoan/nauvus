import React from "react";

import ForAssetsForm from "./ForAssetsForm";
import ForLocationForm from "./ForLocationForm";
import ForRecurringRouteForm from "./ForRecurringRouteForm";

const AddNewURLForm = ({dialogValue, handleClose}) => {
  return (
    <>
      {dialogValue === 0 && <ForAssetsForm handleClose={handleClose}/>}
      {dialogValue === 1 && <ForLocationForm handleClose={handleClose} />}
      {dialogValue === 2 && <ForRecurringRouteForm handleClose={handleClose} />}
    </>
  )
}

export default AddNewURLForm;