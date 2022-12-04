import styled, { css } from "styled-components"

import { Link } from "react-router-dom"

export const SButton = styled.button`
  border: none;
  border-radius: var(--radius-1);

  transition: 200ms ease-in-out;

  margin-bottom: ${({ marginBottom }) => marginBottom};

  width: ${({ width }) => width};

  ${({ buttontype }) => {
    if (buttontype === "primary") {
      return css`
        height: 4.8rem;

        padding: 0 2.2rem;

        font-size: 1.6rem;
        font-weight: 500;
      `
    } else if (buttontype === "secondary") {
      return css`
        height: 3.2rem;

        padding: 0 1.6rem;

        font-size: 1.2rem;
        font-weight: 600;
      `
    }
  }}

  ${({ buttoncolor }) => {
    switch (buttoncolor) {
      case "primary":
        return css`
          background-color: var(--color-primary);
          color: var(--color-white);

          &:hover {
            background-color: var(--color-primary-focus);
          }
          &:disabled {
            background-color: var(--color-primary-negative);
          }
        `
      case "grey-1":
        return css`
          background-color: var(--color-grey-1);
          color: var(--color-white);

          &:hover {
            background: var(--color-grey-2);
          }
        `
      case "grey-3":
        return css`
          background-color: var(--color-grey-3);
          color: var(--color-grey-0);

          &:hover {
            background-color: var(--color-grey-2);
          }
        `
      default:
    }
  }}
`
export const SLink = styled(Link)`
  border: none;
  border-radius: var(--radius-1);

  transition: 200ms ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: ${({ marginBottom }) => marginBottom};

  width: ${({ width }) => width};

  ${({ buttontype }) => {
    if (buttontype === "primary") {
      return css`
        height: 4.8rem;

        padding: 0 2.2rem;

        font-size: 1.6rem;
        font-weight: 500;
      `
    } else if (buttontype === "secondary") {
      return css`
        height: 3.2rem;

        padding: 0 1.6rem;

        font-size: 1.2rem;
        font-weight: 600;
      `
    }
  }}

  ${({ buttoncolor }) => {
    switch (buttoncolor) {
      case "primary":
        return css`
          background-color: var(--color-primary);
          color: var(--color-white);

          &:hover {
            background-color: var(--color-primary-focus);
          }
          &:disabled {
            background-color: var(--color-primary-negative);
          }
        `
      case "grey-1":
        return css`
          background-color: var(--color-grey-1);
          color: var(--color-white);

          &:hover {
            background: var(--color-grey-2);
          }
        `
      case "grey-3":
        return css`
          background-color: var(--color-grey-3);
          color: var(--color-grey-0);

          &:hover {
            background-color: var(--color-grey-2);
          }
        `
      default:
    }
  }}
`
