import React from "react";
import * as S from "./styles";
import { options } from "../../utils/menulistoptions";
import MenuItem from "./MenuItem/MenuItem";
const MenuList = () => {
  return (
    <S.MenuList>
      {options.map((option, index) => {
        return <MenuItem key={index} {...option}></MenuItem>;
      })}
    </S.MenuList>
  );
};

export default MenuList;
