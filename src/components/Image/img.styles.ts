import { styled } from "@mui/system";

export const ImageStyled = styled("img")({
  width: "100%",
  marginTop: "104px",
  "@media (max-width: 544px)": {
    marginTop: "56px",
  },
  "@media (min-width: 545px) and (max-width: 991.98px)": {
    marginTop: "80px",
  },
});
