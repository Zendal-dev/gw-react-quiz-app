import AuthForm from "../../components/AuthForm/AuthForm";
import * as S from "./styles";
import { connect } from "react-redux";
import { auth } from "../../redux/actions/auth";
import { Header } from "../../components/common/styles/Header";
import authimg from "../../images/Auth.png";
const Auth = ({ auth }) => {
  return (
    <S.Wrapper>
      <Header>
        <img src={authimg} />
      </Header>
      <S.Container>
        <AuthForm auth={auth} />
      </S.Container>
    </S.Wrapper>
  );
};

const mapDispatchToProps = {
  auth,
};

export default connect(null, mapDispatchToProps)(Auth);
