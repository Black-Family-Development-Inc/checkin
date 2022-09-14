import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Typography,
} from "@mui/material";
import * as React from "react";
import { AccordionPropTypes } from "./Accordion-types";

export default function Accordion(props: AccordionPropTypes) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={props.title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions>
        {expanded ? (
          <ExpandLessIcon
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          />
        ) : (
          <ExpandMoreIcon
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show less"
          />
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.body}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
