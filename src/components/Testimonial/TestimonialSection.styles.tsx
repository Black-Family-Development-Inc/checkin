import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { breakpoints, color } from "../../styles/theme";

export const ContainerStyled = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  boxSizing: "border-box",
  height: "384px",
  padding: "102px 48px",
  backgroundColor: color.purple.four,
  margin: "0",
  position: "relative",
  marginTop: "11px",
  marginBottom: "36px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    height: 310,
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    height: 296,
  },
});

export const BoxStyled = styled(Box)({
  margin: "0px",
  lineHeight: "20px",
  fontSize: "16px",
  fontStyle: "italic",
  color: color.gray.one,
  marginBottom: "10px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: 18,
  },
});

export const ImageStyled = styled("img")({
  position: "absolute",
  top: "0",
  left: "0",
  width: "auto",
  "@media(max-width: 340px)": {
    width: "30%",
  },
});
