import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #f0f8ff;

  .shopping-icon {
    width: 40px;
    height: 40px;
    color: aliceblue;
  }
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  bottom: 16px;
`;
