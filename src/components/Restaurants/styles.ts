import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: var(--text-title);
  }

  ul {
    list-style: none;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;

    li {
    }
  }
`;

export const InputBox = styled.div`
  position: relative;

  margin-top: -2rem;

  input {
    height: 4rem;
    width: 40rem;

    border: 1px solid var(--text-title);
    border-radius: 8px;

    margin-bottom: 4rem;

    padding: 0 1.5rem;

    font-size: 16px;
    color: var(--text-title);

    @media (max-width: 1080px) {
      width: 30rem;
    }

    @media (max-width: 720px) {
      width: 20rem;
    }
  }

  img {
    height: 2rem;

    position: absolute;
    right: 1rem;
    top: 0;

    transform: translateY(50%);

    cursor: pointer;
  }
`;
