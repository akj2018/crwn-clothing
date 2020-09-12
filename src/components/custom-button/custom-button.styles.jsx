import styled, { css } from "styled-components";

const isGoogleSignInStyles = css`
  background-color: #4285f4;
  color: aliceblue;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return isGoogleSignInStyles;
  }

  if (props.inverted) {
    return invertedButtonStyles;
  }
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 45px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border-radius: 0.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  ${getButtonStyles}
`;
