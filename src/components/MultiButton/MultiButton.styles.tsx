import { Box, Button, Link as MuiLink } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "gatsby";
import { breakpoints, color, maxWidths } from "../../styles/theme";
import { AnswerStyledProps, PhoneNumberStyledProps } from "./MultiButton-types";

const generalButtonStyles: Object = {
  width: maxWidths.mobile.buttons,
  minHeight: "48px",
  fontSize: "18px",
  fontWeight: 600,
  color: color.purple.two,
  border: [`2px solid ${color.purple.two}`],
  backgroundColor: color.purple.four,
  borderRadius: "8px",
  lineHeight: "21.09px",
  letterSpacing: "0.46px",
  fontFamily: "Roboto",
  textTransform: "none",
  textDecorationLine: "none",
  ":hover": {
    backgroundColor: color.purple.three,
    border: [`2px solid ${color.purple.two}`],
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    width: maxWidths.tablet.buttons,
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    width: maxWidths.tablet.buttons,
  },
};

export const StyledBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export const AssessmentStyled = styled(Button)({
  ...generalButtonStyles,
});

export const UniversalStyled = styled(Button)({
  ...generalButtonStyles,
  color: color.white,
  backgroundColor: color.purple.two,
  ":hover": {
    backgroundColor: color.purple.one,
  },
});

export const LinkStyled = styled(Link)({
  display: "flex",
  justifyContent: "center",
  textDecoration: "none",
});

const preventDomList = (prop: string | number | symbol) =>
  prop !== "label" &&
  prop !== "usersCurrentAnswer" &&
  prop !== "light" &&
  prop !== "dark";

export const AnswerStyled = styled(Button, {
  shouldForwardProp: (prop) => preventDomList(prop),
})<AnswerStyledProps>((props) => ({
  ...generalButtonStyles,
  width: "100%",
  maxWidth: maxWidths.mobile.buttons,
  margin: "8px 0",
  color:
    props.usersCurrentAnswer === props.label ? color.white : color.teal.one,
  border:
    props.usersCurrentAnswer === props.label
      ? "0"
      : `2px solid ${color.teal.two}`,
  backgroundColor:
    props.usersCurrentAnswer === props.label ? color.teal.one : color.white,
  ":hover": {
    backgroundColor:
      props.usersCurrentAnswer === props.label
        ? color.teal.one
        : color.teal.four,
    border:
      props.usersCurrentAnswer === props.label
        ? "0"
        : `2px solid ${color.teal.two}`,
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    maxWidth: maxWidths.tablet.buttons,
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    maxWidth: maxWidths.desktop.buttons,
  },
}));

export const NextAndResultStyled = styled(Button)({
  width: "120px",
  minHeight: "48px",
  fontSize: "18px",
  color: "white",
  borderRadius: "8px",
  backgroundColor: color.purple.two,
  fontFamily: "Roboto",
  fontWeight: 600,
  textTransform: "none",
  ":hover": {
    backgroundColor: color.purple.one,
  },
  alignSelf: "end",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    width: "172px",
  },
});

export const PreviousStyled = styled(Button)({
  width: "55px",
  height: "48px",
  fontSize: "14px",
  marginRight: "28px",
  color: color.purple.two,
  borderRadius: "8px",
  fontFamily: "Roboto",
  fontWeight: 500,
  textTransform: "none",
  textDecorationLine: "underline",
  ":hover": {
    textDecorationLine: "underline",
  },
});

export const NavButtonStyled = styled(Button)({
  color: color.purple.two,
  display: "flex",
  alignItems: "flex-start",
  fontFamily: "Roboto",
  fontWeight: 500,
  fontSize: "14px",
  letterSpacing: "0.1px",
  lineHeight: "16px",
  height: "48px",
  padding: "0",
  margin: "0",
  textTransform: "none",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: "0.15px",
    margin: " 0",
  },
});

export const ResultsPageSmallStyled = styled(Button)({
  ...generalButtonStyles,
  width: "162px",
});

export const PhoneNumberStyled = styled(MuiLink, {
  shouldForwardProp: (prop) => preventDomList(prop),
})<PhoneNumberStyledProps>((props) => ({
  ...generalButtonStyles,
  background: props.type === "dark" ? "black" : "#E6E1E5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: props.type === "dark" ? "white" : "black",
  height: 40,
  marginBottom: 32,
  padding: 0,
}));

export const ExternalLinkStyled = styled(MuiLink)({
  ...generalButtonStyles,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  color: "white",
  backgroundColor: "black",
});

export const AllArticlesStyled = styled(Link)``;
