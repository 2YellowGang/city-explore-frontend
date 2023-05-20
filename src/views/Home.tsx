import { FC, FormEvent, useState } from 'react';
import { Range, RangeKeyDict } from 'react-date-range';
import { ViewLayout } from '../components/ViewLayout';
import { ContentContainer } from '../components/ContentContainer';
import {
  BenefitContainer,
  BenefitItem,
  GuideSearchContainer,
  GuideSearchForm,
  StyledButton,
  StyledInput,
  StyledRegisterButton,
} from './Home.styles';
import { addDays } from 'date-fns';
import { Calendar } from '../components/Calendar';
import { theme } from '../theme';
import { ExploreWorld } from '../components/ExploreWorld';

export const Home: FC = () => {
  const [selectionDateRanges, setSelectionDateRanges] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
      color: theme.colors.primary,
    },
  ]);

  const handleDateChange = (rangesByKey: RangeKeyDict) => {
    setSelectionDateRanges([rangesByKey.selection]);
  };

  const handleSearchFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <ViewLayout>
      <ExploreWorld />
      <ContentContainer>
        <GuideSearchContainer>
          <GuideSearchForm onSubmit={handleSearchFormSubmit}>
            <h1>Znajdź przewodnika</h1>
            <StyledInput type="text" placeholder="Wybierz miasto" />
            <StyledInput type="text" placeholder="Wybierz język" />
            <StyledButton type="submit">Wyszukaj przewodników</StyledButton>
          </GuideSearchForm>
          <Calendar ranges={selectionDateRanges} onChange={handleDateChange} />
        </GuideSearchContainer>
        <h2>Zostań przewodnikiem</h2>
        <p>
          tekst motywujący Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <StyledRegisterButton>
          Zarejestruj się jako przewodnik
        </StyledRegisterButton>
        <BenefitContainer>
          <BenefitItem></BenefitItem>
          <BenefitItem></BenefitItem>
          <BenefitItem></BenefitItem>
        </BenefitContainer>
        <h2>Znajdź miejsca</h2>
      </ContentContainer>
    </ViewLayout>
  );
};
