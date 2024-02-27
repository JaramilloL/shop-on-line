//pasamos mediante props la funcion d elogout y el estado del usuario
import PropTypes from "prop-types";

const ProfileWithGoogle = ({ user, logOut }) => {
  return (
    <div className="d-flex justify-content-end align-content-end align-items-end">
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
                {user && user.displayName}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-center align-content-center align-items-center">
              <img
                src={user.photoURL}
                className="img-fluid w-50 rounded-5"
              />
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

export default ProfileWithGoogle;
ProfileWithGoogle.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func,
};
