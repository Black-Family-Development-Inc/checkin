import styled from "@emotion/styled";

export const StyledListItem = styled.li(
  {
    //normal styles
  },
  (props: { bgColor: string }) => ({
    background: props.bgColor,
  }),
);
