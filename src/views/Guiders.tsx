import { FC } from 'react';
import { ViewLayout } from '../components/ViewLayout';
import { ContentContainer } from '../components/ContentContainer';
import { GuidersForm } from '../components/GuidersForm';
import { GuidersList } from '../components/GuidersList';

export const Guiders: FC = () => {


  return (
    <ViewLayout>
      <ContentContainer>
        <h2>Dostępni przewoźnicy:</h2>
        <GuidersForm></GuidersForm>
        <GuidersList></GuidersList>

        <h2>Dostępni w innym terminie:</h2>
      </ContentContainer>
    </ViewLayout>
  );
};
