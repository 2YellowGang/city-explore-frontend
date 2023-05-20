import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ContentContainer } from './ContentContainer';
import logo from '../assets/logo.svg';

const Container = styled.main`
  position: relative;
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  height: 105px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  display: flex;
  position: relative;
  z-index: 1;
`;

const Logo = styled.img`
  height: 57px;
  display: block;
`;

const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  min-height: 50px;
  display: flex;
  align-items: center;
  border: 0;
`;

export const ViewLayout: FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <Header>
      <ContentContainer>
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>
      </ContentContainer>
    </Header>
    {children}
    <Footer>
      <ContentContainer>&copy; Copyright 2022</ContentContainer>
    </Footer>
  </Container>
);
