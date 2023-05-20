import styled from 'styled-components';
import { ContentContainer } from '../../components/ContentContainer';

import upIcon from '../../assets/up.svg';
import downIcon from '../../assets/down.svg';

export const StyledContentContainer = styled(ContentContainer)`
  margin-top: 50px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const GuiderAvatarContainer = styled.div`
  width: 220px;
  height: 220px;
`;

export const AvatarImage = styled.img`
  width: 220px;
  height: 220px;
  display: block;
  border-radius: 100%;
`;

export const GuiderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px 0;
  flex: 1;

  h1 {
    margin: 0;
  }

  img {
    width: 190px;
    display: block;
    position: relative;
    left: -6px;
  }

  > div {
    display: flex;
    align-items: center;

    span {
      color: ${(props) => props.theme.colors.primary};
      font-weight: 800;
    }
  }
`;

export const GuiderButtonsContainer = styled.h1`
  display: flex;
  flex-direction: column;
  width: 450px;

  button {
    margin: 5px 0;
  }
`;

export const InfoColumn = styled.div`
  width: 33.33334%;
  padding-right: 50px;

  h3 {
    font-size: 18px;
    font-weight: 800;
    color: ${(props) => props.theme.colors.primary};
  }

  &:nth-child(2) {
    padding-left: 40px;
  }
`;

export const SkillsFlexContainer = styled(FlexContainer)`
  margin-top: 80px;
  align-items: flex-start;
`;

export const RelationsFlexContainer = styled(FlexContainer)`
  margin-top: 80px;
  align-items: flex-start;
`;

export const SkillContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    flex: 1;
    margin: 0;
  }

  span {
    width: 86px;
    height: 33px;
    border-radius: 44px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    background-image: url(${upIcon});
    background-repeat: no-repeat;
    background-position: 10px center;
    display: block;
    align-items: center;
    text-align: right;
    font-weight: 700;
    padding: 4px 10px;
    color: ${(props) => props.theme.colors.primary};

    &:last-child {
      background-image: url(${downIcon});
      margin-left: 8px;
    }
  }
`;

export const RelationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 100px;
`;

export const RelationItem = styled.div`
  width: calc(33.33334% - (30px * 1 / 3) - 10px);
  height: 236px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    cursor: pointer;
  }
`;
