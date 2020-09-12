import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionPageTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionPageItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;

  & > div {
    margin-bottom: 30px;
    width: 20vw;
  }
`;
