import styled from 'styled-components';

export const Container = styled.header`
  background: var(--yellow);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;

  img {
    height: 3rem;
    width: 3rem;

    margin-right: 10px;
  }

  h1 {
    color: var(--text-title);
  }
`;
