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

  img {
    margin: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 260px;
  margin: 10px;
  box-shadow:0 .5rem 1rem rgba(0,0,0,.15);
  border-radius: 5px;
  transition: 1s ease-in-out;

  img {
    border-radius: 5px;
  }

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
  border-radius: 2px;
  background-color: #fff;

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
