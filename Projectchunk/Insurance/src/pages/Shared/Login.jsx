// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();

   
//     if (email && password) {
//       toast.success('Login successful!');
//     } else {
//       toast.error('Please enter both email and password!');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.loginContainer}>
//         <div style={styles.formContainer}>
//           <h1 style={styles.title}>Welcome back to PolicyChunk Login</h1>
//           <p style={styles.subtitle}>It's great to have you back!</p>
//           <form style={styles.form} onSubmit={handleLogin}>
//             <label htmlFor="email" style={styles.label}>Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               style={styles.input}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <label htmlFor="password" style={styles.label}>Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               style={styles.input}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <div style={styles.options}>
//               <label style={styles.checkboxContainer}>
//                 <input type="checkbox" style={styles.checkbox} />
//                 Remember me?
//               </label>
//               <a href="#" style={styles.forgotPassword}>Forgot password?</a>
//             </div>

//             <div style={styles.buttons}>
//               <button type="submit" style={styles.loginButton}>Login</button>
//               <button type="button" style={styles.createAccountButton}>Create Account</button>
//             </div>
//           </form>
//         </div>
//         <div style={styles.imageContainer}>
//           <img 
//             src="https://png.pngtree.com/template/20190316/ourmid/pngtree-insurance-logo-vector-image_80261.jpg" 
//             alt="Background" 
//             style={styles.backgroundImage} 
//           />
//         </div>
//       </div>
//       <ToastContainer position="top-right" autoClose={5000} />
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f5f6f7',
//   },
//   loginContainer: {
//     display: 'flex',
//     width: '800px',
//     height: '500px',
//     borderRadius: '10px',
//     overflow: 'hidden',
//     boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#fff',
//   },
//   formContainer: {
//     flex: 1,
//     padding: '40px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   title: {
//     marginBottom: '10px',
//     fontSize: '24px',
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     marginBottom: '20px',
//     fontSize: '16px',
//     color: '#666',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   label: {
//     marginBottom: '5px',
//     fontSize: '14px',
//     color: '#333',
//   },
//   input: {
//     marginBottom: '15px',
//     padding: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     fontSize: '14px',
//   },
//   options: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '20px',
//   },
//   checkboxContainer: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   checkbox: {
//     marginRight: '5px',
//   },
//   forgotPassword: {
//     fontSize: '14px',
//     color: '#007bff',
//     textDecoration: 'none',
//   },
//   buttons: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   loginButton: {
//     padding: '10px 20px',
//     backgroundColor: '#ff00ff',
//     border: 'none',
//     borderRadius: '5px',
//     color: '#fff',
//     fontSize: '14px',
//     cursor: 'pointer',
//   },
//   createAccountButton: {
//     padding: '10px 20px',
//     backgroundColor: 'transparent',
//     border: '2px solid #ff00ff',
//     borderRadius: '5px',
//     color: '#ff00ff',
//     fontSize: '14px',
//     cursor: 'pointer',
//   },
//   imageContainer: {
//     flex: 1,
//   },
//   backgroundImage: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
// };

// export default Login;



















import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      toast.success('Login successful!');
    } else {
      toast.error('Please enter both email and password!');
    }
  };

  const handleCreateAccount = () => {
    navigate('/register'); // Redirect to the register page
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginContainer}>
        <div style={styles.formContainer}>
          <h1 style={styles.title}>Welcome back to PolicyChunk Login</h1>
          <p style={styles.subtitle}>It's great to have you back!</p>
          <form style={styles.form} onSubmit={handleLogin}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div style={styles.options}>
              <label style={styles.checkboxContainer}>
                <input type="checkbox" style={styles.checkbox} />
                Remember me?
              </label>
              <a href="#" style={styles.forgotPassword}>Forgot password?</a>
            </div>

            <div style={styles.buttons}>
              <button type="submit" style={styles.loginButton}>Login</button>
              <button type="button" style={styles.createAccountButton} onClick={handleCreateAccount}>
                Create Account
              </button>
            </div>
          </form>
        </div>
        <div style={styles.imageContainer}>
          <img 
            src="https://png.pngtree.com/template/20190316/ourmid/pngtree-insurance-logo-vector-image_80261.jpg" 
            alt="Background" 
            style={styles.backgroundImage} 
          />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f6f7',
  },
  loginContainer: {
    display: 'flex',
    width: '800px',
    height: '500px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 1,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    marginBottom: '10px',
    fontSize: '24px',
    color: '#333',
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: '20px',
    fontSize: '16px',
    color: '#666',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontSize: '14px',
    color: '#333',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '5px',
  },
  forgotPassword: {
    fontSize: '14px',
    color: '#007bff',
    textDecoration: 'none',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginButton: {
    padding: '10px 20px',
    backgroundColor: '#ff00ff',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
  },
  createAccountButton: {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    border: '2px solid #ff00ff',
    borderRadius: '5px',
    color: '#ff00ff',
    fontSize: '14px',
    cursor: 'pointer',
  },
  imageContainer: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default Login;






