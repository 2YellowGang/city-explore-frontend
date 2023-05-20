import { styled } from 'styled-components';
import ReactSelect from 'react-select';

export const Select = styled(ReactSelect)`
  width: 100%;
  height: 50px;
  font-size: 1rem;
  font-family: Montserrat;
  padding: 0;

  &::placeholder {
    color: rgba(0, 0, 0, 0.35);
  }
`;
