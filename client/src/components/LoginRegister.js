import React, { useState } from 'react';

function LoginRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        // Realiza una solicitud POST al backend para iniciar sesión
        const response = await fetch('http://localhost:5000/loginregister', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          const token = data.token;
          // Guarda el token en el estado o en las cookies (según tu preferencia)
          console.log('Token recibido:', token);
        } else {
          console.error('Error al iniciar sesión');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };
  
    return (
      <div>
        <h2>Iniciar Sesión</h2>
        <input
          type="text"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </div>
    );
  }
  
  export default LoginRegister;