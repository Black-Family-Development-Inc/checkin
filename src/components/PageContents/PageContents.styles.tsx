import { styled } from "@mui/system";
import background from "../../images/background.png";

export const StyledPageContents = styled("div")({
  flex: "1 0 auto",
  backgroundImage: `url(${background})`,
  backgroundRepeat: "repeat-y",
  backgroundSize: "100%",
});
