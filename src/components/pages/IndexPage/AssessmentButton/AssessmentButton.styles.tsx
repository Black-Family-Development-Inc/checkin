import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "gatsby";

export const LinkStyled = styled(Link)({
  display: "flex",
  alignItems: "center",
  margin: "10px",
  width: "320px",
  height: "44px",
  textDecoration: "none",
  borderRadius: "8px",
  backgroundColor: "#E6E1E5",
  border: "2px solid black",
});

export const AssessmentButtonStyled = styled(Button)({
  padding: 10,
  margin: 20,
  width: "343px",
  ":hover": {
    background: "none",
  },
  fontWeight: "bold",
  fontSize: "15px",
  color: "black",
});
