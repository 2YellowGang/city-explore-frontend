import { FC } from 'react';
import { ViewLayout } from '../components/ViewLayout';
import { styled } from 'styled-components';
import { ContentContainer } from '../components/ContentContainer';

const Text = styled.h1`
  text-align: center;
`;

export const NotFound: FC = () => (
  <ViewLayout>
    <ContentContainer>
      <Text>Nie znaleziono</Text>
    </ContentContainer>
  </ViewLayout>
);
