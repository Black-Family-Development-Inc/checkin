import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const ContainerStyled = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  boxSizing: "border-box",
  width: "343px",
  height: "384px",
  padding: "102px 48px",
  backgroundColor: "rgba(0, 0, 0, 0.8);",
  margin: "0",
  position: "relative",
  marginTop: "11px",
  marginBottom: "36px",
  "@media(max-width: 375px)": {
    width: "100%",
  },
});

export const BoxStyled = styled(Box)({
  margin: "0px",
  lineHeight: "20px",
  fontSize: "16px",
  fontFamily: "'Times New Roman', Times, serif",
  fontStyle: "italic",
  color: "#fff",
  marginBottom: "10px",
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
