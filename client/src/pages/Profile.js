import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Profile.css';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

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
    <div className="profile-page">
      <div className="container">
        <div className="profile-card">
          <div className="profile-header">
            {user.profileImage ? (
              <img 
                src={user.profileImage} 
                alt={user.name}
                className="profile-avatar"
              />
            ) : (
              <div className="profile-avatar-initials">
                {getInitials(user.name)}
              </div>
            )}
            <div className="profile-info">
              <h1>{user.name}</h1>
              {user.email && <p className="email">{user.email}</p>}
              {user.phone && <p className="phone">📱 {user.phone}</p>}
            </div>
          </div>

          {user.address && (
            <div className="profile-section">
              <h2>Address</h2>
              <p>{user.address.street}</p>
              <p>
                {user.address.city}, {user.address.state} {user.address.zipCode}
              </p>
              <p>{user.address.country}</p>
            </div>
          )}

          <div className="profile-actions">
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/settings')}
            >
              Edit Profile
            </button>
            <button 
              className="btn btn-danger"
              onClick={() => {
                logout();
                navigate('/');
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
