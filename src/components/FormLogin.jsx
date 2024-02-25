//este componente contiene el formulario de login del usuario
//implementaremos la libreria de react-hook-form para la data de cada formulario
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormLogin = () => {
  //llamamos al contexto para actualizar el envio de login a dashboard
  const { loginUser, loginAccess, signInWithGoogle, resetPassword } =
    useContext(UserContext);

  //?usamos la navegacion para la redireccion de pagina
  const userNavigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  //creamos la funcion de envio de datos del formulario
  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      loginUser(data.email, data.password);
      loginAccess();
      userNavigate("/");
      reset();
    } catch (error) {
      console.log(error);
    }
  });
  //creamos la funcio para el inicio de secion de google
  const signInGoogle = async () => {
    try {
      await signInWithGoogle();
      loginAccess();
      userNavigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const resetP = async () => {
    const emailValue = getValues("email");
    if (!emailValue) {
      toast.error("enter yout email");
    }
    await resetPassword(emailValue);
  };

  return (
    <form className="container w-50 mt-5" onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          name="email"
          {...register("email", {
            required: {
              value: true,
              message: "email is required",
            },
          })}
        />
        <label htmlFor="floatingInput">Email address</label>
        <p className="text-danger text-center">{errors?.email?.message}</p>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          name="password"
          {...register("password", {
            required: {
              value: true,
              message: "password is required",
            },
          })}
        />
        <label htmlFor="floatingPassword">Password</label>
        <p className="text-danger text-center">{errors?.email?.message}</p>

        <div className="d-flex justify-content-center align-content-center align-align-items-center">
          <Link className="text-primary mt-3 text-center" onClick={resetP}>
            Forgot your password?
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-center align-content-center align-items-center">
        <button className="btn btn-success mt-3 w-25">LogIn</button>
      </div>
      <div className="d-flex justify-content-center align-content-center align-items-center">
        <button
          className="btn border-danger text-danger mt-3 w-25"
          onClick={signInGoogle}
        >
          Google
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default FormLogin;
