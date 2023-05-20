import { FC } from 'react';
import styled from 'styled-components';
import worldMap from '../assets/world-map.svg';
import { useTranslation } from 'react-i18next';

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

export const ExploreWorld: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t('exploreWorld.title')}</h1>
      <p>{t('exploreWorld.subtitle')}</p>
    </Container>
  );
};
