import PropTypes from "prop-types";
import perfil from "../assets/imgPerfil.jpg";

const Profile = ({ user, logOut }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        View Profile
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                User: {user && user.email}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-center align-content-center align-items-center">
              <img src={perfil} className="img-fluid w-50 rounded-5" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={logOut}
              >
                LogOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func,
};
