import { styled } from 'styled-components';

export const Heading = styled.h2`
  margin: 0;
  font-weight: 800;

  span {
    color: ${(props) => props.theme.colors.primary};
  }
`;
