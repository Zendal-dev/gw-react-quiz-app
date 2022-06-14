import * as S from "./styles";

import { Header } from "../../components/common/styles/Header";
import authimg from "../../images/Kabinet.png";
import MenuList from "../../components/MenuList/MenuList";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
const Kabinet = ({ auth }) => {
  return (
    <S.Wrapper>
      <Header>
        <img src={authimg} />
      </Header>
      <S.Container>
        <AccountInfo />
        <MenuList />
      </S.Container>
    </S.Wrapper>
  );
};

export default Kabinet;
