//en este componente sera la vista principal donde se muestra el contenido

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import ProfileWithGoogle from "../components/ProfileWithGoogle";
import FormAnimal from "../components/veterinarie/FormAnimal";
import FormUser from "../components/veterinarie/FormUser";

const Dashboard = () => {
  const redirection = useNavigate();

  //creamos una funcio para cerrar secion
  const logOutSeccion = async () => {
    await logout();
    redirection("/login");
  };
  //importamos el uso del contexto para pasarle si el logeo es exitoso o no y ademas observamos el change del auth
  const { user, state, logout } = useContext(UserContext);

  return (
    <div>
      {state.isAutenticated ? (
        <div>
          {user && user.displayName ? (
            <div className="container w-50 m-auto row">
              <ProfileWithGoogle user={user} logOut={logOutSeccion} />
              <div className="col-sm-12 m-auto">
                <FormAnimal/>
              </div>
              <div className="col-sm-12 m-auto">
                <FormUser/>
              </div>
            </div>
          ) : (
            <div>
              <Profile user={user} logOut={logOutSeccion} />
            </div>
          )}
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </div>
  );
};

export default Dashboard;
