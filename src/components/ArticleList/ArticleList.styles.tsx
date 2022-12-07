import styled from "@emotion/styled";
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { breakpoints } from "../../styles/theme";

export const ListStyled = styled(List)({
  padding: 0,
});

export const LinkStyled = styled(Link)({
  color: "#212121",
  textDecoration: "none",
});

export const ListItemStyled = styled(ListItem)({
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: 0,
  margin: "16px 0",
});

export const ListItemIconStyled = styled(ListItemIcon)({
  marginTop: "3px",
  marginRight: "12px",
  minWidth: 0,
});

export const ListItemTextStyled = styled(ListItemText)({
  margin: 0,
  span: {
    fontWeight: 700,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "16px",
    lineHeight: "19px",
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
      fontSize: "18px",
      lineHeight: "21px",
    },
  },
  p: {
    fontSize: "14px",
    lineHeight: "16px",
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
      fontSize: "16px",
      lineHeight: "19px",
    },
  },
});
