import styled from "@emotion/styled";

export const UniversalBottomHeader = styled("h4")({
  fontSize: "26px",
  marginBottom: "12px",
  fontFamily: "Roboto, Inter",
  "&:after": {
    content: '""',
    width: "80px",
    height: "4px",
    background: "#000",
    display: "block",
    borderRadius: "10px",
    marginTop: "8px",
  },
});

export const UniversalBottomSubHeader = styled("p")({
  fontSize: "16px",
  marginBottom: "36px",
});

export const ButtonStyled = styled("button")({
  padding: "10px 24px",
  background: "#000",
  borderRadius: "8px",
  width: "320px",
  height: "44px",
  color: "#fff",
  textDecoration: "none",
  marginTop: "20px",
  fontSize: "18px",
  textTransform: "none",
  fontWeight: "600",
  "@media(max-width: 375px)": {
    width: "100%",
  },
});
