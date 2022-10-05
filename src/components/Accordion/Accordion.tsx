import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Typography,
} from "@mui/material";
import * as React from "react";
import { AccordionHeaderContainerStyled, CardStyled } from "./Accordion.styles";
import { AccordionPropTypes } from "./Accordion-types";

export default function Accordion(props: AccordionPropTypes) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardStyled square={true}>
      <AccordionHeaderContainerStyled>
        <CardHeader title={props.title} />
        {props.summary && <Typography paragraph>{props.summary}</Typography>}
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
            <Typography paragraph>
              Score: {props.assessmentScore} [{props.assessmentSeverity}
              -Symptoms]
            </Typography>
          )}
          <Typography paragraph>{props.body}</Typography>
        </CardContent>
      </Collapse>
    </CardStyled>
  );
}
