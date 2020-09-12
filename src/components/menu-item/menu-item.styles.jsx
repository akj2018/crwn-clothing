import styled from "styled-components";

export const MenuItemContainer = styled.div`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.25rem;
  margin: 0 7.5px 15px;
  overflow: hidden;
  height: ${({ size }) => (size ? `380px` : `240px`)};

  &:first-child {
    margin-left: 7.5px;
  }

  &:last-child {
    margin-right: 7.5px;
  }

  &:hover {
    cursor: pointer;

    .background-image {
      transform: scale(1.1);
      transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    .content {
      opacity: 0.9;
    }
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  position: absolute;
  height: 100px;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.25rem;
  background-color: gainsboro;
  opacity: 0.7;
`;

export const ContentTitle = styled.h1`
  margin-top: 0;
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 28px;
  color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 20px;
`;
