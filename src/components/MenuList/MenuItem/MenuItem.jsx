import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
const MenuItem = ({ text, color, path }) => {
  return (
    <Link to={path}>
      <S.MenuItem color={color}>{text} </S.MenuItem>
    </Link>
  );
};

export default MenuItem;
