import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 36%;
    border-radius: 0.2rem;
  }
`;

export const ItemDetailsContainer = styled.div`
  width: 64%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const NameContainer = styled.span`
  font-size: 16px;
  font-weight: bolder;
`;

export const PriceContainer = styled.span``;
