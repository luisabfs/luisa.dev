import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  background: url(${(props) => props.bg}) no-repeat center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: scroll;
  width: 100%;
  height: 100%;
`;
