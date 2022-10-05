import styled from "@emotion/styled";

export const StyledListItem = styled.li((props: { bgColor: string }) => ({
  background: props.bgColor,
}));
