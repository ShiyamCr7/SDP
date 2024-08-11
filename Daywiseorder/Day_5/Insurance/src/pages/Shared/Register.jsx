// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const { name, email, password, confirmPassword } = formData;

//     if (name && email && password && confirmPassword) {
//       if (password === confirmPassword) {
//         toast.success('Registration successful!');
//       } else {
//         toast.error('Passwords do not match!');
//       }
//     } else {
//       toast.error('Please fill in all fields!');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.registerContainer}>
//         <div style={styles.formContainer}>
//           <h1 style={styles.title}>Create Your PolicyChunk Account</h1>
//           <p style={styles.subtitle}>Join us and manage your policies with ease!</p>
//           <form style={styles.form} onSubmit={handleRegister}>
//             <label htmlFor="name" style={styles.label}>Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               style={styles.input}
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />

//             <label htmlFor="email" style={styles.label}>Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               style={styles.input}
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />

//             <label htmlFor="password" style={styles.label}>Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               style={styles.input}
//               value={formData.password}
//               onChange={handleInputChange}
//               required
//             />

//             <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               style={styles.input}
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//               required
//             />

//             <div style={styles.buttons}>
//               <button type="submit" style={styles.registerButton}>Register</button>
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
//   registerContainer: {
//     display: 'flex',
//     width: '800px',
//     height: '600px',
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
//   buttons: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: '20px',
//   },
//   registerButton: {
//     padding: '10px 20px',
//     backgroundColor: '#ff00ff',
//     border: 'none',
//     borderRadius: '5px',
//     color: '#fff',
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

// export default Register;



















import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        toast.success('Registration successful!');
        setTimeout(() => {
          navigate('/login'); // Redirect to the login page after a delay
        }, 2000); // Delay of 2 seconds before redirecting
      } else {
        toast.error('Passwords do not match!');
      }
    } else {
      toast.error('Please fill in all fields!');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.registerContainer}>
        <div style={styles.formContainer}>
          <h1 style={styles.title}>Create Your PolicyChunk Account</h1>
          <p style={styles.subtitle}>Join us and manage your policies with ease!</p>
          <form style={styles.form} onSubmit={handleRegister}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              style={styles.input}
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              style={styles.input}
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              style={styles.input}
              value={formData.password}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              style={styles.input}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />

            <div style={styles.buttons}>
              <button type="submit" style={styles.registerButton}>Register</button>
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
  registerContainer: {
    display: 'flex',
    width: '800px',
    height: '600px',
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
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  registerButton: {
    padding: '10px 20px',
    backgroundColor: '#ff00ff',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
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

export default Register;
