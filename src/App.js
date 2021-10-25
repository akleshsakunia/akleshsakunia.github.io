import "./App.css";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { blue } from "@material-ui/core/colors";

import Section from "./components/Section";
import SectionalData from "./shared/SectionalData";
import ChipList from "./components/ChipList";
import Heading from "./components/Heading";
import CommonData from "./shared/CommonData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerMargin: {
    margin: "0.25rem",
  },
  paper: {
    padding: theme.spacing(2),
  },
  large: {
    margin: theme.spacing(2),
    width: "80%",
    height: "auto",
  },
  headingBackground: {
    padding: theme.spacing(2),
    backgroundColor: blue[800],
    color: "#fff",
  },
  margin: {
    
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="classes.root">
      <Grid container>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.headingBackground} elevation={3}>
              <Heading />
            </Paper>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={3}>
              <ChipList data={CommonData.skills} />
            </Paper>
          </Grid>
        </Grid>

        <Grid container justify="space-evenly">
          <Grid item xs={11} md={5}>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={3}>
                <Section data={SectionalData["WORK EXPERIENCE"]} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={3}>
                <Section data={SectionalData["EDUCATION"]} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={3}>
                <Section data={SectionalData["ACHIEVEMENTS"]} />
              </Paper>
            </Grid>
          </Grid>

          <Grid item xs={11} md={5}>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={3}>
                <Section data={SectionalData["PROJECTS"]} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
