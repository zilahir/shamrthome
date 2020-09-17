import { Grid } from "@material-ui/core";
import React, { ReactElement } from "react";

import TrainSchedule from "../Train";
import Welcome from "../Welcome";
import Meta from "../Meta";
import News from "../common/News";
import Lamps from "../Lights";

const Root = (): ReactElement => (
  <>
    <Grid container>
      <Grid item lg={9}>
        <Welcome />
        <Meta />
        <Grid container>
          <News />
          <Lamps />
        </Grid>
      </Grid>
      <Grid item lg>
        <TrainSchedule />
      </Grid>
    </Grid>
  </>
);

export default Root;