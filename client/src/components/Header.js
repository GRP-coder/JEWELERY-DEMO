import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiLogOut, FiMenu, FiChevronDown, FiSettings, FiMoon, FiSun } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Header.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setUserMenuOpen(false);
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            ✨ Jewelry Shop
          </Link>

          <nav className={`nav ${menuOpen ? 'active' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <Link to="/cart" className="cart-icon">
              <FiShoppingCart size={24} />
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </Link>

            {user ? (
              <div className="user-profile-container">
                <button 
                  className="user-profile-btn"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  {user.profileImage ? (
                    <img 
                      src={user.profileImage} 
                      alt={user.name}
                      className="user-avatar"
                    />
                  ) : (
                    <div className="user-avatar-initials">
                      {getInitials(user.name)}
                    </div>
                  )}
                  <span className="user-name">{user.name}</span>
                  <FiChevronDown size={18} className={`chevron ${userMenuOpen ? 'open' : ''}`} />
                </button>

                {userMenuOpen && (
                  <div className="user-dropdown-menu">
                    <div className="user-info">
                      {user.profileImage ? (
                        <img 
                          src={user.profileImage} 
                          alt={user.name}
                          className="user-dropdown-avatar"
                        />
                      ) : (
                        <div className="user-dropdown-avatar-initials">
                          {getInitials(user.name)}
                        </div>
                      )}
                      <div>
                        <p className="user-dropdown-name">{user.name}</p>
                        {user.email && <p className="user-dropdown-email">{user.email}</p>}
                      </div>
                    </div>

                    <div className="dropdown-divider"></div>

                    <Link 
                      to="/profile" 
                      className="dropdown-item"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <FiUser size={18} />
                      <span>My Profile</span>
                    </Link>

                    <Link 
                      to="/settings" 
                      className="dropdown-item"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <FiSettings size={18} />
                      <span>Settings</span>
                    </Link>

                    <div className="dropdown-divider"></div>

                    <button 
                      className="dropdown-item logout-item"
                      onClick={handleLogout}
                    >
                      <FiLogOut size={18} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="btn btn-secondary">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </div>
            )}
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <FiMenu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
