import { Grid } from "@material-ui/core";
import React, { ReactElement } from "react";

import TrainSchedule from "../Train";
import Welcome from "../Welcome";
import Meta from "../Meta";

const Root = (): ReactElement => (
  <>
    <Grid container>
      <Grid item lg={9}>
        <Welcome />
        <Meta />
      </Grid>
      <Grid item lg>
        <TrainSchedule />
      </Grid>
    </Grid>
  </>
);

export default Root;
