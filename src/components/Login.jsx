
import React, { useState, useContext } from 'react';
import userContext from '../context/userContext';

function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setData } = useContext(userContext);

  function handleSubmit(e) {
    e.preventDefault();
    setData({ userName, password });
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <div style={styles.icon}>✦</div>

        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Log in to continue</p>


        
        <input
          type="text"
          value={userName}
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}

          style={styles.input}
          required
        />

        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}

          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Log In <span>→</span>
        </button>

        <p style={styles.footer}>Powered by WeLLWiN Technologies</p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '30px 16px',
    background: '#f0fdfa',
  },
  card: {
    width: '100%',
    maxWidth: '340px',
    padding: '30px',
    background: '#ffffff',
    border: '1px solid #ccfbf1',
    borderRadius: '18px',
    boxShadow: '0 10px 30px rgba(13, 148, 136, 0.09)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  icon: {
    width: '46px',
    height: '46px',
    borderRadius: '14px',
    background: '#ccfbf1',
    color: '#0f766e',
    display: 'grid',
    placeItems: 'center',
    fontSize: '25px',
    margin: '0 auto 6px',
  },
  title: {
    margin: 0,
    textAlign: 'center',
    color: '#134e4a',
    fontSize: '25px',
  },
  subtitle: {
    margin: '0 0 12px',
    textAlign: 'center',
    color: '#64748b',
    fontSize: '14px',
  },
  label: {
    color: '#115e59',
    fontSize: '13px',
    fontWeight: '600',
  },
  input: {
    padding: '12px',
    border: '1px solid #99f6e4',
    borderRadius: '9px',
    fontSize: '14px',
    outlineColor: '#0d9488',
    background: '#fafffe',
    color: '#134e4a',
  },
  button: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '13px 16px',
    marginTop: '8px',
    background: '#0f766e',
    color: '#ffffff',
    border: 'none',
    borderRadius: '9px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  footer: {
    margin: '10px 0 0',
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: '11px',
  },
};

export default Login;
