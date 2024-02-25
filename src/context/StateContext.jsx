//este componente manejara todas las funciones y compoartira la informacion creada a el contexto de toda la aplicacion
//usamos proptypes para a validacion de los datos de entradas
import PropTypes from "prop-types";
import { useEffect, useReducer, useState } from "react";
import ReducerContext from "./ReducerContext";
import { UserContext } from "../context/UserContext";
import { auth } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";

const StateContext = ({ children }) => {
  //esto sera el estado inicial de la app
  const initialState = {
    isAutenticated: false,
    user: null,
  };
  //vamos a crear una funcion para registrar un usuario en firebase
  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  //vamos a crear la funcion de login en el usuario
  const loginUser = async (email, password) =>
    await signInWithEmailAndPassword(auth, email, password);

  //creamos loa accesos a la pagina de dashboard
  const loginAccess = () => dispatch({ type: "login" });
  const logoutAccess = () => dispatch({ type: "logout" });

  const logout = () => signOut();

  //creamos el inicio de secion con google
  const signInWithGoogle = () => {
    const google = new GoogleAuthProvider();
    return signInWithPopup(auth, google);
  };

  //creamos funcion para un reset de password
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);
  const [user, setUser] = useState()

   //usamos un useeffect para ver el tipo de logeo del usuario es decir si fue mediente google o por correo y password
   useEffect(()=>{
    onAuthStateChanged((stateAuth) => {
      console.log(stateAuth)
      setUser(stateAuth)
    })
  })

  //usamos el reducer para traer la validacion del switch que existe en el ReducerContext
  const [state, dispatch] = useReducer(ReducerContext, initialState);
  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        registerUser,
        loginUser,
        loginAccess,
        logoutAccess,
        logout,
        signInWithGoogle,
        resetPassword,
        user
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default StateContext;

StateContext.propTypes = {
  children: PropTypes.any,
};
