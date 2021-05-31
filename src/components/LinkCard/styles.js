import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 450px;
  margin-bottom: 30px;
  background-color: #f2f2f2;
  margin-top: 10px;

  &:hover{
    opacity: 0.8;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;
`;

export const WrapCaption = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h2`
  margin-left: 12px;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
`;
