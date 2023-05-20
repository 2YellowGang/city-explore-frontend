import { styled } from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-weight: bold;
`;

export const SecondButton = styled(Button)`
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
`;
