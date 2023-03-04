import styled from 'styled-components';

export const WrapperContainer = styled.div`
  position: absolute;
  border: 3px ridge #cccccc;
  border-radius: 5px;
  width: 300px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: darkgrey;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  @media (orientation: portrait) {
    width: 100%;
    height: 100%;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: ridge #cccccc;
    border-radius: 0;
  }
`;

export const WrapperText = styled.p`
  position: fixed;
  left: 50%;
  top: 2.5%;
  transform: translate(-50%);
  letter-spacing: 0.3em;
  color: darkslategray;
  font-size: 1em;

  @media (orientation: portrait) {
    position: relative;
    text-align: center;
    letter-spacing: 4vw;
    font-size: 6vw;
  }
`;

export const DisplayContainer = styled.div`
  border: ridge #cccccc;
  width: 90%;
  height: 15%;
  margin: 15% auto 5% auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  overflow: hidden;
  background-color: green;

  @media (orientation: portrait) {
    width: 95%;
    border: 1vw ridge #cccccc;
    height: 15vh;
    margin: auto;
  }

  p {
    white-space: nowrap;
    margin-left: 5%;
    margin-right: 5%;

    @media (orientation: portrait) {
      margin-right: 2%;
    }
  }
`;

export const Sum = styled.p`
  font-size: 1em;
  margin-top: 2%;

  @media (orientation: portrait) {
    font-size: 4vh;
    margin-top: 0;
  }
`;

export const Input = styled.p`
  font-size: 1.75em;
  margin-bottom: 2%;

  @media (orientation: portrait) {
    font-size: 5vh;
  }
`;

export const ButtonBox = styled.div`
  border: 2px groove #cccccc;
  width: 90%;
  height: 70%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 5%;
  padding-top: 5%;
  padding-bottom: 5%;

  @media (orientation: portrait) {
    width: 95%;
    border: 1vw groove #cccccc;
    max-height: 80vh;
  }
`;

export const ButtonContainer = styled.div`
  border: 1.5px ridge #cccccc;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  background-color: darkslategray;
  color: wheat;

  @media (orientation: portrait) {
    width: 17vw;
    height: 17vw;
    max-height: 15%;
    font-size: 6vw;
    border: ridge #cccccc;
  }

  &:last-of-type {
    width: 115px;

    @media (orientation: portrait) {
      width: 39vw;
    }
  }

  &:active {
    box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);

    @media (orientation: portrait) {
      box-shadow: inset 1vw 1vw 3vw 0vw rgba(0, 0, 0, 0.7);   
  }
`;
