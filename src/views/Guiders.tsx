import { FC } from 'react';
import { ViewLayout } from '../components/ViewLayout';
import { ContentContainer } from '../components/ContentContainer';
import { GuidersForm } from '../components/GuidersForm';
import { GuidersList } from '../components/GuidersList';
import { Heading } from '../components/Heading';
import { useParams } from 'react-router';

export const Guiders: FC = () => {
  const { place, object } = useParams<{ place: string; object: string }>();

  console.log(place, object);

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
