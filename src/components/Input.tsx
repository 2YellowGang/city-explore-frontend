import { styled } from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 40px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.white};
  padding: 0 15px;
  font-size: 1rem;
  font-family: Montserrat;

  &::placeholder {
    color: rgba(0, 0, 0, 0.35);
  }
`;
