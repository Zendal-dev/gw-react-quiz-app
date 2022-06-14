import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
export const Image = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-top: 20px;
  width: 1000px;
`;
export const Text = styled.div`
  background-color: #202020;
  color: white;
  padding: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  margin-bottom: 100px;
  > h1 {
    font-size: 60px;
  }
  > h5 {
    font-size: 20px;
    line-height: 1.3;
  }
`;
