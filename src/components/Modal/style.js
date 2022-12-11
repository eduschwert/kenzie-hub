import styled from "styled-components"

export const SDiv = styled.div`
  background-color: rgba(18, 18, 20, 0.5);

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;

  position: fixed;

  form {
    width: 39.3rem;
    max-width: 100%;

    padding: 0 1.2rem;

    margin-top: 11.7rem;

    animation: animateModal 0.3s;

    @keyframes animateModal {
      0% {
        transform: translateY(-30%);
        opacity: 0;
      }

      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  form > div:nth-child(1) {
    height: 5rem;

    border-radius: var(--radius-1) var(--radius-1) 0px 0px;

    background-color: var(--color-grey-2);

    padding: 0 2rem;
    @media (min-width: 400px) {
      padding: 0 1.6rem;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  form > div:nth-child(2) {
    padding: 1.962rem 1.369rem 2.567rem 1.765rem;
    @media (min-width: 400px) {
      padding: 2.445rem 1.707rem 3.2rem 2.2rem;
    }

    background-color: var(--color-grey-3);

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    border-radius: 0 0 var(--radius-1) var(--radius-1);
  }
`

export const SButtonX = styled.button`
  background: none;
  border: none;

  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 1.6rem;
  color: var(--color-grey-1);
`
