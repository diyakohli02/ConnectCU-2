import { NavLink } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const Header = () => {
    const { user, logout } = useAuth();

    const getInitials = (name) => {
        if (!name) return '';
        const parts = name.split(' ');
        return parts.map(part => part[0]).join('').toUpperCase();
    };

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
                                <div className="user-welcome">
                                    <div className="user-avatar-badge">{getInitials(user.name)}</div>
                                    <span>Hi, {user.name}</span>
                                </div>
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
