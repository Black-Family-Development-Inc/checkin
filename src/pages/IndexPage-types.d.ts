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
  assessmentInstructionsHeader: string;
  stepOneLabel: string;
  stepOneDescription: string;
  stepTwoLabel: string;
  stepTwoDescription: string;
  stepThreeLabel: string;
  stepThreeDescription: string;
  assessmentStepsImage: ContentfulImage;
  assessmentSectionHeader: string;
  assessmentSectionSubheader: string;
  assessmentButtons: AssessmentButton[];
  universalBottomSubHeader: string;
  universalBottomHeader: string;
  retakeDescription: string;
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

export type RetakeSectionType = {
  retakeDescription: string;
  testimonial: string;
  testimonialParticipant: string;
  title: string;
};

export type TestimonialSectionType = {
  testimonial: string;
  testimonialParticipant: string;
};
