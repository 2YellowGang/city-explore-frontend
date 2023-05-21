import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { Select } from './Select';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h1,
  p {
    text-align: center;
    margin: 0;
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
  }
  .filters-container,
  .sort-container {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
  .sort-container {
    justify-content: space-around;
  }
  h5 {
    margin: 0;
    margin-right: 25px;
  }
`;

// const Select = styled.select`
//     background-color: white;
//     /* width: 200px; */
//     padding: 15px;
//     height: 50px;
//     border-radius: 30px;
//     border: 1px solid  ${(props) => props.theme.colors.primary};
//     color: black;
//     text-align: center;
// `;

interface GuidersFormProps {
  sex: string;
  onSexChange: (sex: string) => void;
}

export const GuidersForm: FC<GuidersFormProps> = ({ sex, onSexChange }) => {
  const sexOptions = useMemo(() => {
    const sexes = [
      { label: 'Kobieta', value: 'K' },
      { label: 'Mężczyzna', value: 'M' },
    ];

    if (sex) {
      return [{ label: 'Wszyscy', value: '' }, ...sexes];
    }

    return sexes;
  }, [sex]);

  return (
    <Container>
      <div className="filters-container">
        <h5>Filtrowanie</h5>
        <Select
          options={sexOptions}
          value={sexOptions.find((opt) => opt.value === sex)}
          placeholder="Wybierz płeć"
          onChange={(sex) => onSexChange((sex as (typeof sexOptions)[0]).value)}
        />
      </div>
      {/* <div className="sort-container">
        <h5>Sortowanie</h5>
        <Select>
          <option selected>Najwyższa ocena</option>
          <option>Wiek</option>
        </Select>
      </div> */}
    </Container>
  );
};
