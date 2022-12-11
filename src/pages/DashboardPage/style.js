import styled from "styled-components"

export const SDivUserInformationsBox = styled.div`
  border-top: 0.1rem solid var(--color-grey-1);
  border-bottom: 0.1rem solid var(--color-grey-1);

  height: 11.8rem;

  margin-top: 7.2rem;
  margin-bottom: 3rem;

  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media (min-width: 400px) {
    div {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`

export const SDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;
`
export const SUl = styled.ul`
  background-color: var(--color-grey-3);

  border-radius: var(--radius-1);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  padding: 2.2rem 0.85rem;
  @media (min-width: 400px) {
    padding: 2.2rem 1.9rem;
  }

  margin-bottom: 2rem;

  li {
    width: 100%;
  }

  li > button {
    width: 100%;

    transition: 200ms ease-in-out;

    background-color: var(--color-grey-4);

    border: none;
    border-radius: var(--radius-1);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.2rem;
  }
  li > button > small {
    transition: 200ms ease-in-out;
  }

  button:hover {
    background-color: var(--color-grey-2);
  }
  button:hover small {
    color: var(--color-grey-0);
  }
`
