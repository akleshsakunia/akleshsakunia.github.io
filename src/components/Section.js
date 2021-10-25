import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  ulStyle: {
    listStyle: "square outside none",
  },
  headingStyle: {
    fontSize: 20,
    fontWeight: 500,
    color: blue[600],
  },
  subHeadingStyle: {
    fontSize: 16,
    color: blue[600],
  },
}));

export default (props) => {
  const classes = useStyles();

  const sectionElement = props.data;
  return (
    <>
      <Box className={classes.headingStyle}>{sectionElement.heading}</Box>
      <hr size="2" color={blue[600]} />
      {sectionElement.content.map((val, idx) => (
        <div key={idx}>
          {val.subHeading && (
            <Box className={classes.subHeadingStyle} pl="1rem">
              {val.subHeading}
            </Box>
          )}
          <ul className={classes.ulStyle}>
            {val.innerContent.map((val, idx) => (
              <li key={idx}>{val}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
