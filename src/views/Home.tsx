import { FC } from 'react';
import { styled } from 'styled-components';
import { ViewLayout } from '../components/ViewLayout';
import { ContentContainer } from '../components/ContentContainer';

const BenefitContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BenefitItem = styled.div`
  width: 330px;
  height: 214px;
  border-radius: 30px;
  background-color: #dddddd;
`;

export const Home: FC = () => (
  <ViewLayout>
    <ContentContainer>
      <h2>Zostań przewodnikiem</h2>
      <p>
        tekst motywujący Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <BenefitContainer>
        <BenefitItem></BenefitItem>
        <BenefitItem></BenefitItem>
        <BenefitItem></BenefitItem>
      </BenefitContainer>
      <h2>Znajdź miejsca</h2>
    </ContentContainer>
  </ViewLayout>
);
