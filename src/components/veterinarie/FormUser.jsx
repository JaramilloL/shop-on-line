//usamos el hook de react-hook-form patra la extraccion de datos del formulario
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { bd } from "../../firebase/firebaseConfig";

const FormUser = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  const getDataForm = async () => {
    const username = getValues("username");
    console.log(username);

    try {
      const dataResult = await addDoc(collection(bd, "users"), {
        username: username,
      });
      console.log(dataResult.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Form User</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="user..."
            name="username"
            {...register("username", {
              required: {
                value: true,
                message: "Please enter a name",
              },
              minLength: {
                value: 5,
                message: "Please enter more than 5 characters",
              },
              maxLength: {
                value: 25,
                message: "Please enter less than 25 characters",
              },
            })}
          />
          <p className="text-center text-danger">{errors?.username?.message}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="adress" className="form-label">
            Adress
          </label>
          <input
            type="text"
            className="form-control"
            id="adress"
            placeholder="adress"
            name="adress"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="numberPhone" className="form-label">
            Phone Number:
          </label>
          <input
            type="tel"
            className="form-control"
            id="numberPhone"
            placeholder="numberPhone"
            name="phone"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="extraFact" className="form-label">
            Extra fact
          </label>
          <input
            type="email"
            className="form-control"
            id="extraFact"
            placeholder="extraFact"
            name="extra"
          />
        </div>
        <div className="d-flex justify-content-center align-content-center align-items-center">
          <button
            className="btn border-success text-success"
            onClick={getDataForm}
          >
            Accept
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUser;
