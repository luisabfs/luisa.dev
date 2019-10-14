import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const WrapCaption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background: url(${(props) => props.bg}) no-repeat center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: scroll;
`;

export const WrapProject = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  margin: 0 40px 80px 40px;
`;
