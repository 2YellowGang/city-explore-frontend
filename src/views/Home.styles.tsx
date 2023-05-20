import { styled } from 'styled-components';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const GuideSearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const GuideSearchForm = styled.form`
  display: block;
  width: 50%;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
  }
`;

export const StyledInput = styled(Input)`
  width: 75%;
  margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
  width: 75%;
`;

export const StyledRegisterButton = styled(Button)`
  align-self: center;
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
