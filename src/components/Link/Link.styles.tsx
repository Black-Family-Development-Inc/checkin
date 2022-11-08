import styled from "@emotion/styled";
import { Link as ExternalLink } from "@mui/material";
import { Link as InternalLink } from "gatsby";

const linkStyles = {
  fontWeight: 500,
  color: "black",
  textDecorationColor: "black",
  ":hover": {
    color: "green",
  },
  ":active": {
    color: "blue",
  },
};

export const InternalLinkStyled = styled(InternalLink)({
  ...linkStyles,
});

export const ExternalLinkStyled = styled(ExternalLink)({
  ...linkStyles,
});
