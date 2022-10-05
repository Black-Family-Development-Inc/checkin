import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const UniversalBottomHeader = styled("h4")({
  fontSize: "26px",
  marginBottom: "12px",
  fontFamily: "Roboto, Inter",
  "&:after": {
    content: '""',
    width: "80px",
    height: "4px",
    background: "#000",
    display: "block",
    borderRadius: "10px",
    marginTop: "8px",
  },
});

export const ButtonContainerStyled = styled(Box)({
  marginTop: "36px",
  marginBottom: "66px",
});

export const UniversalBottomSubHeader = styled("p")({
  fontSize: "16px",
  marginBottom: "36px",
});
