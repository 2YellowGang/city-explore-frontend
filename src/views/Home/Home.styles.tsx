import { styled } from 'styled-components';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Select } from '../../components/Select';

export const GuideSearchSection = styled(Section)`
  flex-direction: row;
  align-items: center;
`;

export const GuideSearchForm = styled.form`
  display: block;
  width: 50%;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
    font-weight: 800;
  }
`;

export const StyledInput = styled(Input)`
  width: 75%;
  margin-bottom: 20px;
`;

export const StyledSelect = styled(Select)`
  width: 75%;
  margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
  width: 75%;
`;

export const StyledRegisterButton = styled(Button)`
  align-self: center;
  width: auto;
`;

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 40px 0 80px 0;
`;

export const BenefitsItem = styled.div`
  width: 250px;
  height: 160px;
  border-radius: 30px;
  background-color: #dddddd;
`;

export const RegisterSection = styled(Section)``;
