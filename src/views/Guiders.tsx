import { FC } from 'react';
import { ViewLayout } from '../components/ViewLayout';
import { ContentContainer } from '../components/ContentContainer';
import { GuidersForm } from '../components/GuidersForm';
import { GuidersList } from '../components/GuidersList';
import { Heading } from '../components/Heading';

export const Guiders: FC = () => {


  return (
    <ViewLayout>
      <ContentContainer>
        <Heading>Dostępni przewoźnicy:</Heading>
        <GuidersForm></GuidersForm>
        <GuidersList></GuidersList>

        <Heading>Dostępni w innym terminie:</Heading>
      </ContentContainer>
    </ViewLayout>
  );
};
