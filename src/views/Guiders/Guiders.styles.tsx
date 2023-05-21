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
  max-width: 30%;
  h3, h5 {
    color:  ${(props) => props.theme.colors.primary};
    margin-bottom: 0;
  }
  h3 {
    text-align: center;
  }
  .guider-container {
    /* max-width: 30%; */
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #CDCDCD;
    border-radius: 20px;
  }
  .guider-profile {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .guider-profile > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .guider-information p {
    margin: 0;
  }
  .guider-information, .guider-actions {
    display: flex;
    flex-direction: column;
  }
  .guider-actions div {
    width: 100%;
    display: flex;
    padding: 5px;
  }
  .guider-actions div button{
    margin: 0 4px;
  }
`;
