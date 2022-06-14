import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Wrapper } from './styles'

const MenuToggle = ({ isOpen, onClick }) => (
   <Wrapper onClick={ onClick } isOpen={ isOpen }>
      { isOpen ? <FontAwesomeIcon icon={ faTimes }/> : <FontAwesomeIcon icon={ faBars }/> }
   </Wrapper>
)

export default MenuToggle