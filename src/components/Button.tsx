import { styled } from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 40px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-weight: bold;
  padding: 0 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  font-family: Montserrat;
`;

export const SecondButton = styled(Button)`
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
`;

export const ThirdButton = styled(Button)`
  border: 1px solid transparent;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
`;
