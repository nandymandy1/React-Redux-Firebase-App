import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedIn';
import SignedOutLinks from './SignedOut';
import { connect } from 'react-redux';


const Navbar = (props) => {
    const { auth } = props;
    const links = (auth.uid) ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <nav className="nav-wrapper purple darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Mario Plan</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProp = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProp)(Navbar);
