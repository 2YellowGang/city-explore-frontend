import { styled } from 'styled-components';
import { ContentContainer } from '../../components/ContentContainer';

export const StyledContentContainer = styled(ContentContainer)`
  margin-top: 50px;
`;

export const GuidersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const GuidersItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: calc(33.33334% - (30px * 1 / 3) - 10px);
  h3,
  h5 {
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 0;
  }

  h3 {
    margin-bottom: 8px;
    margin-top: 0;
  }

  .guider-container {
    /* max-width: 30%; */
    display: flex;
    flex-direction: column;
    padding: 30px;
    border: 1px solid #cdcdcd;
    border-radius: 20px;
  }
  .guider-profile {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .guider-profile > div {
    margin-left: 20px;
  }
  .guider-profile > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .guider-information {
    flex: 1;
  }
  .guider-information p {
    margin: 0;
  }
  .guider-information,
  .guider-actions {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
  .guider-actions div {
    width: 100%;
    display: flex;
  }
  .guider-actions div button {
    margin: 5px;
  }
`;
