import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 4px solid #f7e705;
  align-items: center;
  background-color: rgb(19, 11, 37);
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
`;

export const LogoContainer = styled(Link)`
  margin-left: 1rem;
`;

export const OptionsContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionContianerStyles = css`
  padding: 10px 20px;
  font-size: 1.5rem;
  color: whitesmoke;
  cursor: pointer;
`;

export const OptionLink = styled(Link)`
  ${OptionContianerStyles}
`;
