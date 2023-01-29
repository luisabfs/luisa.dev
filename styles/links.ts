import styled from 'styled-components';
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 450px;
  background-color: #f2f2f2;

  &:hover{
    opacity: 0.8;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  margin-bottom: 20px;
  margin-top: 10px;
  color: #000;
`;

export const WrapCaption = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Thumb = styled(Image)`
  width: 120px;
  height: 120px;
`;
