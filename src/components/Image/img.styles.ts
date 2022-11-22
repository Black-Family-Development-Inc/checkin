import { styled } from "@mui/system";
import { ImageStyledProps } from "./Image-types";

export const ImageStyled = styled("img")((props: ImageStyledProps) => ({
  width: `${props.error ? "201px" : "100%"}`,
}));
