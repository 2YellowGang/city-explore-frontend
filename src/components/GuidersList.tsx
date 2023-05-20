import { FC } from 'react';
import styled from 'styled-components';
import { Button, SecondButton } from '../components/Button';
import ReactStars from "react-rating-stars-component"


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  h3, h5 {
    color:  ${(props) => props.theme.colors.primary};
    margin-bottom: 0;
  }
  h3 {
    text-align: center;
  }
  .guider-container {
    max-width: 30%;
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

export const GuidersList: FC = () => (
    
  <Container>
      <div className='guider-container'>
        <div className="guider-profile">
            <img src='#' />
            <div>
                <h3>Jan Kowalski</h3>
                <ReactStars
                    count={5}
                    onChange={() => {console.log()}}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#26900B"
                />
            </div>
        </div>
        <div className="guider-information">
            <h5>Opis:</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, velit!</p>
            <h5>Języki:</h5>
            <p>angielski, polski, ukraiński</p>
        </div>
        <div className="guider-actions">
            <div>
                <SecondButton>Zobacz więcej</SecondButton>
                <SecondButton>Skontaktuj się</SecondButton>
            </div>
            <div>
                <Button>Zobacz w jakich miejscach przewodzę</Button>
            </div>
        </div>
      </div>
      <div className='guider-container'>
        <div className="guider-profile">
            <img src='#' />
            <div>
                <h3>Jan Kowalski</h3>
                <ReactStars
                    count={5}
                    onChange={() => {console.log()}}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#26900B"
                />
            </div>
        </div>
        <div className="guider-information">
            <h5>Opis:</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, velit!</p>
            <h5>Języki:</h5>
            <p>angielski, polski, ukraiński</p>
        </div>
        <div className="guider-actions">
            <div>
                <SecondButton>Wybierz</SecondButton>
            </div>
            <div>
                <Button>Zobacz w jakich miejscach przewodzę</Button>
            </div>
        </div>
      </div>
      <div className='guider-container'>
        <div className="guider-profile">
            <img src='#' />
            <div>
                <h3>Jan Kowalski</h3>
                <ReactStars
                    count={5}
                    onChange={() => {console.log()}}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#26900B"
                />
            </div>
        </div>
        <div className="guider-information">
            <h5>Opis:</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, velit!</p>
            <h5>Języki:</h5>
            <p>angielski, polski, ukraiński</p>
        </div>
        <div className="guider-actions">
            <div>
                <SecondButton>Wybierz</SecondButton>
            </div>
            <div>
                <Button>Zobacz w jakich miejscach przewodzę</Button>
            </div>
        </div>
      </div>
  </Container>
);
