export type IndexPageTypes = {
  contentfulHomePage: ContentfulHomePage;
  allContentfulAssessments: AllContentfulAssessment;
};

export type ContentfulHomePage = {
  introSectionHeader: string;
  introSectionSubheader: string;
  introSectionImage: ContentfulImage;
  universalAssessmentButton: UniversalAssessmentButton;
  testimonial: string;
  testimonialParticipant: string;
  assessmentSectionHeader: string;
  assessmentSectionSubheader: string;
  assessmentButtons: AssessmentButton[];
};

export type ContentfulImage = {
  description: string;
  gatsbyImageData: GatsbyImageData;
};

export type AssessmentButton = {
  buttonText: string;
  assessmentDescription: string;
  assessment: ContentfulAssessment;
};

export type UniversalAssessmentButton = {
  text: string;
  assessment: ContentfulAssessment;
};

export type GatsbyImageData = {
  images: GatsbyImageDataImages;
};

export type GatsbyImageDataImages = {
  sources: GatsbyImageDataImagesSrcSet[];
};

export type GatsbyImageDataImagesSrcSet = {
  srcSet: string;
};

export type AllContentfulAssessment = {
  nodes: ContentfulAssessment[];
};

export type ContentfulAssessment = {
  id: string;
  title: string;
};
