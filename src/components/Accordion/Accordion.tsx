import { Block, Inline, INLINES } from "@contentful/rich-text-types";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Collapse, Typography } from "@mui/material";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { ReactNode, useState } from "react";
import React from "react";
import MultiButton from "../MultiButton/MultiButton";
import { Paragraph } from "../Paragraph";
import {
  AccordionHeaderContainerStyled,
  ActionButtonStyled,
  CardActionStyled,
  CardContentStyled,
  CardStyled,
  ParagraphStyled,
  ScoreStyled,
  SummaryContainer,
} from "./Accordion.styles";
import { AccordionPropTypes } from "./Accordion-types";

const Accordion = ({
  title,
  type,
  summary,
  scoreAndSeverity,
  description,
  scoreTable,
}: AccordionPropTypes) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node: Block | Inline, children: ReactNode) => {
        const { uri } = node.data;
        return (
          <MultiButton
            version="externalLinkBasic"
            link={uri}
            label={children}
          />
        );
      },
    },
  };

  return (
    <CardStyled square={true}>
      <AccordionHeaderContainerStyled>
        <ParagraphStyled>{title}</ParagraphStyled>
        {summary ? (
          <SummaryContainer>
            <Paragraph>{summary}</Paragraph>
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
        <CardContentStyled sx={{ padding: 0 }}>
          {scoreAndSeverity && <ScoreStyled>{scoreAndSeverity}</ScoreStyled>}
          <Box>{renderRichText(description, options)}</Box>
          {scoreTable && (
            <Typography>
              {type} ({title})
            </Typography>
          )}
          {scoreTable?.map((table) => {
            return <li key={`table-${table}`}>{table}</li>;
          })}
        </CardContentStyled>
      </Collapse>
    </CardStyled>
  );
};

export default Accordion;
