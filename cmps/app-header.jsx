const { Link, NavLink, withRouter } = ReactRouterDOM


function _AppHeader(props) {
    // console.log('props from header', props)

    return <section className="app-header">
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/books">Our Books</NavLink>
        </nav>
    </section>
}

export const AppHeader = withRouter(_AppHeader)