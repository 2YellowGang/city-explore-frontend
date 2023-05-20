import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { ContentContainer } from './ContentContainer';

const Container = styled.main`
  position: relative;
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  height: 105px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
`;

const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  min-height: 50px;
  display: flex;
  align-items: center;
`;

export const ViewLayout: FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <Header>
      <ContentContainer>logo</ContentContainer>
    </Header>
    {children}
    <Footer>
      <ContentContainer>&copy; Copyright 2022</ContentContainer>
    </Footer>
  </Container>
);
