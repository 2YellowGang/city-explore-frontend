import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.main`
  position: relative;
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  height: 105px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ViewLayout: FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <Header>logo</Header>
    {children}
  </Container>
);
