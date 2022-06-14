import styled from "styled-components";

export const AccountInfo = styled.div`
  display: flex;
  height: 150px;
  width: 100%;
  margin-bottom: 50px;
`;
export const AccountLetter = styled.div`
  font-size: 80px;
  color: white;
  width: 120px;
  background-color: #202020;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  justify-content: center;
  text-align: center;
  padding-top: 25px;
`;

export const AccountOther = styled.div`
  padding-left: 20px;

  > h1 {
    font-size: 50px;
    padding-bottom: 10px;
  }
  > h2 {
    font-size: 35px;
    padding-bottom: 10px;
  }
  >h3{
    font-size: 30px;
  }
`;
