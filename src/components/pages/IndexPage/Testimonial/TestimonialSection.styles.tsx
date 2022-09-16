import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const ContainerStyled = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  boxSizing: "border-box",
  width: "343px",
  height: "500px",
  padding: "40px",
  backgroundColor: "#ECECEC",
  margin: "0",
});

export const BoxStyled = styled(Box)({
  margin: "10px",
  lineHeight: "30px",
  fontFamily: "sans-serif",
});
