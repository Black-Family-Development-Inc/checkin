import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const ButtonStyled = styled(Button)({
  padding: 10,
  margin: 20,
  width: "343px",
  ":hover": {
    background: "none",
  },
  color: "black",
  fontWeight: "bold",
  fontSize: "15px",
});
