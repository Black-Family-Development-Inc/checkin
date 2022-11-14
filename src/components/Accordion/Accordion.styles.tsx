import styled from "@emotion/styled";
import { Box, Button, Card, CardActions, CardContent } from "@mui/material";
import { breakpoints, color } from "../../styles/theme";
import { Paragraph } from "../Paragraph";

export const CardStyled = styled(Card)({
  boxShadow:
    "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
  marginBottom: "16px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginBottom: "24px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    marginBottom: "32px",
  },
});

export const AccordionHeaderContainerStyled = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const SummaryContainer = styled(Box)({
  display: "flex",
  minWidth: "118px",
  opacity: "0.6",
  padding: "12px 0px",
  p: {
    color: color.gray.two,
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    minWidth: "332px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    minWidth: "380px",
  },
});

export const ParagraphStyled = styled(Paragraph)({
  margin: "12px 0px 12px 16px",
  color: color.purple.two,
  fontWeight: "700",
  lineHeight: "18px",
  minWidth: "96.5px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    margin: "12px 0px 15px 16px",
    minWidth: "147.5px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    minWidth: "240px",
  },
});

export const CardActionStyled = styled(CardActions)({
  padding: "0px",
  marginRight: "16px",
  svg: {
    fill: "#000",
  },
});
export const ActionButtonStyled = styled(Button)({
  minWidth: "48px",
  height: "48px",
});

export const CardContentStyled = styled(CardContent)({
  padding: "24px 16px",
  p: {
    margin: "0px 0px 15px 0px",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "18.75px",
    letterSpacing: "0.15px",
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
      fontSize: "18px",
      lineHeight: "21.09px",
    },
  },
});
