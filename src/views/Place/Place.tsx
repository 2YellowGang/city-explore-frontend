import { FC, useMemo } from 'react';
import { ViewLayout } from '../../components/ViewLayout';
import { ContentContainer } from '../../components/ContentContainer';
import { Heading } from '../../components/Heading';
import { Section } from '../../components/Section';
import { useParams } from 'react-router-dom';
import { _places } from '../../mockedData';
import { slugName } from '../../utils/slugName';

export const Place: FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const place = useMemo(
    () => _places.find((place) => slugName(place.name) === slug),
    [slug],
  );

  console.log('place', place);

  return (
    <ViewLayout>
      <ContentContainer>
        <Section>
          <Heading>Polecane miejsca</Heading>
        </Section>
        <Section>
          <Heading>
            Obiekty w mieście: <span>Barcelona</span>
          </Heading>
        </Section>
      </ContentContainer>
    </ViewLayout>
  );
};
