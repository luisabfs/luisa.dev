import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 40px;

  h1 {
    width: 700px;
    text-align: center;
    padding: 15px;
    font-size: 32px;
    font-weight: 400;
    margin: 20px;
    box-shadow: 0 4px 6px -7px #aaa;
  }

  a {
    width: 120px;
    height: 30px;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    text-align: center;
    color: #000;
    font-size: 18px;
    border-bottom: 3px solid #656565;
    margin: 20px;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #88c6dd;
      border-bottom: 3px solid #88c6dd;
    }
  }

  @media (max-width: 1180px) {
  }

  @media (max-width: 768px) {
    h1 {
      width: 600px;
    }
  }

  /* regular phones and below */
  @media (max-width: 480px) {
    h1 {
      width: 400px;
      font-size: 24px;
    }
  }

  @media (max-width: 425px) {
    h1 {
      width: fit-content;
    }
  }
`;

export const CaptionWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;

  svg {
    padding: 15px;
  }

  span {
    font-size: 20px;
    font-weight: 400;
    margin-left: 10px;
  }

  /* regular phones and below */
  @media (max-width: 480px) {
    flex-direction: column;

    span {
      text-align: center;
    }
  }
`;
