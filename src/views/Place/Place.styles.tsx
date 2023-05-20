import { styled } from 'styled-components';
import { ThirdButton } from '../../components/Button';
import { ContentContainer } from '../../components/ContentContainer';

export const StyledContentContainer = styled(ContentContainer)`
  margin-top: 50px;
`;

export const PlaceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const PlaceItem = styled.div`
  width: calc(33.33334% - (30px * 1 / 3) - 10px);
  height: 220px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  > div {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-size: 16px;
      font-weight: 700;
      color: ${(props) => props.theme.colors.white};
      margin: 5px 0;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        margin-left: 10px;
        display: block;
        height: 40px;
        cursor: pointer;
      }
    }
  }
`;

export const StyledThirdButton = styled(ThirdButton)`
  width: auto;
  height: 40px;
`;
