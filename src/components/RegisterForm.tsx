import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Input } from './Input';
import camera from '../assets/camera.png';
import star from '../assets/star.png';
import { Select } from './Select';
import { _languages, _places } from '../mockedData';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  form {
    width: 100%;
    margin-top: 20px;
  }
  form > div {
    display: flex;
    align-items: start;
    justify-content: space-between;
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .inputs-box {
    max-width: 400px;
    @media (max-width: 1024px) {
      max-width: unset;
      width: 100%;
    }
  }
  .image-box {
    max-width: 600px;
    @media (max-width: 1024px) {
      max-width: unset;
      width: 100%;
      text-align: center;
    }
  }
  .checkbox-container {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
    margin: 30px 5px;
  }
  input,
  select {
    margin: 0 0 20px 0;
    color: black;
  }
  a {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
  }
  input[type='checkbox'] {
    background-color: white;
    margin: 0;
    margin-right: 15px;
  }

  .image-box div {
    display: flex;
    align-items: center;
  }
  .image-box div.credentials {
    flex-direction: column;
    align-items: end;
  }
  .image-box div p {
    text-align: right;
    font-size: 18px;
    margin-right: 15px;
    font-weight: bold;
  }
  .image-box > img {
    padding: 65px 140px;
    border: 6px solid ${(props) => props.theme.colors.primary};
    border-radius: 45px;
    float: right;
    @media (max-width: 1024px) {
      float: initial;
    }
  }
`;

export const StyledSelect = styled(Select)`
  margin-bottom: 20px;
`;
export const StyledInput = styled(Input)`
  max-width: 400px;
  @media (max-width: 1024px) {
    max-width: unset;
    width: 100%;
  }
`;
export const StyledButton = styled(Button)`
  max-width: 600px;
  margin: 30px auto;
`;

export const RegisterForm: FC = () => {
  const placeOptions = useMemo(
    () =>
      _places.map((place) => ({
        value: place.name,
        label: place.name,
      })),
    [],
  );

  const sexOptions = useMemo(
    () => [
      {
        label: 'M',
        value: 'M',
      },
      {
        label: 'K',
        value: 'K',
      },
    ],
    [],
  );

  const languageOptions = useMemo(
    () =>
      _languages.map((lang) => ({
        value: lang.name,
        label: lang.name,
      })),
    [],
  );

  return (
    <Container>
      <form method="POST">
        <div>
          <div className="inputs-box">
            <StyledInput
              type="text"
              placeholder="E-mail"
              required
            ></StyledInput>
            <StyledInput
              type="password"
              placeholder="Hasło"
              required
            ></StyledInput>
            <Input type="text" placeholder="Imię i nazwisko" required></Input>
            <Input type="text" placeholder="Kraj" required></Input>
            <StyledSelect
              options={placeOptions}
              placeholder={'Miasto'}
              closeMenuOnSelect={true}
              required
              onChange={() => {
                console.log();
              }}
            />
            <StyledSelect
              options={languageOptions}
              placeholder={'Język'}
              isMulti
              required
              onChange={() => {
                console.log();
              }}
            />
            <Input type="number" placeholder="Wiek" min="18"></Input>
            <StyledSelect
              options={sexOptions}
              placeholder={'Płeć'}
              closeMenuOnSelect={true}
              required
              onChange={() => {
                console.log();
              }}
            />
          </div>
          <div className="image-box">
            <div>
              <p>
                Zdobądź status zweryfikowanego użytkownika TourOn dodając
                zdjęcie swojego dowodu
              </p>
              <img src={star} />
            </div>
            <img src={camera} />
          </div>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" placeholder="Płeć" name="terms"></input>
          <label htmlFor="terms">
            {' '}
            zaakceptuj <a href="#">regulamin</a> TourOn
          </label>
        </div>
        <StyledButton>Załóż profil przewodnika</StyledButton>
      </form>
    </Container>
  );
};
