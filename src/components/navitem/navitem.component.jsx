import './navitem.styles.scss'

const NavItem = ({ category, page, setPage, path }) => {

    let style = page === path ? {
        backgroundColor: "white",
        color: "black"
    }: null

    return (
        <div className='nav-item' style={style} onClick={() => setPage(path)}><b>{category}</b></div>
    )
}

export default NavItem