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
  // color: color.purple.two,
  // border: [`2px solid ${color.purple.two}`],
  // backgroundColor: color.purple.four,
  borderRadius: "8px",
  lineHeight: "21.09px",
  letterSpacing: "0.46px",
  fontFamily: "Roboto",
  textTransform: "none",
  textDecorationLine: "none",
  // ":hover": {
  //   backgroundColor: color.purple.three,
  //   border: [`2px solid ${color.purple.two}`],
  // },
  // [`@media(min-width: ${breakpoints.tablet}px)`]: {
  //   width: maxWidths.tablet.buttons,
  // },
  // [`@media(min-width: ${breakpoints.desktop}px)`]: {
  //   width: maxWidths.tablet.buttons,
  // },
};

const generalButtonWidths: Object = {
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    width: maxWidths.tablet.buttons,
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    width: maxWidths.desktop.buttons,
  },
};

const primaryButtonStyles: Object = {
  color: color.white,
  backgroundColor: color.purple.two,
  ":hover": {
    backgroundColor: color.purple.one,
  },
};

const secondaryButtonStyles: Object = {
  color: color.purple.two,
  border: [`2px solid ${color.purple.two}`],
  backgroundColor: color.purple.four,
  ":hover": {
    backgroundColor: color.purple.three,
  },
};

// const tertiaryButtonStyles: Object = {
//   color: color.teal.two,
//   border: [`2px solid ${color.teal.two}`],
//   backgroundColor: color.white,
//   ":hover": {
//     backgroundColor: color.teal.four,

//   }
// };

export const PrimaryStyled = styled(Button)({
  ...generalButtonStyles,
  ...generalButtonWidths,
  ...primaryButtonStyles,
});

export const SecondaryStyled = styled(Button)({
  ...generalButtonStyles,
  ...generalButtonWidths,
  ...secondaryButtonStyles,
});

export const StyledBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
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
  ...generalButtonWidths,
  // ...tertiaryButtonStyles,
  // width: "100%",
  // maxWidth: maxWidths.mobile.buttons,
  margin: "10px 0",
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
  // [`@media(min-width: ${breakpoints.tablet}px)`]: {
  //   maxWidth: maxWidths.tablet.buttons,
  // },
  // [`@media(min-width: ${breakpoints.desktop}px)`]: {
  //   maxWidth: maxWidths.desktop.buttons,
  // },
}));

export const NextAndResultStyled = styled(Button)({
  ...generalButtonStyles,
  ...primaryButtonStyles,
  width: "120px",
  // minHeight: "48px",
  // fontSize: "18px",
  // color: "white",
  // borderRadius: "8px",
  // backgroundColor: color.purple.two,
  // fontFamily: "Roboto",
  // fontWeight: 600,
  // textTransform: "none",
  // ":hover": {
  //   backgroundColor: color.purple.one,
  // },
  alignSelf: "end",
  // [`@media(min-width: ${breakpoints.tablet}px)`]: {
  //   width: "172px",
  // },
  // [`@media(min-width: ${breakpoints.desktop}px)`]: {
  //   width: "172",
  // },
});

export const PreviousStyled = styled(Button)({
  ...generalButtonStyles,
  width: "55px",
  // height: "48px",
  fontSize: "14px",
  marginRight: "28px",
  color: color.purple.two,
  // borderRadius: "8px",
  // fontFamily: "Roboto",
  fontWeight: 500,
  // textTransform: "none",
  textDecorationLine: "underline",
  ":hover": {
    textDecorationLine: "underline",
  },
  // [`@media(min-width: ${breakpoints.tablet}px)`]: {
  //   width: "55px",
  // },
  // [`@media(min-width: ${breakpoints.desktop}px)`]: {
  //   width: "55",
  // },
});

export const NavButtonStyled = styled(Button)({
  ...generalButtonStyles,
  width: "fit-content",
  color: color.purple.two,
  // fontFamily: "Roboto",
  fontWeight: 500,
  fontSize: "14px",
  letterSpacing: "0.1px",
  lineHeight: "16.41px",
  // height: "48px",
  padding: "0",
  margin: "0",
  // textTransform: "none",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: "0.15px",
    margin: "0",
  },
});

export const ResultsPageSmallStyled = styled(Button)({
  ...generalButtonStyles,
  ...secondaryButtonStyles,
  width: "100%",
});

export const ResultsPageLeftLinkStyled = styled(Link)({
  textDecoration: "none",
  flex: 1,
  marginRight: "8px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginRight: "12px",
  },
});

export const ResultsPageRightLinkStyled = styled(Link)({
  textDecoration: "none",
  flex: 1,
  marginLeft: "8px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginRight: "12px",
  },
});

export const PhoneNumberStyled = styled(MuiLink, {
  shouldForwardProp: (prop) => preventDomList(prop),
})<PhoneNumberStyledProps>((props) => ({
  ...generalButtonStyles,
  background: props.type === "dark" ? color.purple.two : color.purple.four,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: props.type === "dark" ? color.white : color.purple.two,
  // height: 40,
  marginBottom: 32,
  padding: 0,
  border: props.type === "dark" ? "none" : `2px solid ${color.purple.two}`,
  ":hover": {
    backgroundColor:
      props.type === "dark" ? color.purple.one : color.purple.three,
    border: props.type === "dark" ? "none" : [`2px solid ${color.purple.two}`],
    color: props.type === "dark" ? color.white : color.purple.two,
  },
  ...generalButtonWidths,
}));

export const ExternalLinkStyled = styled(MuiLink)({
  ...generalButtonStyles,
  ...generalButtonWidths,
  ...primaryButtonStyles,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
});

export const AllArticlesStyled = styled(Link)``;
