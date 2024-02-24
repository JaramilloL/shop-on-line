//este componente manejara todas las funciones y compoartira la informacion creada a el contexto de toda la aplicacion
//usamos proptypes para a validacion de los datos de entradas 
import PropTypes from 'prop-types'
import { useReducer } from "react"
import ReducerContext from "./ReducerContext"
import { UserContext } from '../context/UserContext'
import { auth } from '../firebase/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const StateContext = ( {children} ) => {
    //esto sera el estado inicial de la app
    const initialState = {
        isAutenticated : false,
        user: null
    }
    //vamos a crear una funcion para registrar un usuario en firebase
    const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    //vamos a crear la funcion de login en el usuario
    const loginUser = async(email, password) => await signInWithEmailAndPassword(auth, email, password);

    //usamos el reducer para traer la validacion del switch que existe en el ReducerContext
    const [state, dispatch] = useReducer(ReducerContext, initialState)
  return (
    <UserContext.Provider value={{
        state,
        dispatch,
        registerUser,
        loginUser
    }}>
        {children}
    </UserContext.Provider>
  )
}

export default StateContext

StateContext.propTypes = {
    children: PropTypes.any
}