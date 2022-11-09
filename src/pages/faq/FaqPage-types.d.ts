import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

export type FaqPagePropTypes = {
  contentfulFaqPage: ContentfulFaqPage;
};

export type ContentfulFaqPage = {
  title: string;
  subHeader: FaqSubHeader;
  faqAccordion: FaqAccordion[];
};

export type FaqSubHeader = {
  subHeader: string;
};

export type FaqAccordion = {
  id: string;
  title: string;
  body: FaqAccordionBody;
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
};
