import styled, { css } from "styled-components";

const mainColor = "grey";
const subColor = "black";

const shrinkLabels = css`
  top: -18px;
  font-size: 15px;
  color: ${mainColor};
`;

export const FormGroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 20px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
    background-color: rgba(208, 225, 236, 0.911);
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }

  &:focus ~ label {
    ${shrinkLabels}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 20px;
  letter-spacing: 0.1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabels}
  }
`;
