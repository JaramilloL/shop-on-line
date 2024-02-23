//este componente contiene el formulario de registro del usuario
//usaremos el hook de useForm que viene de react-hppk-form para la manipulacion de los datos del formulario
import { useForm } from 'react-hook-form'

const FormRegister = () => {
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
          type="text"
          className="form-control"
          id="floatingName"
          placeholder="name"
          name="userName"
          {
            ...register('userName', {
              required: {
                value: true,
                message:'name is required'
              },
              minLength: {
                value: 4,
                message: 'more than 4 characters required'    
              },
              maxLength: {
                value: 55,
                message: 'too many characters required'
              }
            })
          }
        />
        <label htmlFor="floatingName">User Name</label>
        <p className="text-danger text-center">{ errors?.userName?.message }</p>
      </div>
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
        <p className="text-danger text-center">{ errors?.password?.message }</p>
      </div>
      <div className="d-flex justify-content-center align-content-center align-items-center">
        <button className="btn btn-success m-3">Register</button>
      </div>
    </form>
  );

};

export default FormRegister;
