import styled from "@emotion/styled";
import { color } from "../../styles/colors";

export const LayoutContainerStyled = styled("div")({
  margin: "0px 162px",
  background: color.teal.five,

  "@media (max-width: 544px)": {
    margin: "0px 16px",
  },
  "@media (min-width: 545px) and (max-width: 991.98px)": {
    margin: "0px 112px",
  },
});
