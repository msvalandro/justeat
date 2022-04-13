import styled from 'styled-components';

export const Container = styled.li`
  background: var(--shape);
  padding: 1rem;
  border-radius: 1rem;

  display: flex;

  img {
    height: 4rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  strong {
    color: var(--text-title);
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;
