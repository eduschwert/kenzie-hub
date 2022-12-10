import styled from "styled-components"

const Container = styled.div`
  max-width: 100%;

  margin: 0 auto;

  padding: 0 1.2rem;
`

export const ContainerRegister = styled(Container)`
  width: 39.5rem;

  @media (min-height: 1100px) {
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const ContainerLogin = styled(Container)`
  width: 39.5rem;

  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContainerDashboard = styled(Container)`
  width: 80rem;

  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};

  position: ${({ position }) => position};
  top: ${({ top }) => top};

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  background-color: ${({ backgroundColor }) => backgroundColor};
`
