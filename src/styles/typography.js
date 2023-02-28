import styled from "styled-components";

import BaseTitle from "./components/BaseTitle";
import BaseText from "./components/BaseText";

export const STitle = styled(BaseTitle)`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeigth }) => fontWeigth};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};

  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

export const SText = styled(BaseText)`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeigth }) => fontWeigth};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};

  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;
