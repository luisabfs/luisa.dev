import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 80%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 260px;
  margin: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  transition: 1s ease-in-out;

  &:hover {
    img {
      filter: blur(1.5px);
    }

    div {
      visibility: visible;
    }
  }
`;

export const CardDetails = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  visibility: hidden;
  align-items: center;
  justify-content: space-between;

  padding: 10px 20px;
  border-radius: 4px;
  background-color: #fff;
  opacity: 0.9;

  a {
    text-decoration: underline;
    color: #000;

    &:hover {
      color: #88c6dd;
    }
  }

  h2 {
    font-size: 14px;
    margin: 1rem 0;
  }

  span {
    font-size: 11px;
    letter-spacing: 1.11px;
  }
`;
