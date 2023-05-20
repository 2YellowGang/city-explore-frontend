import { FC } from 'react';
import { ViewLayout } from '../../components/ViewLayout';
import { ContentContainer } from '../../components/ContentContainer';
import { Section } from '../../components/Section';
import { RegisterContainer, StyledHeading } from './Register.styles';
import { RegisterForm } from '../../components/RegisterForm';

export const Register: FC = () => {


  return (
    <ViewLayout>
      <ContentContainer>
        <Section>
          <StyledHeading>Zostań przewodnikiem TrunOn!</StyledHeading>
          <RegisterContainer>
            <RegisterForm></RegisterForm>
          </RegisterContainer>
        </Section>
      </ContentContainer>
    </ViewLayout>
  );
};
