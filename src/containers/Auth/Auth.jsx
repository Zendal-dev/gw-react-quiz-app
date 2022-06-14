import AuthForm from '../../components/AuthForm/AuthForm'
import * as S from './styles'
import { connect } from 'react-redux'
import { auth } from '../../redux/actions/auth'
import { Header } from '../../components/common/styles/Header'

const Auth = ({ auth }) => {
   return (
      <S.Wrapper>
         <Header>Авторизація</Header>
         <S.Container>
            <AuthForm auth={ auth } />
         </S.Container>
      </S.Wrapper>
   )
}

const mapDispatchToProps = {
   auth
}

export default connect(
   null,
   mapDispatchToProps
)(Auth)