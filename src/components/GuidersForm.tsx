import { FC } from 'react';
import styled from 'styled-components';
import { TwoThumbInputRange } from "react-two-thumb-input-range"


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
  .filters-container, .sort-container {
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

const Select = styled.select`
    background-color: white;
    /* width: 200px; */
    padding: 15px;
    height: 50px;
    border-radius: 30px;
    border: 1px solid  ${(props) => props.theme.colors.primary};
    color: black;
    text-align: center;
`;

export const GuidersForm: FC = () => (
    
  <Container>
    <div className="filters-container">
        <h5>Filtrowanie</h5>
        <Select>
            <option selected>Wybierz płeć</option>
            <option>Mężczyzna</option>
            <option>Kobieta</option>
        </Select>
        <TwoThumbInputRange showLabels={true} onChange={() => {console.log()}} trackColor='#26900B' thumbColor='#26900B' values={[18,70]} min={18} max={70} />
    </div>
    <div className="sort-container">
        <h5>Sortowanie</h5>
        <Select>
            <option selected>Najwyższa ocena</option>
            <option>Wiek</option>
        </Select>
    </div>  
  </Container>
);
