import { FC, useMemo } from 'react';
import { ViewLayout } from '../../components/ViewLayout';
import { ContentContainer } from '../../components/ContentContainer';
import { Heading } from '../../components/Heading';
import { Section } from '../../components/Section';
import { useParams } from 'react-router-dom';
import { _places } from '../../mockedData';
import { slugName } from '../../utils/slugName';
import { PlaceContainer, PlaceItem } from './Place.styles';
import { Button } from '../../components/Button';

export const Place: FC = () => {
  const { place } = useParams<{ place: string; locales: string }>();

  const placeData = useMemo(
    () => _places.find((p) => slugName(p.name) === place),
    [place],
  );

  const renderPlaces = useMemo(
    () =>
      placeData?.objects?.map((obj) => (
        <PlaceItem
          key={obj.name}
          style={{ backgroundImage: `url(${obj.image})` }}
        >
          <h1>{obj.name}</h1>
          <Button>Zobacz przewodników</Button>
        </PlaceItem>
      )),
    [placeData?.objects],
  );

  if (!placeData) {
    return null;
  }

  return (
    <ViewLayout>
      <ContentContainer>
        <Section>
          <Heading>Polecane miejsca</Heading>
          <PlaceContainer>{renderPlaces?.slice(0, 3)}</PlaceContainer>
        </Section>
        <Section>
          <Heading>
            Obiekty w mieście: <span>{placeData.name}</span>
          </Heading>
          <PlaceContainer>{renderPlaces}</PlaceContainer>
        </Section>
      </ContentContainer>
    </ViewLayout>
  );
};
