import styled from "@emotion/styled";

export const UniversalBottomHeader = styled("h4")({
  fontSize: "26px",
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

export const UniversalBottomSubHeader = styled("p")({
  fontSize: "16px",
  marginBottom: "36px",
});

export const ButtonStyled = styled("button")({
  padding: 10,
  width: "359px",
  background: "#000",
  color: "#fff",
  fontSize: "18px",
  border: "0px",
  borderRadius: "8px",
});
