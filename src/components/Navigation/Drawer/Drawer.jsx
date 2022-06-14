import { Fragment } from 'react'
import { Wrapper } from './styles'
import { NavLink } from 'react-router-dom'
import Backdrop from '../Backdrop/Backdrop'

const Drawer = ({ isOpen, onClose, isAuthorized }) => {

   let links = []

   if (isAuthorized) {
      links = [
         { text: 'Головна', to: '/', exact:  true },
         { text: 'Особистий кабінет', to: '/me', exact:  true },
         { text: 'Створити тест', to: '/create-quiz', exact:  true },
         { text: 'Список тестів', to: '/quiz-list', exact:  true },
         { text: 'Вихід', to: '/logout', exact:  true },
         
         
      ]
   } else {
      links = [
         { text: 'Авторизація', to: '/auth', exact: false }
      ]
   }

   const linkList = links.map((link, index) => (
      <NavLink
         onClick={ onClose }
         key={ index }
         to={ link.to }
      >
         { link.text }
      </NavLink>
   ))

   return (
      <Fragment>
         { isOpen && <Backdrop onClick={ onClose } /> }
         <Wrapper isOpen={ isOpen }>
            { linkList }
         </Wrapper>
      </Fragment>
   )
}

export default Drawer