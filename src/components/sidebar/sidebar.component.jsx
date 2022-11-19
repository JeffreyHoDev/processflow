import './sidebar.style.scss'

import { categories } from '../../data'
import NavItem from '../navitem/navitem.component'

const Sidebar = () => {
    return (
        <>
            <div className='sidebar-container'>
                <nav className='sidenavbar'>
                    {
                        categories.map((category, index) => <NavItem key={`category-${index}`} category={category}/>)
                    }
                </nav>
            </div>
        </>
    )
}   

export default Sidebar