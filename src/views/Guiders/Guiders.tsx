import { FC, useCallback, useMemo } from 'react';
import { ViewLayout } from '../../components/ViewLayout';
import { ContentContainer } from '../../components/ContentContainer';
import { GuidersForm } from '../../components/GuidersForm';
import { Heading } from '../../components/Heading';
import { useParams } from 'react-router';
import { _guiders } from '../../mockedData';
import ReactStars from "react-rating-stars-component"
import { Button, SecondButton } from '../../components/Button';
import { GuidersContainer, GuidersItem } from './Guiders.styles';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export const Guiders: FC = () => {
  const { place, object } = useParams<{ place: string; object: string }>();

  const StyledHeading = styled(Heading)`
    margin-top: 50px;
    margin-bottom: 50px;
  `;

  const navigate = useNavigate();

  const handleGuidersNav = useCallback(
    (id: number) => {
      if (_guiders) {
        navigate(
          `/guider/${id}`,
        );
      }
    },
    [navigate, _guiders],
  );

  const renderGuiders = useMemo(
    () =>
      _guiders.map((obj) => (
        <GuidersItem>
          <div className='guider-container'>
        <div className="guider-profile">
            <img src={obj.avatar} />
            <div>
                <h3>{obj.name} {obj.surname}</h3>
                <ReactStars
                    count={5}
                    onChange={() => {console.log()}}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#26900B"
                />
            </div>
        </div>
        <div className="guider-information">
            <h5>Opis:</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, velit!</p>
            <h5>Języki:</h5>
            <p>angielski, polski, ukraiński</p>
        </div>
        <div className="guider-actions">
            <div>
                <SecondButton onClick={() => handleGuidersNav(obj.id)}>Zobacz więcej</SecondButton>
                <SecondButton>Skontaktuj się</SecondButton>
            </div>
            <div>
                <Button>Zobacz w jakich miejscach przewodzę</Button>
            </div>
        </div>
      </div>
        </GuidersItem>
      )),
    [],
  );


  console.log(place, object);

  return (
    <ViewLayout>
      <ContentContainer>
        <StyledHeading>Dostępni przewoźnicy:</StyledHeading>
        <GuidersForm />
        <GuidersContainer>
          {renderGuiders}
        </GuidersContainer>
        <StyledHeading>Dostępni w innym terminie:</StyledHeading>
      </ContentContainer>
    </ViewLayout>
  );
};
