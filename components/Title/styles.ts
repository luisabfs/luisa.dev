import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1 {
  text-align: center;
  color: ${({ color }) => color};
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
