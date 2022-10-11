import styled from "@emotion/styled";
import { Link } from "@mui/material";

export const LinkStyled = styled(Link)({
  fontWeight: 500,
  color: "black",
  textDecorationColor: "black",
  ":hover": {
    color: "green",
  },
  ":active": {
    color: "blue",
  },
});
