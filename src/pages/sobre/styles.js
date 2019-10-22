import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80%;
  padding: 40px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

export const Sticky = styled.div`
  position: sticky;
  top: 20px;
`;

export const FunFacts = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  margin: 20px 0;
  padding: 20px;
`;

export const SkillWrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0 40px;

  svg {
    margin: 5px 0 5px 0;
  }
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
    }
  }
`;
