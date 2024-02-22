//este componente contiene el formulario de registro del usuario

const FormRegister = () => {
  return (
    <form className="container w-50 mt-5">
    <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingName"
          placeholder="name"
          name="userName"
        />
        <label htmlFor="floatingName">User Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          name="email"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          name="password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="d-flex justify-content-center align-content-center align-items-center">
        <button className="btn btn-success mt-3">Register</button>
      </div>
    </form>
  );

};

export default FormRegister;
