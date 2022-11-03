import { TabList } from "@mui/lab";
import { styled } from "@mui/system";
import { color } from "../../styles/theme";

export const TabsListStyled = styled(TabList)({
  ".MuiTabs-flexContainer": {
    width: "100%",
    justifyContent: "space-around",
  },
  ".MuiTabs-indicator": {
    backgroundColor: color.teal.two,
    height: "100%",
    borderRadius: "4px 4px 0 0",
  },
  ".MuiTab-root": {
    flex: 1,
    textTransform: "none",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "0.1px",
    color: color.gray.one,
    fontWeight: 500,
    padding: "7px 24px",
    minHeight: "30px",
    transition: "color 0s linear .10s",
    zIndex: 1,
  },
  ".MuiTab-root.Mui-selected": {
    color: color.white,
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
