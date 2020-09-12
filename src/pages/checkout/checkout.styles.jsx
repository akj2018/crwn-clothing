import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 70%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  margin-bottom: 50px;
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const CheckoutHeaderBlockContainer = styled.div`
  text-transform: capitalize;
  font-weight: bolder;
  font-size: 1.2rem;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarningContainer = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: red;
  ul {
    list-style: none;
    padding: 0;

    li {
      color: grey;
      margin: 5px 0px;
    }
  }
`;
