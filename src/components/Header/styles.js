import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url(${(props) => props.bg}) no-repeat center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: scroll;
  width: 100%;
  height: 100%;
`;

export const Blurb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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

export const Headshot = styled.img`
  margin: 15px;
  border-radius: 50%;
  max-width: 150px;
  width: 100%;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.18), 0 0px 12px 0 rgba(0, 0, 0, 0.15);
    opacity: 0.8;
  }
`;

export const SocialWrap = styled.div`
  display: flex;
  padding: 30px;
  margin-bottom: 20px;

  a {
    text-decoration: none;

    img {
      padding: 12px;
    }
  }
`;
