import { styled } from 'styled-components';
import { Section } from '../../components/Section';

export const PlaceDetailsContainer = styled.div`

  margin-top: 50px;
  div {
    display: flex;
    margin-bottom: 20px;
  }
  div > div {
    width: 800px;
    height: 350px;
    border-radius: 60px;
    background-size: cover;
    background-position: center;
  }
`;

export const StyledSection = styled(Section)`
  padding: 0 50px;
`;