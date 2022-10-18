import styled from "@emotion/styled";
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const ListStyled = styled(List)({
  marginBottom: 38,
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
});

export const ListItemIconStyled = styled(ListItemIcon)({
  marginTop: 4,
  marginRight: 8,
  minWidth: 0,
});

export const ListItemTextStyled = styled(ListItemText)({
  span: {
    fontWeight: 700,
  },
  p: {
    fontSize: 14,
  },
});
