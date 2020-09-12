import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
  }
`;

export const NameContainer = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled.span`
  width: 23%;
  display: flex;
`;

export const ArrowContainer = styled.span`
  cursor: pointer;
`;

export const ValueContainer = styled.span`
  margin: 0 18px;
`;

export const PriceContainer = styled.span`
  width: 23%;
`;

export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;
