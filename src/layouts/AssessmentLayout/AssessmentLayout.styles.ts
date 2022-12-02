import styled from "@emotion/styled";
import { Box, FormControl } from "@mui/material";
import { color } from "../../styles/theme";

export const AssessmentLayoutContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
  background: color.teal.five,
});

export const NavButtonContainerStyled = styled(Box)({
  width: "100%",
});

export const StyledFormControl = styled(FormControl)({
  width: "100%",
});
