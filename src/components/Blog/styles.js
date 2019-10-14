import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 80%;
  margin: 40px 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
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
  /* background: url(${(props) => props.src}) no-repeat center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: scroll; */
  transition: .2s ease-in-out;

  &:hover {
    img {
      filter: blur(1px);
      transition: .2s ease-in-out;
    }

    div {
      transition: .3s ease-in-out;
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
  padding: 20px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  background-color: #fff;

`;
