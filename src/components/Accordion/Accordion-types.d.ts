import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

export type AccordionPropTypes = {
  title?: string;
  type?: string;
  summary?: string;
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  assessmentScore?: number;
  assessmentSeverity?: string;
  scoreTable?: string[];
  scoreAndSeverity?: string;
  path?: string;
};
