import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  padding: 40px 0;
  animation: ${appearFromLeft} 1s;

   /* regular phones and below */
   @media (max-width: 480px) {
    padding: 20px 0;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 600px;
  }

   /* regular phones and below */
   @media (max-width: 480px) {
    margin: 0 20px 20px 20px;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  margin-right: auto;

  @media (max-width: 1180px) {
    max-width: 800px;
    margin: 0 0 20px 0;
  }

  @media (max-width: 768px) {
    max-width: 600px;
  }

  /* regular phones and below */
  @media (max-width: 480px) {
    margin: 0 20px 20px 20px;
  }
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CaptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    width: 100px;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    padding: 7px;
    border-bottom: 2px solid #656565;
    margin-bottom: 20px;
  }

  p {
    display: flex;
    flex-direction: column;

    a {
      color: #88c6dd;
      font-weight: 700;
      text-decoration: none;
      margin-bottom: 5px;

      &:hover {
        color: #6594a5;
      }
    }

    span {
      font-size: 15px;
      letter-spacing: 1.11px;
      margin-top: 5px;

      &:not(:last-of-type) {
        margin-bottom: 15px;
      }
    }
  }

  &:not(:first-of-type) {
    margin-top: 20px;
  }
`;
