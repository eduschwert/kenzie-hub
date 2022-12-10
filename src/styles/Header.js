import styled from "styled-components"

export const SHeader = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-top: ${({ marginTop }) => marginTop};

  margin: ${({ margin }) => margin};

  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};

  height: ${({ height }) => height};
`
