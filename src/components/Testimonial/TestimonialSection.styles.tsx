import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { breakpoints, color } from "../../styles/theme";

export const ContainerStyled = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  boxSizing: "border-box",
  height: 371,
  padding: "77px 48px 36px",
  backgroundColor: color.purple.four,
  margin: "0",
  position: "relative",
  marginTop: "56px",
  marginBottom: "56px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    height: 310,
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    height: 296,
  },
});

export const BoxStyled = styled(Box)({
  color: color.gray.one,
  fontSize: "16px",
  lineHeight: "18.75px",
  margin: "0px",
  marginBottom: "10px",
  textAlign: "center",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: 18,
  },
});

export const ImageStyled = styled("img")({
  position: "absolute",
  top: "0",
  left: "0",
  width: "auto",
});
