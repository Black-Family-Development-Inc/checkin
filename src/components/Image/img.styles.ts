import { styled } from "@mui/system";
import { breakpoints } from "../../styles/theme";
import { ImageStyledProps } from "./Image-types";

export const ImageStyled = styled("img")((props: ImageStyledProps) => ({
  width: `${props.error ? "201px" : "100%"}`,
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    width: `${props.error ? "293px" : "100%"}`,
  },
}));
