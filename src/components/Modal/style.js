import styled from "styled-components"

export const SDiv = styled.div`
  background-color: rgba(18, 18, 20, 0.5);

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;

  overflow: hidden;

  div {
    width: 36.9rem;
    max-width: 100%;

    margin: 0 1.2rem;
  }

  div > div:nth-child(1) {
    height: 5rem;

    border-radius: var(--radius-1) var(--radius-1) 0px 0px;

    background-color: var(--color-grey-2);

    padding: 0 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const ButtonX = styled.button`
  background: none;
  border: none;

  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 1.6rem;
  color: var(--color-grey-1);
`
