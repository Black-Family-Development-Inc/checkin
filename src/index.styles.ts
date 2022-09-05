import { makeStyles } from "@material-ui/core";
//This files is out of "pages" dir to prevent index.styles.ts from becoming a route

const useStyles = makeStyles(() => ({
  link: {
    display: "flex",
    alignItems: "center",
    margin: "10px",
    textDecoration: "none",
    width: "300px",
  },
  button: {
    width: "300px",
  },
}));

export default useStyles;
