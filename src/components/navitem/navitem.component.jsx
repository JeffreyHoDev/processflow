import './navitem.styles.scss'

import { useState } from 'react'

const NavItem = ({ category }) => {

    const [clicked, setClicked] = useState(false)

    return (
        <div className='nav-item'>{category}</div>
    )
}

export default NavItem