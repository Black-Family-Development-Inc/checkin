import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

export type AccordionPropTypes = {
  title: string;
  summary?: string;
  body: string;
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  assessmentScore?: number;
  assessmentSeverity?: string;
};
