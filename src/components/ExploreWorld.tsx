import { FC } from 'react';
import styled from 'styled-components';
import worldMap from '../assets/world-map.svg';

const Container = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.primary};
  background-image: url(${worldMap});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 30px;

  h1,
  p {
    text-align: center;
    margin: 0;
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
  }
`;

export const ExploreWorld: FC = () => (
  <Container>
    <h1>Zwiedź wielki świat</h1>
    <p>z naszymi przewodnikami</p>
  </Container>
);
