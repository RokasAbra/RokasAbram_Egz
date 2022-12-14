import "./bootstrap.css";
import "./App.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { login, logout, authConfig } from "./Functions/auth";
import Front from "./Components/Front/Front";
import Back from "./Components/Back/Back";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  function RequireAuth({ children, role }) {
    const [view, setView] = useState(<h2>Please wait...</h2>);
  
    useEffect(() => {
      axios
        .get("http://localhost:3003/login-check?role=" + role, authConfig())
        .then((res) => {
          if ("ok" === res.data.msg) {
            
            setView(children);
          } else {
            setView(<Navigate to="/login" replace />);
          }
        });
    }, [children, role]);
  
    return view;
  }

  
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth role="user">
            <Front />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route
        path="/admin"
        element={
          <RequireAuth role="admin">
            <Back show="admin" />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/master"
        element={
          <RequireAuth role="admin">
            <Back show="idea" />
          </RequireAuth>
        }
      />
     
    </Routes>
  </BrowserRouter>
  );
}

// //////////////////REGISTER PAGE////////////
// function RegisterPage() {
//   const navigate = useNavigate();

//   const [user, setUser] = useState('');
//   const [pass, setPass] = useState('');
  

//   const doRegister = () => {
//     axios.post('http://localhost:3003/register', { user, pass }).then((res) => {
//       if ('ok' === res.data.msg) {
//         login(res.data.key);
//         navigate('/', { replace: true });
//       }
//     });
//   };
//   return (
//     <>
//       <div className='login'>
//         <h2 className='heading'>CREATE ACCOUNT</h2>
//         <div className='label'>
//           Name:
//           <input
//             type='text'
//             value={user}
//             onChange={(e) => setUser(e.target.value)}
//           />
//         </div>
       
//         <div className='label'>
//           Password:
//           <input
//             type='password'
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//           />
//         </div>
//         <button
//           onClick={doRegister}>
//           Register
//         </button>
//         <Link
//           to='/login'
//           className='link'>
//           Login
//         </Link>
//       </div>
//     </>
//   );
// }


function LoginPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const doLogin = () => {
    axios.post("http://localhost:3003/login", { user, pass }).then((res) => {
      if ("ok" === res.data.msg) {
        login(res.data.key);
        navigate("/", { replace: true });
      }
    });
  };
  return (
    
    <div className="container login-container">
    <div className="row">
      <div className="col-12 login-form">
        <h2>Welcome!</h2>
    <div className="login">
      <div>Username: <input className="input" type="text" value={user} onChange={e => setUser(e.target.value)}></input></div>
      <div>Password: <input className="input" type="password" value={pass} onChange={e => setPass(e.target.value)}></input></div>
      <button className="btn buttons" onClick={doLogin}>Log in</button>
      {/* <small>name: admin,  password: 123</small><br></br> */}
      </div>
    </div>
    </div>
    </div>
  );
 
}

function LogoutPage() {
  useEffect(() => logout(), []);
  return <Navigate to="/login" replace />;
}

export default App;
