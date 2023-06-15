import styled from 'styled-components';
import Image from 'next/image'
import background from '../public/assets/backgrounds/home_background.png';

export const Bottom = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f2f2f2;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 20px 0;
  padding: 20px;
`;

export const ContactWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 20px;
`;

export const InstaWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url(${background.src}) no-repeat center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: scroll;
  width: 100%;
  height: 100%;
`;

export const HeaderBlurb = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 100vh;

  @media (max-width: 800px) {
    flex-direction: column;
    height: 100%;

  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  h1, h2 {
    margin: 0;
    padding: 10px;
    font-weight: 600;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 20px;
    color: #aaa;
  }
`;

export const Headshot = styled(Image)`
  margin: 15px;
  border-radius: 50%;
  max-width: 150px;
  width: 100%;
  height: 150px;
  transition: 0.2s;
  background: #eee;

  &:hover {
    box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.18), 0 0px 12px 0 rgba(0, 0, 0, 0.15);
    opacity: 0.8;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-right: 100px;

  @media (max-width: 800px) {
    margin-right: 0;
  }
`;