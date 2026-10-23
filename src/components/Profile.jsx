
import React, { useContext } from 'react';
import userContext from '../context/userContext';

function Profile() {
    
  const { data } = useContext(userContext);

  if (!data) {
    return (
      <div style={styles.card}>
        <p style={styles.text}>
            Please log in to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Profile</h3>
      <p style={styles.text}>
        Welcome, <strong>{data.userName}</strong>!
      </p>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: '340px',
    margin: '16px auto',
    padding: '20px',
    background: '#ffffff',
    border: '1px solid #ccfbf1',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(13, 148, 136, 0.06)',
  },
  title: {
    color: '#0f766e',
    margin: '0 0 10px',
  },
  text: {
    color: '#475569',
    fontSize: '14px',
    margin: '0',
  },
};

export default Profile;
