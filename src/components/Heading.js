import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CommonData from "../shared/CommonData";

import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // justifyContent: "center",
    // flexWrap: "wrap",
    // "& > *": {
    //   padding: theme.spacing(2),
    // },
    maxWidth: "97%",
    margin: "auto"
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container m={2} justify="space-between">
        <Grid item xs={6}>
          <Typography variant="h4" component="h4">
            {CommonData.name}
          </Typography>
          <Typography variant="h6" component="h6">
            {CommonData.designation}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="row-reverse">
            <Avatar
              alt="Aklesh Sakunia"
              className={classes.large}
              src="aklesh-cropped-min.jpg"
            />
          </Grid>
        </Grid>
        <hr width="60%" size={2} color="#fff" />
        <Grid container justify="center">
          <Typography variant="body2" component="span" align="center">
            <span className="material-icons">work</span>
            {CommonData.motto}
          </Typography>
        </Grid>
        <Grid container justify="space-evenly">
          <Typography variant="body2" component="span">
            <span className="material-icons">email</span>
            {CommonData.email}
          </Typography>
          <Typography variant="body2" component="span">
            <span className="material-icons">phone_enabled</span>
            {CommonData.phoneNumber}
          </Typography>
          <Typography variant="body2" component="span">
            <span className="material-icons">location_on</span>
            {CommonData.location}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
