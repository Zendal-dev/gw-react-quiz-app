import * as S from "./styles2";
import main from "./images/Main.png";
import { Header } from "./components/common/styles/Header";
import news from "./images/News.png";
import React from "react";

import MenuList from "./components/MenuList/MenuList";

const MainPage = () => {
  return (
    <S.Wrapper>
      <Header>
        <img src={main} />
      </Header>
      <S.Container>
        <MenuList />
        <S.Image src={news} />
        <S.Text>
          <h1>Оголошення</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at pharetra sapien. Suspendisse nec felis at lectus scelerisque
            rutrum. Fusce pharetra mollis mi eget ultricies. Vivamus in sagittis
            justo. Maecenas ac varius lorem. Vivamus eu pretium tortor.
            Phasellus semper lectus sed massa iaculis pulvinar.{" "}
          </h5>
        </S.Text>
      </S.Container>
    </S.Wrapper>
  );
};

export default MainPage;
