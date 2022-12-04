import styled from "styled-components"

export const SInput = styled.fieldset`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.2rem;

  border: none;

  label {
    font-weight: 400;
    font-size: 1.2rem;
    color: var(--color-grey-0);
  }

  input {
    transition: 200ms ease-in-out;

    outline: none;

    width: 100%;
    height: 4.8rem;

    padding: 0 1.6rem;

    background-color: var(--color-grey-2);

    border: ${({ error }) =>
      error
        ? "0.12rem solid var(--color-negative)"
        : "0.12rem solid var(--color-grey-2)"};

    border-radius: var(--radius-1);

    font-weight: 400;
    font-size: 1.6rem;
    color: var(--color-grey-0);
  }
  input::placeholder {
    color: var(--color-grey-1);
  }
  input:focus {
    border: 0.12rem solid var(--color-grey-0);
  }
`
