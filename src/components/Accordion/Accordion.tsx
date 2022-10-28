import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, CardActions, CardContent, Collapse } from "@mui/material";
import * as React from "react";
import { Paragraph } from "../Paragraph";
import {
  AccordionHeaderContainerStyled,
  CardStyled,
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
        <Paragraph sx={{ fontWeight: 700, margin: "31px 0 31px 16px" }}>
          {props.title}
        </Paragraph>
        {props.summary && (
          <SummaryContainer>
            <Paragraph>{props.summary}</Paragraph>
          </SummaryContainer>
        )}
        <CardActions>
          <Button onClick={handleExpandClick}>
            {expanded ? (
              <ExpandLessIcon aria-expanded={expanded} aria-label="show more" />
            ) : (
              <ExpandMoreIcon aria-expanded={expanded} aria-label="show less" />
            )}
          </Button>
        </CardActions>
      </AccordionHeaderContainerStyled>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {props.assessmentScore && props.assessmentSeverity && (
            <Paragraph>
              Score: {props.assessmentScore} {props.assessmentSeverity}
              -Symptoms
            </Paragraph>
          )}
          <Paragraph>{props.body}</Paragraph>
        </CardContent>
      </Collapse>
    </CardStyled>
  );
}
