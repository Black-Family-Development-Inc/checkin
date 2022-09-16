export type FaqPagePropTypes = {
  contentfulFaqPage: ContentfulFaqPage;
};

export type ContentfulFaqPage = {
  title: string;
  faqAccordion: FaqAccordion[];
};

export type FaqAccordion = {
  title: string;
  childContentfulAccordionBodyTextNode: FaqAccordionBody;
};

export type FaqAccordionBody = {
  body: string;
};
