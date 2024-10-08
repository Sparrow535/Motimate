import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProfile = () => {
  const [username, setUsername] = useState('Pelden2002');
  const [email, setEmail] = useState('12230026.gcit@rub.edu.bt');
  const [profilePic, setProfilePic] = useState('https://via.placeholder.com/150');
  const [newProfilePic, setNewProfilePic] = useState(null);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfilePic(URL.createObjectURL(file));
    }
  };

  const validateForm = () => {
    if (!username.trim()) {
      toast.error('Username is required.');
      return false;
    }
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSaveChanges = () => {
    if (!validateForm()) {
      return;
    }
    console.log('Profile Updated:', { username, email, newProfilePic: newProfilePic || profilePic });
    toast.success('Profile updated successfully!');
  };

  const handleDeleteUser = () => {
    console.log('User Deleted');
    toast.error('User account deleted successfully!');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        width: '70%',
        maxWidth: '400px',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
        padding: '30px',
        textAlign: 'center',
        border: '1px solid #e9e9e9'
      }}>
        <ToastContainer />

        <h2 style={{
          color: '#7a0bc0',
          fontSize: '26px',
          fontWeight: 'bold',
          marginBottom: '25px'
        }}>
          Edit Profile
        </h2>

        {/* Profile Picture Circle at the Top */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <div style={{
            position: 'relative',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px dashed #7a0bc0'
          }}>
            <img
              src={newProfilePic || profilePic}
              alt="Profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <label
              htmlFor="profilePic"
              style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                backgroundColor: '#7a0bc0',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '50%',
                cursor: 'pointer'
              }}
            >
              <i className="fas fa-camera"></i>
            </label>
            <input
              type="file"
              id="profilePic"
              style={{ display: 'none' }}
              accept="image/*"
              onChange={handleProfilePicChange}
            />
          </div>
        </div>

        {/* Username and Email Input with dashed borders */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="username" style={{
            display: 'block',
            color: '#555',
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '5px'
          }}>
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#f0f0f0',
              borderRadius: '10px',
              border: '2px dashed #7a0bc0',
              color: '#333',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{
            display: 'block',
            color: '#555',
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '5px'
          }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#f0f0f0',
              borderRadius: '10px',
              border: '2px dashed #7a0bc0',
              color: '#333',
              outline: 'none'
            }}
          />
        </div>

        {/* Change Profile Picture Section */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="newProfilePic" style={{
            display: 'block',
            color: '#555',
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '5px'
          }}>
            Change Profile Picture
          </label>
          <input
            type="file"
            id="newProfilePic"
            accept="image/*"
            onChange={handleProfilePicChange}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#f0f0f0',
              borderRadius: '10px',
              border: '2px dashed #7a0bc0',
              color: '#333',
              outline: 'none'
            }}
          />
        </div>

        {/* Buttons: Delete, Cancel, and Save */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button
            onClick={handleDeleteUser}
            style={{
              backgroundColor: '#FFE0E0',
              color: '#d9534f',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Delete
          </button>

          <div>
            <button
              onClick={() => toast.info('Canceled')}
              style={{
                backgroundColor: '#E9E9E9',
                color: '#555',
                padding: '10px 20px',
                marginRight: '10px',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSaveChanges}
              style={{
                backgroundColor: '#000000', // Black Save button
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
