import styled from "@emotion/styled";

export const NeedHelpTitle = styled("h4")({
  fontSize: "26px",
  fontWeight: 600,
  lineHeight: "28px",
  marginBottom: "12px",
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

export const NeedHelpSubTitle = styled("p")({
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "24px",
  letterSpacing: "0.5",
  marginBottom: "36px",
});

export const ButtonStyled = styled("button")({
  padding: 10,
  width: "359px",
  background: "#000",
  color: "#fff",
  fontSize: "18px",
  lineHeight: "24px",
  border: "0px",
  borderRadius: "8px",
});
