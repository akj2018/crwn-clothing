import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      display: flex;
      opacity: 0.85;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: center;
  border-bottom: 3px solid orange;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  background-color: #0b0c10;
  color: whitesmoke;
  padding-left: 7px;
  padding-right: 7px;
  box-sizing: border-box;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
`;

export const NameContainer = styled.span`
  width: 90%;
  letter-spacing: 0.08rem;
`;

export const PriceContainer = styled.span`
  width: 10%;
`;

export const AddButton = styled(CustomButton)`
  width: 85%;
  opacity: 0.7;
  position: absolute;
  top: 245px;
  display: none;
`;
