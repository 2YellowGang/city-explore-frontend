import { FC } from 'react';
import { DateRange, DateRangeProps } from 'react-date-range';
import { pl } from 'react-date-range/dist/locale';
import { styled } from 'styled-components';

const StyledDateRange = styled(DateRange)`
  width: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;

  .rdrMonth {
    width: 100%;
  }

  .rdrDay {
    height: 4em;
  }

  .rdrDayNumber span {
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

interface CalendarProps {
  ranges: DateRangeProps['ranges'];
  onChange: DateRangeProps['onChange'];
}

export const Calendar: FC<CalendarProps> = ({ ranges, onChange }) => (
  <StyledDateRange
    showPreview={false}
    showDateDisplay={false}
    ranges={ranges}
    locale={pl}
    onChange={onChange}
  />
);
