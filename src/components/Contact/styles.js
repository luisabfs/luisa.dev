import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  padding: 20px;
`;

export const WrapCaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  img {
    margin: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
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
  }
`;

export const Name = styled.input`
`;

export const Email = styled.input`
`;

export const Message = styled.textarea`
  height: 100px;
  resize: none;
`;

export const Button = styled.button`
  background-color: #88c6dd;
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
    background-color: #6594a5;
  }
`;
