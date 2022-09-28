import styled from "@emotion/styled";

export const NavBarContainerStyled = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  padding: "10px 16px",
});

export const NavBarLogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  ".logo-text": {
    marginLeft: "8px",
    color: "#000",
    fontSize: "14px",
    fontWeight: "600",
  },
});

export const NavBarLink = styled("div")({
  ".nav-link": {
    padding: "12px 0px",
    textDecoration: "none",
    color: "#000",
    fontSize: "12px",
    fontWeight: "500",
  },
});
