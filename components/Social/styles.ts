import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding-top: 24px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 9px;
    border-radius: 6px;

    &:focus-visible {
      outline: 2px solid #f38b9b;
      outline-offset: 2px;
    }

    svg:hover {
      fill: #88c6dd;
    }
  }

  svg { width: 24px; height: 24px; }
`;
