import { styled } from 'styled-components';
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
  margin: 40px 0 60px 0;
  justify-content: space-between;
`;

export const BenefitItem = styled.div`
  width: calc(25%);
  max-width: 230px;
  text-align: center;
  margin-right: 20px;
  margin-bottom: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

export const BenefitItemImage = styled.img`
  width: 100%;
  display: block;
`;

export const BenefitItemText = styled.p`
  margin: 0;
  text-align: center;
  font-weight: 600;
  margin-top: 10px;
`;
