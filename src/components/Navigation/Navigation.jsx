import MenuToggle from './MenuToggle/MenuToggle'
import Drawer from './Drawer/Drawer'
import { useState } from 'react'

const Navigation = ({ isAuthorized }) => {

   const [isMenuOpen, setIsMenuOpen] = useState(false)

   return (
      <div>
         <MenuToggle
            isOpen={ isMenuOpen }
            onClick={ () => setIsMenuOpen(!isMenuOpen) }
         />
         <Drawer
            isOpen={ isMenuOpen }
            onClose={ () => setIsMenuOpen(!isMenuOpen) }
            isAuthorized={ isAuthorized }
         />
      </div>
   )
}

export default Navigation