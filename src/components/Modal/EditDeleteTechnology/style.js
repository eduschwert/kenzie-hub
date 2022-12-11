import styled from "styled-components"

export const SDiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 325px) {
    flex-direction: row;
  }
`
