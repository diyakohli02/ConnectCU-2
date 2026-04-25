import { NavLink } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <NavLink to="/" className="logo">
                        <div className="logo-icon">CU</div>
                        ConnectCU
                    </NavLink>
                    <div className="nav-links">
                        <NavLink to="/features">Features</NavLink>
                        <NavLink to="/profiles">Students</NavLink>
                        <NavLink to="/communities">Communities</NavLink>
                        <NavLink to="/connect">Connect</NavLink>
                    </div>
                    <div className="auth-buttons">
                        {user ? (
                            <>
                                <span className="user-welcome">Hi, {user.name}</span>
                                <button onClick={logout} className="btn btn-outline">Log Out</button>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login" className="btn btn-outline">Log In</NavLink>
                                <NavLink to="/signup" className="btn btn-primary">Sign Up</NavLink>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
