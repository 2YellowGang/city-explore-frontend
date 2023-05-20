import { FC } from 'react';
import { ViewLayout } from '../../components/ViewLayout';
import { ContentContainer } from '../../components/ContentContainer';
import { Text } from './NotFound.styles';

export const NotFound: FC = () => (
  <ViewLayout>
    <ContentContainer>
      <Text>Nie znaleziono</Text>
    </ContentContainer>
  </ViewLayout>
);
