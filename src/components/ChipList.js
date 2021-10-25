import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  textColor: {
    color: blue[600],
  }
}));

export default (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" element="h6" className={classes.textColor}>
        Key Skills :
      </Typography>
      {props.data.map((val, idx) => (
        <Chip key={idx} label={val} variant="outlined" />
      ))}
    </div>
  );
};
