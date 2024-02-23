//este componente contiene el formulario de login del usuario
//implementaremos la libreria de react-hook-form para la data de cada formulario
import { useForm } from 'react-hook-form'

const FormLogin = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();

    //creamos la funcion de envio de datos del formulario
    const onSubmit =  handleSubmit((data)=>{
        try {
            console.log(data);
            reset();
        } catch (error) {
            console.log(error)
        }
        
    })

  return (
    <form className="container w-50 mt-5" onSubmit={ onSubmit }>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          name="email"
          {
            ...register('email', {
              required: {
                value: true,
                message:'email is required'
              }
            })
          }
        />
        <label htmlFor="floatingInput">Email address</label>
        <p className="text-danger text-center">{ errors?.email?.message }</p>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          name="password"
          {
            ...register('password', {
              required: {
                value: true,
                message:'password is required'
              }
            })
          }
        />
        <label htmlFor="floatingPassword">Password</label>
        <p className="text-danger text-center">{ errors?.email?.message }</p>
      </div>
      <div className="d-flex justify-content-center align-content-center align-items-center">
        <button className="btn btn-success mt-3">LogIn</button>
      </div>
    </form>
  );
};

export default FormLogin;
