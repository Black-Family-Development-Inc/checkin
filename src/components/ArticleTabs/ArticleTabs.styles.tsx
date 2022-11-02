import { Tabs } from "@mui/material";
import { styled } from "@mui/system";
import { color } from "../../styles/theme";

export const TabsContainerStyled = styled(Tabs)({
  ".css-heg063-MuiTabs-flexContainer": {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
  },
});

export const TabHRStyled = styled("hr")({
  margin: 0,
  padding: 0,
  width: "100%",
  height: "1px",
  background: color.teal.two,
  borderStyle: "none",
  borderWidth: 0,
});
