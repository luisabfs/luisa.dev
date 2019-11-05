import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  padding: 40px 0;
  width: 100%;
  height: 100%;
`;

export const WrapProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 1024px) {
    justify-content: center;
  }

   /* regular phones and below */
   @media (max-width: 480px) {
    padding: 20px 0;
  }
`;

export const WrapCaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0;

  h1 {
    text-align: center;
  }

  img {
    margin: 10px;
  }

  /* regular phones and below */
  @media (max-width: 424px) {
    h1 {
      font-size: 24px;
    }
  }
`;
