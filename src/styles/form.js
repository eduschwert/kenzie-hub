import styled from "styled-components";

export const SFormBox = styled.form`
  width: 100%;

  background-color: var(--color-grey-3);

  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  border-radius: var(--radius-1);

  display: flex;
  flex-direction: column;

  padding: 3.358rem 1.405rem 0 1.799rem;
  @media (min-width: 400px) {
    padding: 4.2rem 1.757rem 0 2.25rem;
  }

  margin: 2rem 0;
`;

export const SDivInputGroup = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.6rem;

  margin-bottom: ${({ marginBottom }) => marginBottom};
`;
