//este componente solo manejara ek estado de logoe de la aplicacion medinate un login o logout
const ReducerContext = (state, action) => {
  switch(action.type) {
    case 'login':
        return{
            ...state,
            isAutenticated: true,
            user: action.payload
        }
    case 'logout':
        return{
            ...state,
            isAutenticated: false,
            user: null
        }
    default:
        return state;
  }
}

export default ReducerContext