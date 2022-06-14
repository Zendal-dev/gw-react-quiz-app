import styled, { css } from "styled-components";

export const MenuItem = styled.a`
  border-radius: 10px;
  background-color: ${({ color }) => color};
  width: 300px;
  height: 50px;
  margin-right: 50px;
  display: flex;
  padding-bottom: 5px;
  align-items: center;
  justify-content: center;

    color: white;
  font-size: 25px;
`;
