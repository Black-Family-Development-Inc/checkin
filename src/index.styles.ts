import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "gatsby";

export const LinkStyled = styled(Link)({
  display: "flex",
  alignItems: "center",
  margin: "10px",
  textDecoration: "none",
  width: "300px",
});

export const ButtonStyled = styled(Button)({
  width: "300px",
});
