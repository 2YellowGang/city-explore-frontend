import { DateRangePicker } from 'react-date-range';
import { styled } from 'styled-components';

export const GuideSearchContainer = styled.div`
  display: flex;
`;

export const GuideSearchForm = styled.form`
  display: block;
  width: 50%;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
  }
`;

export const StyledDateRangePicker = styled(DateRangePicker)`
  width: 50%;
`;

export const BenefitContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const BenefitItem = styled.div`
  width: 330px;
  height: 214px;
  border-radius: 30px;
  background-color: #dddddd;
`;
