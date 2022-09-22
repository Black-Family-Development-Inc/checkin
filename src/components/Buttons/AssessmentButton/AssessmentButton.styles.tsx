import { Button, ButtonGroup } from "@mui/material";
import { styled } from "@mui/system";

type ButtonStyledProps = {
  currentanswer: string;
  answer: string;
};

export const AssessmentButtonStyled = styled(Button)<ButtonStyledProps>(
  (props) => ({
    padding: 10,
    margin: 10,
    width: "343px",
    ":hover": {
      backgroundColor:
        props.currentanswer === props.answer ? "#b8b4b7" : "#E6E1E5",
      cursor: "pointer",
      border: "2px solid black",
    },
    fontSize: "15px",
    color: "black",
    borderRadius: "8px",
    backgroundColor:
      props.currentanswer === props.answer ? "#b8b4b7" : "#E6E1E5",
    border: "2px solid black",
    fontFamily: "roboto",
    textTransform: "none",
  }),
);

export const ButtonGroupStyled = styled(ButtonGroup)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100vw",
});

export const ButtonStyled = styled(Button)({
  padding: 10,
  margin: 20,
  width: "343px",
  ":hover": {
    background: "none",
  },
  fontWeight: "bold",
  fontSize: "15px",
  color: "black",
});
