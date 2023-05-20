import { styled } from 'styled-components';

export const PlaceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PlaceItem = styled.div`
  flex: 1 0 0;
  height: 195px;
  background-size: cover;
  background-position: center;
  margin: 0 20px 20px 0;

  &:nth-child(n + 3) {
    margin-right: 0;
  }
`;
