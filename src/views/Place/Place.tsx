import { FC, useCallback, useMemo } from 'react';
import { ViewLayout } from '../../components/ViewLayout';
import { Heading } from '../../components/Heading';
import { Section } from '../../components/Section';
import { useNavigate, useParams } from 'react-router-dom';
import { _places } from '../../mockedData';
import { slugName } from '../../utils/slugName';
import {
  PlaceContainer,
  PlaceItem,
  StyledContentContainer,
  StyledThirdButton,
} from './Place.styles';

import infoIcon from '../../assets/info-icon.svg';

export const Place: FC = () => {
  const { place } = useParams<{ place: string; locales: string }>();
  const navigate = useNavigate();

  const placeData = useMemo(
    () => _places.find((p) => slugName(p.name) === place),
    [place],
  );

  const handleGuidersNav = useCallback(
    (objectName: string) => {
      if (placeData) {
        navigate(
          `/guiders/${slugName(placeData.name)}/${slugName(objectName)}`,
        );
      }
    },
    [navigate, placeData],
  );

  const handleDetailsNavigate = useCallback(() => {
    navigate('/place-details');
  }, [navigate]);

  const renderPlaces = useMemo(
    () =>
      placeData?.objects?.map((obj) => (
        <PlaceItem
          key={obj.name}
          style={{ backgroundImage: `url(${obj.image})` }}
        >
          <div>
            <p>{obj.name}</p>
            <div>
              <StyledThirdButton onClick={() => handleGuidersNav(obj.name)}>
                Zobacz przewodników
              </StyledThirdButton>
              <img src={infoIcon} onClick={handleDetailsNavigate} />
            </div>
          </div>
        </PlaceItem>
      )),
    [placeData?.objects, handleGuidersNav, handleDetailsNavigate],
  );

  if (!placeData) {
    return null;
  }

  return (
    <ViewLayout>
      <StyledContentContainer>
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
      </StyledContentContainer>
    </ViewLayout>
  );
};
