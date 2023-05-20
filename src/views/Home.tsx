import { FC, useState } from 'react';
import { Range, RangeKeyDict } from 'react-date-range';
import { ViewLayout } from '../components/ViewLayout';
import { ContentContainer } from '../components/ContentContainer';
import {
  BenefitContainer,
  BenefitItem,
  GuideSearchContainer,
  GuideSearchForm,
  StyledDateRangePicker,
} from './Home.styles';
import { addDays } from 'date-fns';

export const Home: FC = () => {
  const [selectionDateRanges, setSelectionDateRanges] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  const handleDateChange = (rangesByKey: RangeKeyDict) => {
    setSelectionDateRanges([rangesByKey.selection]);
  };

  return (
    <ViewLayout>
      <ContentContainer>
        <GuideSearchContainer>
          <GuideSearchForm>
            <h1>Znajdź przewodnika</h1>
          </GuideSearchForm>
          <StyledDateRangePicker
            editableDateInputs
            moveRangeOnFirstSelection={false}
            showMonthAndYearPickers={false}
            showPreview={false}
            ranges={selectionDateRanges}
            onChange={handleDateChange}
          />
        </GuideSearchContainer>
        <h2>Zostań przewodnikiem</h2>
        <p>
          tekst motywujący Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
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
};
