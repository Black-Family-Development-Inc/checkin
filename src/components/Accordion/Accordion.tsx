import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Collapse } from "@mui/material";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import * as React from "react";
import { Paragraph } from "../Paragraph";
import {
  AccordionHeaderContainerStyled,
  ActionButtonStyled,
  CardActionStyled,
  CardContentStyled,
  CardStyled,
  ParagraphStyled,
  SummaryContainer,
} from "./Accordion.styles";
import { AccordionPropTypes } from "./Accordion-types";

export default function Accordion(props: AccordionPropTypes) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardStyled square={true}>
      <AccordionHeaderContainerStyled>
        <ParagraphStyled>{props.title}</ParagraphStyled>
        {props.summary ? (
          <SummaryContainer>
            <Paragraph>{props.summary}</Paragraph>
          </SummaryContainer>
        ) : (
          ""
        )}
        <CardActionStyled>
          <ActionButtonStyled onClick={handleExpandClick}>
            {expanded ? (
              <ExpandLessIcon aria-expanded={expanded} aria-label="show more" />
            ) : (
              <ExpandMoreIcon aria-expanded={expanded} aria-label="show less" />
            )}
          </ActionButtonStyled>
        </CardActionStyled>
      </AccordionHeaderContainerStyled>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContentStyled>
          {props.children}
          <Box>{renderRichText(props.description)}</Box>
        </CardContentStyled>
      </Collapse>
    </CardStyled>
  );
}
