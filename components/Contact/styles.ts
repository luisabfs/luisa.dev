import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const WrapCaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  h1 {
    text-align: center;
  }

  img {
    margin: 10px;
  }

  /* regular phones and below */
  @media (max-width: 424px) {
    h1 {
      font-size: 24px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  flex-wrap: wrap;
  justify-content: center;

  input, textarea {
    outline: 0;
    font-family: 'Montserat', sans-serif;
    background-color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #444;
    margin: 10px;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.05);
    resize: none;
  }

  textarea {
    height: 100px;
  }
`;

export const Button = styled.button`
  background-color: ${colors.pink};
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  border: 0;
  border-radius: 4px;
  margin: 20px 10px;
  padding: 10px;
  justify-content: stretch;
  transition: .2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
