import { connect } from 'react-redux'
import Navigation from '../../components/Navigation/Navigation'
import * as S from './styles'

const Layout = ({ children, isAuthorized }) => (
   <S.Layout>
      <Navigation isAuthorized={ isAuthorized } />

      <main>
         {/*<div>block</div>*/}
         { children }
      </main>
   </S.Layout>
)

const mapStateToProps = state => ({
   isAuthorized: !!state.auth.token
})

export default connect(
   mapStateToProps,
   null
)(Layout)
