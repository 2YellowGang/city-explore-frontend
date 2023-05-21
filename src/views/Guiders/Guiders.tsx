import { FC, useCallback, useMemo, useState } from 'react';
import { ViewLayout } from '../../components/ViewLayout';
import { ContentContainer } from '../../components/ContentContainer';
import { GuidersForm } from '../../components/GuidersForm';
import { Heading } from '../../components/Heading';
// import { useParams } from 'react-router';
import { _guiders } from '../../mockedData';
import { Button, SecondButton } from '../../components/Button';
import { GuidersContainer, GuidersItem } from './Guiders.styles';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import stars5 from '../../assets/stars5.svg';

export const Guiders: FC = () => {
  // const { place, object } = useParams<{ place: string; object: string }>();
  const [sex, setSex] = useState('');

  const StyledHeading = styled(Heading)`
    margin-top: 50px;
    margin-bottom: 50px;
  `;

  const navigate = useNavigate();

  const handleGuidersNav = useCallback(
    (id: number) => {
      if (_guiders) {
        navigate(`/guider/${id}`);
      }
    },
    [navigate],
  );

  const renderGuiders = useMemo(
    () =>
      (sex ? _guiders.filter((guilder) => guilder.sex === sex) : _guiders).map(
        (obj) => (
          <GuidersItem>
            <div className="guider-container">
              <div className="guider-profile">
                <img src={obj.avatar} />
                <div>
                  <h3 style={{ fontSize: '24px' }}>
                    {obj.name} {obj.surname}
                  </h3>
                  <img
                    src={stars5}
                    style={{
                      width: '110px',
                      position: 'relative',
                      left: '-5px',
                    }}
                  />
                </div>
              </div>
              <div className="guider-information">
                <h5>Opis:</h5>
                <p>{obj.description}</p>
                <h5>Języki:</h5>
                <p>{obj.languages.map((lang) => lang.name).join(', ')}</p>
                <h5>Wiek:</h5>
                <p>{obj.age}</p>
              </div>
              <div className="guider-actions">
                <div>
                  <SecondButton
                    onClick={() => handleGuidersNav(obj.id)}
                    style={{ fontSize: '14px', padding: 0 }}
                  >
                    Zobacz więcej
                  </SecondButton>
                  <SecondButton style={{ fontSize: '14px', padding: 0 }}>
                    Skontaktuj się
                  </SecondButton>
                </div>
                <div>
                  <Button style={{ fontSize: '14px', padding: 0 }}>
                    Zobacz w jakich miejscach przewodzę
                  </Button>
                </div>
              </div>
            </div>
          </GuidersItem>
        ),
      ),
    [handleGuidersNav, sex],
  );

  return (
    <ViewLayout>
      <ContentContainer style={{ marginBottom: '80px' }}>
        <StyledHeading>Dostępni przewoźnicy:</StyledHeading>
        <GuidersForm sex={sex} onSexChange={setSex} />
        <GuidersContainer>{renderGuiders}</GuidersContainer>
        <StyledHeading>Dostępni w innym terminie:</StyledHeading>
        <GuidersContainer>{renderGuiders}</GuidersContainer>
      </ContentContainer>
    </ViewLayout>
  );
};
