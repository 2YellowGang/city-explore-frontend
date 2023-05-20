import { styled } from 'styled-components';
import ReactSelect, { GroupBase, Props } from 'react-select';
import { theme } from '../theme';

const StyledSelect = styled(ReactSelect)`
  width: 100%;
  height: 50px;
  font-size: 1rem;
  font-family: Montserrat;
  padding: 0;

  &::placeholder {
    color: rgba(0, 0, 0, 0.35);
  }
`;

export const Select = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>(
  props: Props<Option, IsMulti, Group>,
) => (
  // eslint-disable-next-line
  /* @ts-ignore */
  <StyledSelect
    {...props}
    styles={{
      control: (baseStyles) => ({
        ...baseStyles,
        height: '50px',
        borderRadius: '40px',
        padding: '0 5px',
        borderColor: theme.colors.primary,
        ':hover': {
          borderColor: theme.colors.primary,
        },
      }),
    }}
  />
);
