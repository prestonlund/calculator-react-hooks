import styled from "styled-components";

export const CalculatorStyles = styled.div`
  background: rgb(33, 33, 33);
  background: linear-gradient(
    90deg,
    rgba(33, 33, 33, 1) 0%,
    rgba(56, 56, 56, 1) 70%,
    rgba(69, 69, 69, 1) 100%
  );
  width: 100%;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  grid-template-rows: minmax(200px 350px) 1fr;
  grid-template-columns: 1fr;
  @media (max-width: 500px) {
    max-width: 90%;
    padding: 5%;
  }
  .display {
    font-family: "Raleway", sans-serif;
    /* grid-area: display; */
    margin: 0 !important;
    width: 100%;
    @media (max-width: 500px) {
      width: 100%;
      max-height: 200px;
    }
    h1 {
      font-size: 4rem;
      color: white;
      text-align: center;
      @media (max-width: 500px) {
        font-size: 2rem;
      }
    }
  }
  .number-pad {
    /* grid-area: numbers; */
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    padding: 0px 0px 30px;
    width: 450px;
    margin: 0 auto;
    @media (max-width: 500px) {
      width: 100%;
      margin: 0;
    }
    button {
      width: 100%;
      height: 80px;
      /* border-radius: 20px; */
      /* changes below */
      /* border: 3px solid white; */
      border: 0;
      box-shadow: inset 0 0 0 2px #505050;
      cursor: pointer;
      transform: translate(4px, 4px);
      text-decoration: none;
      /* changes above */
      font-size: 2rem;
      color: white;
      font-family: "Raleway", sans-serif;
      background: #297d60;
      &:focus {
        outline: none;
      }
      &:hover {
        border: 3px solid #dfe6e9;
        font-weight: 500;
      }
    }
    // function buttons
    button.function-button {
      background-color: #2d3436;
    }
    button.white-button {
      color: #2d3436;
      background-color: white;
    }
  }
  .zero-button {
    grid-column: 1/3;
  }
`;

export const DisplayStyles = styled.div`
  display: grid;
  grid-template-rows: 90px 50px;
  grid-template-columns: 1fr;
  border: 4px solid white;
  max-width: 700px;
  margin: 10px auto;
  align-items: center;
  /* border-radius: 20px; */
  background: #297d60;
  @media (max-width: 500px) {
    width: 95%;
    grid-template-rows: 60px 40px;
  }
  h2,
  p {
    text-align: center;
    color: white;
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
    text-align: right;
    border-bottom: 4px solid white;
    padding: 15px 20px;
    @media (max-width: 500px) {
      font-size: 1.5rem;
      padding: 10px;
    }
  }
  h2.long-main-display {
    font-size: 1.2rem;
  }
  p {
    margin: 5px 0;
    font-size: 1.3rem;
    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }
  p.long-stored-display {
    font-size: 0.5rem;
  }
`;
