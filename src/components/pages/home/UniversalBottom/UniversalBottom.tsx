import { Link } from "gatsby";
import React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import {
    ButtonStyled,
    UniversalBottomHeader,
    UniversalBottomSubHeader,
} from "./UniversalBottom.styles";

const UniversalBottom = ({
    universalBottomSubHeader,
    universalBottomHeader,
    universalAssessmentButton: { text: assessmentButtonLabel, assessment },
}: ContentfulHomePage) => {
    return (
        <>
            <UniversalBottomHeader>{universalBottomHeader}</UniversalBottomHeader>
            <UniversalBottomSubHeader>
                {universalBottomSubHeader}
            </UniversalBottomSubHeader>
            <Link to={"/assessments/" + assessment.title.toLowerCase()}>
                <ButtonStyled>
                    {assessmentButtonLabel}
                </ButtonStyled>
            </Link>
        </>
    );
};

export default UniversalBottom;
